'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { API_BASE_URL } from './config/api';

interface Stats {
  books: number;
  authors: number;
  members: number;
  transactions: number;
  availableBooks: number;
  borrowedBooks: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    books: 0,
    authors: 0,
    members: 0,
    transactions: 0,
    availableBooks: 0,
    borrowedBooks: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [booksRes, authorsRes, membersRes, transactionsRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/books`),
          fetch(`${API_BASE_URL}/api/authors`),
          fetch(`${API_BASE_URL}/api/members`),
          fetch(`${API_BASE_URL}/api/transactions`),
        ]);

        const books = await booksRes.json();
        const authors = await authorsRes.json();
        const members = await membersRes.json();
        const transactions = await transactionsRes.json();

        const availableBooks = books.filter((b: any) => b.isAvailable).length;
        const borrowedBooks = books.length - availableBooks;

        setStats({
          books: books.length,
          authors: authors.length,
          members: members.length,
          transactions: transactions.length,
          availableBooks,
          borrowedBooks,
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { title: 'Total Books', value: stats.books, icon: '📚', color: 'from-blue-500 to-blue-600', link: '/books' },
    { title: 'Authors', value: stats.authors, icon: '👤', color: 'from-green-500 to-green-600', link: '/authors' },
    { title: 'Members', value: stats.members, icon: '👥', color: 'from-purple-500 to-purple-600', link: '/members' },
    { title: 'Transactions', value: stats.transactions, icon: '🔄', color: 'from-orange-500 to-orange-600', link: '/transactions' },
    { title: 'Available Books', value: stats.availableBooks, icon: '✅', color: 'from-teal-500 to-teal-600', link: '/books' },
    { title: 'Borrowed Books', value: stats.borrowedBooks, icon: '📖', color: 'from-pink-500 to-pink-600', link: '/transactions' },
  ];

  const quickActions = [
    { title: 'Add New Book', icon: '➕📚', color: 'bg-blue-500', link: '/books' },
    { title: 'Add Author', icon: '➕👤', color: 'bg-green-500', link: '/authors' },
    { title: 'Register Member', icon: '➕👥', color: 'bg-purple-500', link: '/members' },
    { title: 'New Transaction', icon: '➕🔄', color: 'bg-orange-500', link: '/transactions' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Digital Library
          </h1>
          <p className="text-xl text-gray-600">
            Manage your complete library system with ease
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Library Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statCards.map((stat, index) => (
              <Link
                key={index}
                href={stat.link}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-5xl p-4 bg-gradient-to-r ${stat.color} rounded-2xl shadow-md`}>
                    {stat.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                    <p className={`text-4xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                      {loading ? '...' : stat.value}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.link}
                className={`${action.color} text-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                <div className="text-4xl mb-3">{action.icon}</div>
                <p className="font-semibold text-lg">{action.title}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Books Management */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Books Management</h3>
            <p className="text-gray-600 mb-4">
              Add, edit, and manage your entire book collection with detailed information.
            </p>
            <Link
              href="/books"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Manage Books →
            </Link>
          </div>

          {/* Member Management */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Member Management</h3>
            <p className="text-gray-600 mb-4">
              Register and manage library members, track their borrowing history.
            </p>
            <Link
              href="/members"
              className="inline-block bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-600 transition"
            >
              Manage Members →
            </Link>
          </div>

          {/* Transactions */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-5xl mb-4">🔄</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Transactions</h3>
            <p className="text-gray-600 mb-4">
              Handle book checkouts, returns, and track all library transactions.
            </p>
            <Link
              href="/transactions"
              className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              View Transactions →
            </Link>
          </div>
        </div>

        {/* API Documentation Link */}
        <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Developer API</h2>
          <p className="text-lg mb-6">
            Access our RESTful API documentation to integrate with your applications
          </p>
          <Link
            href="/docs"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            View API Documentation →
          </Link>
        </div>
      </div>
    </main>
  );
}
