-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Organizations table
CREATE TABLE organizations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id)
);

CREATE INDEX idx_organizations_slug ON organizations(slug);

-- Organization members (many-to-many)
CREATE TABLE organization_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid REFERENCES organizations(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  role text NOT NULL CHECK (role IN ('owner', 'admin', 'member')),
  created_at timestamptz DEFAULT now(),
  UNIQUE(organization_id, user_id)
);

CREATE INDEX idx_org_members_org_id ON organization_members(organization_id);
CREATE INDEX idx_org_members_user_id ON organization_members(user_id);

-- Projects table
CREATE TABLE projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid REFERENCES organizations(id) ON DELETE CASCADE,
  name text NOT NULL,
  key text NOT NULL, -- unique identifier like 'mobile-app'
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id),
  UNIQUE(organization_id, key)
);

CREATE INDEX idx_projects_org_id ON projects(organization_id);
CREATE INDEX idx_projects_key ON projects(key);

-- Environments table
CREATE TABLE environments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  name text NOT NULL, -- 'Development', 'Staging', 'Production'
  key text NOT NULL,  -- 'dev', 'staging', 'prod'
  api_key_hash text,  -- hashed API key for this environment
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(project_id, key)
);

CREATE INDEX idx_environments_project_id ON environments(project_id);
CREATE INDEX idx_environments_key ON environments(key);

-- Feature flags table
CREATE TABLE feature_flags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  name text NOT NULL,
  key text NOT NULL, -- unique identifier like 'dark-mode'
  description text,
  flag_type text NOT NULL CHECK (flag_type IN ('boolean', 'multivariate', 'number', 'json')),
  default_value jsonb NOT NULL,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id),
  UNIQUE(project_id, key)
);

CREATE INDEX idx_flags_project_id ON feature_flags(project_id);
CREATE INDEX idx_flags_key ON feature_flags(key);
CREATE INDEX idx_flags_tags ON feature_flags USING gin(tags);

-- Flag values per environment
CREATE TABLE flag_values (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  flag_id uuid REFERENCES feature_flags(id) ON DELETE CASCADE,
  environment_id uuid REFERENCES environments(id) ON DELETE CASCADE,
  enabled boolean DEFAULT false,
  value jsonb NOT NULL,
  rules jsonb, -- Targeting rules
  updated_at timestamptz DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id),
  UNIQUE(flag_id, environment_id)
);

CREATE INDEX idx_flag_values_flag_id ON flag_values(flag_id);
CREATE INDEX idx_flag_values_env_id ON flag_values(environment_id);

-- API keys table
CREATE TABLE api_keys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  environment_id uuid REFERENCES environments(id) ON DELETE CASCADE,
  name text NOT NULL,
  key_prefix text NOT NULL, -- e.g. 'fsk_prod_' (visible)
  key_hash text NOT NULL,   -- bcrypt hash of full key
  key_type text NOT NULL CHECK (key_type IN ('client', 'server')),
  revoked boolean DEFAULT false,
  last_used_at timestamptz,
  created_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id)
);

CREATE INDEX idx_api_keys_env_id ON api_keys(environment_id);
CREATE INDEX idx_api_keys_prefix ON api_keys(key_prefix);
CREATE INDEX idx_api_keys_revoked ON api_keys(revoked) WHERE NOT revoked;

-- Audit logs table
CREATE TABLE audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid REFERENCES organizations(id),
  project_id uuid REFERENCES projects(id),
  environment_id uuid REFERENCES environments(id),
  user_id uuid REFERENCES auth.users(id),
  action text NOT NULL, -- 'flag.created', 'flag.updated', 'flag.deleted'
  resource_type text NOT NULL, -- 'flag', 'project', 'api_key'
  resource_id uuid,
  changes jsonb, -- before/after state
  ip_address inet,
  user_agent text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX idx_audit_logs_org_id ON audit_logs(organization_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at DESC);
CREATE INDEX idx_audit_logs_action ON audit_logs(action);

