'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { getAggregatedAnalytics } from '@/lib/firestore';

interface FlagAnalytics {
  flagKey: string;
  flagId: string;
  evaluations: number;
  uniqueUsers: number;
  trueCount: number;
  falseCount: number;
  targetingAppliedCount: number;
}

export default function AnalyticsPage() {
  const params = useParams();
  const [user, setUser] = useState<any>(null);
  const [analytics, setAnalytics] = useState<FlagAnalytics[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState(7); // days
  const [projectId, setProjectId] = useState<string>('');
  const [environmentId, setEnvironmentId] = useState<string>('');
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    document.title = 'Analytics | Flagship';
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      loadAnalytics();
    }
  }, [user, timeRange]);

  // Auto-refresh effect
  useEffect(() => {
    if (autoRefresh && user) {
      const interval = setInterval(() => {
        loadAnalytics();
      }, 5000); // Refresh every 5 seconds
      
      return () => clearInterval(interval);
    }
  }, [autoRefresh, user]);

  // Auto-refresh effect
  useEffect(() => {
    if (autoRefresh && user) {
      const interval = setInterval(() => {
        loadAnalytics();
      }, 5000); // Refresh every 5 seconds
      
      return () => clearInterval(interval);
    }
  }, [autoRefresh, user]);

  async function loadAnalytics() {
    try {
      setLoading(true);
      // In production, resolve these from params
      const projId = params.projectKey as string;
      const envId = 'production'; // Default to production environment
      
      console.log('📊 Analytics Query:', { projId, envId, slug: params.slug });
      
      setProjectId(projId);
      setEnvironmentId(envId);
      
      const data = await getAggregatedAnalytics(projId, envId, timeRange);
      console.log('📊 Analytics Data:', data);
      setAnalytics(data as FlagAnalytics[]);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      setLoading(false);
    }
  }

  function getUsagePercentage(trueCount: number, falseCount: number) {
    const total = trueCount + falseCount;
    if (total === 0) return 0;
    return Math.round((trueCount / total) * 100);
  }

  const totalEvaluations = analytics.reduce((sum, item) => sum + item.evaluations, 0);
  const totalUniqueUsers = new Set(analytics.flatMap(() => [])).size; // Simplified
  const avgEvaluationsPerFlag = analytics.length > 0 ? Math.round(totalEvaluations / analytics.length) : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <Link 
                href={`/dashboard/${params.slug}/projects/${params.projectKey}`}
                className="text-blue-600 hover:text-blue-700 text-sm mb-2 inline-block"
              >
                ← Back to Project
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">📊 Analytics Dashboard</h1>
              <p className="text-gray-600 mt-2">
                Flag usage and performance metrics
              </p>
              {lastUpdated && (
                <p className="text-sm text-gray-500 mt-1">
                  Last updated: {lastUpdated.toLocaleTimeString('tr-TR')}
                  {autoRefresh && <span className="ml-2 text-green-600">● Live</span>}
                </p>
              )}
            </div>
            
            <div className="flex gap-2">
              {/* Refresh Button */}
              <button
                onClick={() => loadAnalytics()}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🔄 Refresh
              </button>
              
              {/* Auto-Refresh Toggle */}
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  autoRefresh 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {autoRefresh ? '⏸️ Stop Auto-Refresh' : '▶️ Auto-Refresh'}
              </button>
              
              {/* Time Range Filter */}
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(Number(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500"
              >
                <option value={1}>Last 24 hours</option>
                <option value={7}>Last 7 days</option>
                <option value={30}>Last 30 days</option>
                <option value={90}>Last 90 days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Evaluations</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {totalEvaluations.toLocaleString()}
                </p>
              </div>
              <div className="text-4xl">📈</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Flags</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {analytics.length}
                </p>
              </div>
              <div className="text-4xl">🚩</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Evaluations/Flag</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {avgEvaluationsPerFlag.toLocaleString()}
                </p>
              </div>
              <div className="text-4xl">⚡</div>
            </div>
          </div>
        </div>

        {/* Flags Table */}
        {analytics.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-500">No analytics data available</p>
            <p className="text-sm text-gray-400 mt-2">
              Data will appear here as your flags are evaluated via the API
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Flag
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Evaluations
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Unique Users
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Enabled %
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Targeting Used
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Distribution
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {analytics
                  .sort((a, b) => b.evaluations - a.evaluations)
                  .map((item) => {
                    const enabledPct = getUsagePercentage(item.trueCount, item.falseCount);
                    const targetingPct = item.evaluations > 0 
                      ? Math.round((item.targetingAppliedCount / item.evaluations) * 100) 
                      : 0;

                    return (
                      <tr key={item.flagKey} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">
                              {item.flagKey}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {item.evaluations.toLocaleString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {item.uniqueUsers.toLocaleString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-900">
                              {enabledPct}%
                            </span>
                            <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: `${enabledPct}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            targetingPct > 0 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {targetingPct}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex gap-2">
                            <span className="text-green-600">
                              ✓ {item.trueCount}
                            </span>
                            <span className="text-gray-400">|</span>
                            <span className="text-red-600">
                              ✗ {item.falseCount}
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="text-blue-600 text-xl mr-3">💡</div>
            <div className="text-sm text-blue-800">
              <p className="font-medium">Analytics Tracking</p>
              <p className="mt-1">
                Every flag evaluation via the API is tracked here. Use this data to understand which features 
                are most used, identify unused flags for cleanup, and monitor targeting rule effectiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
