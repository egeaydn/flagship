'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { getUserOrganizations, createOrganization } from '@/lib/firestore';

interface Organization {
  id: string;
  name: string;
  slug: string;
  createdAt: any;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', slug: '' });
  const [creating, setCreating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await loadOrganizations(user.uid);
      } else {
        router.push('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const loadOrganizations = async (userId: string) => {
    try {
      const orgs = await getUserOrganizations(userId);
      setOrganizations(orgs as Organization[]);
    } catch (error) {
      console.error('Error loading organizations:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleCreateOrg = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setCreating(true);
    try {
      await createOrganization({
        name: formData.name,
        slug: formData.slug,
        createdBy: user.uid,
      });

      setFormData({ name: '', slug: '' });
      setShowCreateForm(false);
      await loadOrganizations(user.uid);
    } catch (error: any) {
      console.error('Error creating organization:', error);
      alert('Hata: ' + error.message);
    } finally {
      setCreating(false);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Flagship Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">{user?.email}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Organizations</h2>
            <button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
            >
              {showCreateForm ? 'İptal' : '+ Yeni Organization'}
            </button>
          </div>

          {/* Create Form */}
          {showCreateForm && (
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Yeni Organization Oluştur</h3>
              <form onSubmit={handleCreateOrg} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organization Adı
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({
                        name: e.target.value,
                        slug: generateSlug(e.target.value),
                      });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Şirket Adı"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug (URL)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="sirket-adi"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    URL: flagship.com/{formData.slug || 'slug'}
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={creating}
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium disabled:opacity-50"
                >
                  {creating ? 'Oluşturuluyor...' : 'Oluştur'}
                </button>
              </form>
            </div>
          )}

          {/* Organizations List */}
          {organizations.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500 mb-4">Henüz organization oluşturmadınız.</p>
              <button
                onClick={() => setShowCreateForm(true)}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                İlk organization'ınızı oluşturun →
              </button>
            </div>
          ) : (
            <div className="grid gap-4">
              {organizations.map((org) => (
                <div
                  key={org.id}
                  className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => router.push(`/dashboard/${org.slug}`)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{org.name}</h3>
                      <p className="text-sm text-gray-500">/{org.slug}</p>
                    </div>
                    <span className="text-xs text-gray-400">
                      {org.createdAt?.toDate?.()?.toLocaleDateString('tr-TR') || 'Yeni'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