-- Trigger function for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to tables with updated_at
CREATE TRIGGER update_organizations_updated_at BEFORE UPDATE ON organizations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_environments_updated_at BEFORE UPDATE ON environments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_feature_flags_updated_at BEFORE UPDATE ON feature_flags
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_flag_values_updated_at BEFORE UPDATE ON flag_values
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE organization_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE environments ENABLE ROW LEVEL SECURITY;
ALTER TABLE feature_flags ENABLE ROW LEVEL SECURITY;
ALTER TABLE flag_values ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Organizations: Users can see orgs they're members of
CREATE POLICY "Users can view their organizations" ON organizations
  FOR SELECT USING (
    id IN (
      SELECT organization_id FROM organization_members
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create organizations" ON organizations
  FOR INSERT WITH CHECK (created_by = auth.uid());

CREATE POLICY "Owners and admins can update organizations" ON organizations
  FOR UPDATE USING (
    id IN (
      SELECT organization_id FROM organization_members
      WHERE user_id = auth.uid() AND role IN ('owner', 'admin')
    )
  );

-- Organization members: Users can see members of their organizations
CREATE POLICY "Users can view org members" ON organization_members
  FOR SELECT USING (
    organization_id IN (
      SELECT organization_id FROM organization_members
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Owners and admins can manage members" ON organization_members
  FOR ALL USING (
    organization_id IN (
      SELECT organization_id FROM organization_members
      WHERE user_id = auth.uid() AND role IN ('owner', 'admin')
    )
  );

-- Projects: Users can see projects in their organizations
CREATE POLICY "Users can view organization projects" ON projects
  FOR SELECT USING (
    organization_id IN (
      SELECT organization_id FROM organization_members
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Owners and admins can manage projects" ON projects
  FOR ALL USING (
    organization_id IN (
      SELECT organization_id FROM organization_members
      WHERE user_id = auth.uid() AND role IN ('owner', 'admin')
    )
  );

-- Environments: Users can see environments of accessible projects
CREATE POLICY "Users can view project environments" ON environments
  FOR SELECT USING (
    project_id IN (
      SELECT p.id FROM projects p
      JOIN organization_members om ON p.organization_id = om.organization_id
      WHERE om.user_id = auth.uid()
    )
  );

-- Feature flags: Users can see flags in their projects
CREATE POLICY "Users can view project flags" ON feature_flags
  FOR SELECT USING (
    project_id IN (
      SELECT p.id FROM projects p
      JOIN organization_members om ON p.organization_id = om.organization_id
      WHERE om.user_id = auth.uid()
    )
  );

CREATE POLICY "Members can manage flags" ON feature_flags
  FOR ALL USING (
    project_id IN (
      SELECT p.id FROM projects p
      JOIN organization_members om ON p.organization_id = om.organization_id
      WHERE om.user_id = auth.uid()
    )
  );

-- Flag values: Users can see flag values in their projects
CREATE POLICY "Users can view flag values" ON flag_values
  FOR SELECT USING (
    flag_id IN (
      SELECT f.id FROM feature_flags f
      JOIN projects p ON f.project_id = p.id
      JOIN organization_members om ON p.organization_id = om.organization_id
      WHERE om.user_id = auth.uid()
    )
  );

CREATE POLICY "Members can manage flag values" ON flag_values
  FOR ALL USING (
    flag_id IN (
      SELECT f.id FROM feature_flags f
      JOIN projects p ON f.project_id = p.id
      JOIN organization_members om ON p.organization_id = om.organization_id
      WHERE om.user_id = auth.uid()
    )
  );

-- API keys: Users can see API keys in their environments
CREATE POLICY "Users can view api keys" ON api_keys
  FOR SELECT USING (
    environment_id IN (
      SELECT e.id FROM environments e
      JOIN projects p ON e.project_id = p.id
      JOIN organization_members om ON p.organization_id = om.organization_id
      WHERE om.user_id = auth.uid()
    )
  );

CREATE POLICY "Owners and admins can manage api keys" ON api_keys
  FOR ALL USING (
    environment_id IN (
      SELECT e.id FROM environments e
      JOIN projects p ON e.project_id = p.id
      JOIN organization_members om ON p.organization_id = om.organization_id
      WHERE om.user_id = auth.uid() AND om.role IN ('owner', 'admin')
    )
  );

-- Audit logs: Users can see logs of their organizations
CREATE POLICY "Users can view audit logs" ON audit_logs
  FOR SELECT USING (
    organization_id IN (
      SELECT organization_id FROM organization_members
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "System can insert audit logs" ON audit_logs
  FOR INSERT WITH CHECK (true);
