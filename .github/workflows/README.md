# GitHub Actions CI/CD

This directory contains GitHub Actions workflows for continuous integration and deployment.

## Workflows

### `ci.yml` - CI/CD Pipeline

Main pipeline that runs on every push and pull request:

#### Jobs

1. **Lint** - Code quality checks
   - Runs ESLint on dashboard code
   - Ensures code style consistency

2. **Unit & Integration Tests** - Vitest tests
   - Runs all unit tests (targeting engine)
   - Runs API integration tests
   - Generates code coverage report
   - Uploads coverage to Codecov

3. **E2E Tests** - Playwright tests
   - Installs Chromium browser
   - Runs end-to-end tests
   - Uploads test report as artifact

4. **Build** - Application build
   - Builds dashboard (Next.js)
   - Builds demo app
   - Uploads build artifacts

5. **Deploy Preview** (PR only)
   - Deploys to Vercel preview environment
   - Provides preview URL in PR comments

6. **Deploy Production** (main branch only)
   - Deploys to Vercel production
   - Runs only after all tests pass

## Required GitHub Secrets

Configure these secrets in your GitHub repository settings:

### Firebase Configuration
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

### Vercel Configuration
- `VERCEL_TOKEN` - Vercel authentication token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

### Optional
- `CODECOV_TOKEN` - For uploading code coverage

## Setting up Vercel Secrets

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Link your project:
   ```bash
   cd apps/dashboard
   vercel link
   ```

4. Get your org and project IDs:
   ```bash
   vercel project ls
   ```

5. Generate a Vercel token:
   - Go to https://vercel.com/account/tokens
   - Create new token
   - Add to GitHub secrets

## Triggering Workflows

- **Push to `main`** → Full CI/CD + Production deployment
- **Push to `develop`** → Full CI/CD (no deployment)
- **Pull Request** → Full CI/CD + Preview deployment

## Viewing Results

- Test results are visible in the Actions tab
- Playwright reports are uploaded as artifacts
- Coverage reports are sent to Codecov
- Preview URLs are commented on PRs

## Local Testing

Test the workflow locally before pushing:

```bash
# Run lint
cd apps/dashboard
npm run lint

# Run unit tests
npm test

# Run E2E tests
npm run test:e2e

# Build
npm run build
```
