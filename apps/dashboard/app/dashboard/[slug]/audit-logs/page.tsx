'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { getAuditLogs } from '@/lib/firestore';

interface AuditLog {
  id: string;
  action: string;
  userId: string;
  userEmail: string;
  resourceType: string;
  resourceId: string;
  resourceName?: string;
  changes?: {
    before?: any;
    after?: any;
  };
  timestamp?: any;
  createdAt?: any;
}

export default function AuditLogsPage() {
  const params = useParams();
  const [user, setUser] = useState<any>(null);
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      loadLogs();
    }
  }, [user]);

  async function loadLogs() {
    try {
      setLoading(true);
      // Get organization from slug
      const orgId = params.slug as string; // In production, resolve slug to org ID
      const auditLogs = await getAuditLogs(orgId);
      setLogs(auditLogs as AuditLog[]);
    } catch (error) {
      console.error('Error loading audit logs:', error);
    } finally {
      setLoading(false);
    }
  }

  function formatDate(timestamp: any) {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleString('tr-TR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function getActionBadgeColor(action: string) {
    if (action.includes('CREATED')) return 'bg-green-100 text-green-700';
    if (action.includes('DELETED')) return 'bg-red-100 text-red-700';
    if (action.includes('UPDATED') || action.includes('ENABLED') || action.includes('DISABLED')) {
      return 'bg-blue-100 text-blue-700';
    }
    return 'bg-gray-100 text-gray-700';
  }

  function formatActionName(action: string) {
    return action.replace(/_/g, ' ').toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const filteredLogs = logs.filter(log => {
    if (filter !== 'all' && !log.action.toLowerCase().includes(filter.toLowerCase())) {
      return false;
    }
    if (searchTerm && !log.resourceName?.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !log.userEmail?.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500">Loading audit logs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">📋 Audit Logs</h1>
          <p className="text-gray-600 mt-2">
            Track all changes and activities in your organization
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search by resource or user..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Actions</option>
              <option value="created">Created</option>
              <option value="updated">Updated</option>
              <option value="deleted">Deleted</option>
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
              <option value="targeting">Targeting Rules</option>
            </select>
          </div>
        </div>

        {/* Logs List */}
        {filteredLogs.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-500">No audit logs found</p>
            <p className="text-sm text-gray-400 mt-2">
              Activities will appear here as you make changes
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200">
              {filteredLogs.map((log) => (
                <div key={log.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Action & Resource */}
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getActionBadgeColor(log.action)}`}>
                          {formatActionName(log.action)}
                        </span>
                        <span className="text-gray-600 text-sm">
                          on <span className="font-medium text-gray-900">{log.resourceName || log.resourceId}</span>
                        </span>
                      </div>

                      {/* User & Time */}
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>
                          👤 <span className="font-medium">{log.userEmail || 'Unknown'}</span>
                        </span>
                        <span>
                          🕒 {formatDate(log.timestamp || log.createdAt)}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                          {log.resourceType}
                        </span>
                      </div>

                      {/* Changes */}
                      {log.changes && (
                        <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="grid grid-cols-2 gap-4">
                            {log.changes.before !== undefined && (
                              <div>
                                <h4 className="text-xs font-semibold text-gray-700 mb-2">BEFORE</h4>
                                <pre className="text-xs bg-white p-3 rounded border border-gray-200 overflow-auto max-h-32">
                                  {JSON.stringify(log.changes.before, null, 2)}
                                </pre>
                              </div>
                            )}
                            {log.changes.after !== undefined && (
                              <div>
                                <h4 className="text-xs font-semibold text-gray-700 mb-2">AFTER</h4>
                                <pre className="text-xs bg-white p-3 rounded border border-gray-200 overflow-auto max-h-32">
                                  {JSON.stringify(log.changes.after, null, 2)}
                                </pre>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium text-gray-900">{filteredLogs.length}</span> of{' '}
            <span className="font-medium text-gray-900">{logs.length}</span> audit logs
          </div>
        </div>
      </div>
    </div>
  );
}
