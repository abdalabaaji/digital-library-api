'use client';

import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config/api';

interface Author {
  id: string;
  name: string;
  bio: string;
}

export default function AuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingAuthor, setEditingAuthor] = useState<Author | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    bio: '',
  });

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/authors`);
      const data = await response.json();
      setAuthors(data);
    } catch (error) {
      console.error('Failed to fetch authors:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingAuthor ? `${API_BASE_URL}/api/authors/${editingAuthor.id}` : `${API_BASE_URL}/api/authors`;
    const method = editingAuthor ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchAuthors();
        resetForm();
        setShowForm(false);
      }
    } catch (error) {
      console.error('Failed to save author:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this author?')) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/authors/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchAuthors();
      }
    } catch (error) {
      console.error('Failed to delete author:', error);
    }
  };

  const handleEdit = (author: Author) => {
    setEditingAuthor(author);
    setFormData(author);
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      bio: '',
    });
    setEditingAuthor(null);
  };

  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Authors Management</h1>
            <p className="text-gray-600">Manage your library's author database</p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowForm(!showForm);
            }}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
          >
            {showForm ? 'Cancel' : '+ Add New Author'}
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingAuthor ? 'Edit Author' : 'Add New Author'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author ID</label>
                <input
                  type="text"
                  required
                  disabled={!!editingAuthor}
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., A001"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter author's full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Biography</label>
                <textarea
                  required
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter author's biography"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  {editingAuthor ? 'Update Author' : 'Add Author'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setShowForm(false);
                  }}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search authors by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading authors...</p>
            </div>
          ) : filteredAuthors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No authors found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAuthors.map((author) => (
                <div
                  key={author.id}
                  className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md p-6 border border-green-100 hover:shadow-lg transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">👤</div>
                    <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                      {author.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{author.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{author.bio}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(author)}
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(author.id)}
                      className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 text-sm text-gray-600">
            Showing {filteredAuthors.length} of {authors.length} authors
          </div>
        </div>
      </div>
    </main>
  );
}
