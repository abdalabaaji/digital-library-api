'use client';

import { useState } from 'react';

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://digital-library-api.vercel.app';
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6 relative">
            <div className="text-8xl mb-4 animate-float">📚</div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-4 leading-tight animate-slide-down">
            Digital Library API
          </h1>

          <p className="text-2xl md:text-3xl text-gray-700 mb-3 font-semibold animate-slide-up">
            RESTful API for Library Management System
          </p>

          <div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-600 mb-10">
            <span className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full font-medium shadow-sm">CMPS312</span>
            <span>•</span>
            <span className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full font-medium shadow-sm">Assignment 4</span>
            <span>•</span>
            <span className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full font-medium shadow-sm">Qatar University</span>
          </div>

          <div className="inline-flex items-center gap-3 bg-white px-6 md:px-10 py-4 md:py-5 rounded-2xl shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300 group animate-scale-in">
            <div className="flex flex-col items-start">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">API Base URL</p>
              <code className="text-base md:text-xl text-indigo-600 font-mono font-bold break-all">{apiUrl}</code>
            </div>
            <button
              onClick={copyToClipboard}
              className="ml-2 p-3 hover:bg-indigo-50 rounded-lg transition-colors group-hover:scale-110 transition-transform"
              title="Copy URL"
            >
              {copiedUrl ? (
                <span className="text-2xl">✓</span>
              ) : (
                <span className="text-2xl">📋</span>
              )}
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto">
            {[
              { icon: '👤', number: '7', label: 'Authors', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' },
              { icon: '📖', number: '8', label: 'Books', color: 'from-green-500 to-green-600', bgColor: 'bg-green-50' },
              { icon: '👥', number: '6', label: 'Members', color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50' },
              { icon: '👔', number: '3', label: 'Staff', color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50' },
              { icon: '🔄', number: '8', label: 'Transactions', color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-50' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`${stat.bgColor} p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/50 backdrop-blur-sm cursor-pointer group`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className={`text-4xl font-extrabold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-1`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-700 font-semibold uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="mb-16 grid md:grid-cols-3 gap-6">
          {/* Total Endpoints Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <div className="text-5xl font-extrabold mb-2">29</div>
            <p className="text-indigo-100 text-lg font-medium">Total Endpoints</p>
          </div>

          {/* Authentication Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🔐</span>
              <h3 className="text-2xl font-bold text-gray-800">Authentication</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Use staff credentials to access protected endpoints
            </p>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 border border-green-200">
              <p className="text-xs text-gray-600 font-semibold mb-1">Endpoint</p>
              <code className="text-sm font-mono font-bold text-green-700">POST /api/auth</code>
            </div>
          </div>

          {/* Test Credentials Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🔑</span>
              <h3 className="text-2xl font-bold text-gray-800">Test Credentials</h3>
            </div>
            <div className="space-y-2">
              {[
                { username: 'admin', password: 'admin123', role: 'Admin', color: 'bg-purple-100 text-purple-700' },
                { username: 'librarian', password: 'lib123', role: 'Librarian', color: 'bg-blue-100 text-blue-700' },
                { username: 'staff', password: 'staff123', role: 'Staff', color: 'bg-orange-100 text-orange-700' },
              ].map((cred, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-2 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="flex justify-between items-center">
                    <code className="text-xs font-mono text-gray-700">{cred.username} / {cred.password}</code>
                    <span className={`text-xs px-2 py-1 rounded font-semibold ${cred.color}`}>{cred.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Endpoints Navigation */}
        <div className="mb-8 sticky top-4 z-20 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span>📚</span>
              API Endpoints
            </h2>
            <div className="flex gap-2 flex-wrap">
              {[
                { id: 'all', label: 'All', icon: '🌐' },
                { id: 'auth', label: 'Auth', icon: '🔐' },
                { id: 'authors', label: 'Authors', icon: '👤' },
                { id: 'books', label: 'Books', icon: '📖' },
                { id: 'members', label: 'Members', icon: '👥' },
                { id: 'staff', label: 'Staff', icon: '👔' },
                { id: 'transactions', label: 'Transactions', icon: '🔄' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Endpoints Sections */}
        <div className="space-y-8">

          {/* Authentication */}
          {(activeTab === 'all' || activeTab === 'auth') && (
            <EndpointSection
              title="Authentication"
              icon="🔐"
              color="purple"
              id="auth"
              endpoints={[
              {
                method: 'POST',
                path: '/api/auth',
                description: 'Authenticate staff member with username and password',
                requestBody: {
                  username: 'string',
                  password: 'string',
                },
                response: {
                  staffId: 'string',
                  username: 'string',
                  fullName: 'string',
                  role: 'string',
                },
              },
            ]}
            />
          )}

          {/* Authors */}
          {(activeTab === 'all' || activeTab === 'authors') && (
            <EndpointSection
              title="Authors"
              icon="👤"
              color="blue"
              id="authors"
              endpoints={[
              {
                method: 'GET',
                path: '/api/authors',
                description: 'Get all authors in the library',
                response: [{ id: 'string', name: 'string', biography: 'string', birthYear: 'number' }],
              },
              {
                method: 'GET',
                path: '/api/authors/:id',
                description: 'Get a specific author by their ID',
                response: { id: 'string', name: 'string', biography: 'string', birthYear: 'number' },
              },
              {
                method: 'POST',
                path: '/api/authors',
                description: 'Create a new author',
                requestBody: {
                  id: 'string',
                  name: 'string',
                  biography: 'string (optional)',
                  birthYear: 'number',
                },
              },
              {
                method: 'PUT',
                path: '/api/authors/:id',
                description: 'Update an existing author',
                requestBody: {
                  name: 'string',
                  biography: 'string (optional)',
                  birthYear: 'number',
                },
              },
              {
                method: 'DELETE',
                path: '/api/authors/:id',
                description: 'Delete an author from the library',
              },
            ]}
          />
          )}

          {/* Books */}
          {(activeTab === 'all' || activeTab === 'books') && (
            <EndpointSection
              title="Books"
              icon="📖"
              color="green"
              id="books"
              endpoints={[
              {
                method: 'GET',
                path: '/api/books',
                description: 'Get all books in the library (supports filtering by authorId)',
                response: [{ id: 'string', title: 'string', authorId: 'string', publishedYear: 'number', category: 'string', isAvailable: 'boolean' }],
              },
              {
                method: 'GET',
                path: '/api/books/:id',
                description: 'Get a specific book by its ID',
                response: { id: 'string', title: 'string', authorId: 'string', publishedYear: 'number', category: 'string' },
              },
              {
                method: 'POST',
                path: '/api/books',
                description: 'Add a new book to the library',
                requestBody: {
                  id: 'string',
                  title: 'string',
                  authorId: 'string',
                  publishedYear: 'number',
                  category: 'string',
                  isbn: 'string',
                  pageCount: 'number',
                  publisher: 'string',
                },
              },
              {
                method: 'PUT',
                path: '/api/books/:id',
                description: 'Update book information',
                requestBody: {
                  title: 'string',
                  isAvailable: 'boolean',
                },
              },
              {
                method: 'DELETE',
                path: '/api/books/:id',
                description: 'Remove a book from the library',
              },
            ]}
            />
          )}

          {/* Members */}
          {(activeTab === 'all' || activeTab === 'members') && (
            <EndpointSection
              title="Members"
              icon="👥"
              color="purple"
              id="members"
              endpoints={[
              {
                method: 'GET',
                path: '/api/members',
                description: 'Get all library members',
                response: [{ id: 'string', name: 'string', email: 'string', phone: 'string', memberType: 'string' }],
              },
              {
                method: 'GET',
                path: '/api/members/:id',
                description: 'Get a specific member by ID (includes transaction history)',
                response: { id: 'string', name: 'string', email: 'string', transactions: 'array' },
              },
              {
                method: 'POST',
                path: '/api/members',
                description: 'Register a new library member',
                requestBody: {
                  id: 'string',
                  name: 'string',
                  email: 'string',
                  phone: 'string',
                  memberType: 'string (student/faculty/staff)',
                },
              },
              {
                method: 'PUT',
                path: '/api/members/:id',
                description: 'Update member information',
                requestBody: {
                  name: 'string',
                  email: 'string',
                  memberType: 'string',
                },
              },
              {
                method: 'DELETE',
                path: '/api/members/:id',
                description: 'Remove a member from the system',
              },
            ]}
            />
          )}

          {/* Staff */}
          {(activeTab === 'all' || activeTab === 'staff') && (
            <EndpointSection
              title="Staff"
              icon="👔"
              color="orange"
              id="staff"
              endpoints={[
              {
                method: 'GET',
                path: '/api/staff',
                description: 'Get all staff members',
                response: [{ staffId: 'string', username: 'string', fullName: 'string', role: 'string' }],
              },
              {
                method: 'GET',
                path: '/api/staff/:id',
                description: 'Get a specific staff member by ID',
                response: { staffId: 'string', username: 'string', fullName: 'string', role: 'string' },
              },
              {
                method: 'POST',
                path: '/api/staff',
                description: 'Add a new staff member',
                requestBody: {
                  staffId: 'string',
                  username: 'string',
                  password: 'string',
                  fullName: 'string',
                  role: 'string (admin/librarian/staff)',
                },
              },
              {
                method: 'PUT',
                path: '/api/staff/:id',
                description: 'Update staff member information',
                requestBody: {
                  username: 'string',
                  fullName: 'string',
                  role: 'string',
                },
              },
              {
                method: 'DELETE',
                path: '/api/staff/:id',
                description: 'Remove a staff member',
              },
            ]}
            />
          )}

          {/* Transactions */}
          {(activeTab === 'all' || activeTab === 'transactions') && (
            <EndpointSection
              title="Transactions"
              icon="🔄"
              color="pink"
              id="transactions"
              endpoints={[
              {
                method: 'GET',
                path: '/api/transactions',
                description: 'Get all transactions (supports filtering by memberId or bookId)',
                response: [{ id: 'string', memberId: 'string', bookId: 'string', borrowDate: 'date', dueDate: 'date', isReturned: 'boolean' }],
              },
              {
                method: 'GET',
                path: '/api/transactions/:id',
                description: 'Get a specific transaction by ID',
                response: { id: 'string', memberId: 'string', bookId: 'string', borrowDate: 'date', returnDate: 'date' },
              },
              {
                method: 'POST',
                path: '/api/transactions',
                description: 'Create a new book borrowing transaction',
                requestBody: {
                  id: 'string',
                  memberId: 'string',
                  bookId: 'string',
                  borrowDate: 'ISO 8601 date',
                  dueDate: 'ISO 8601 date',
                },
              },
              {
                method: 'PUT',
                path: '/api/transactions/:id',
                description: 'Update transaction (e.g., mark book as returned)',
                requestBody: {
                  isReturned: 'boolean',
                  returnDate: 'ISO 8601 date',
                },
              },
              {
                method: 'DELETE',
                path: '/api/transactions/:id',
                description: 'Delete a transaction record',
              },
            ]}
            />
          )}

        </div>

        {/* Response Format & Status Codes */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">

          {/* Response Format */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-gray-100">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
              <span className="text-4xl">📋</span>
              Response Format
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-3 flex items-center gap-2">
                  <span>✓</span> Success Response
                </h3>
                <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
                  <pre className="text-sm text-green-400 font-mono">{`{
  "id": "book001",
  "title": "Advanced Data Structures",
  "authorId": "auth001",
  "publishedYear": 2023,
  "category": "Computer Science",
  "isAvailable": true
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3 flex items-center gap-2">
                  <span>✗</span> Error Response
                </h3>
                <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
                  <pre className="text-sm text-red-400 font-mono">{`{
  "error": "Resource not found"
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Status Codes */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-gray-100">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
              <span className="text-4xl">📊</span>
              HTTP Status Codes
            </h2>

            <div className="space-y-4">
              {[
                { code: '200', name: 'OK', desc: 'Request successful', color: 'green' },
                { code: '201', name: 'Created', desc: 'Resource created', color: 'green' },
                { code: '400', name: 'Bad Request', desc: 'Invalid data', color: 'yellow' },
                { code: '404', name: 'Not Found', desc: 'Resource not found', color: 'red' },
                { code: '409', name: 'Conflict', desc: 'Resource exists', color: 'orange' },
                { code: '500', name: 'Server Error', desc: 'Internal error', color: 'red' },
              ].map((status, i) => (
                <div key={i} className={`p-4 rounded-xl border-2 ${
                  status.color === 'green' ? 'bg-green-50 border-green-300' :
                  status.color === 'yellow' ? 'bg-yellow-50 border-yellow-300' :
                  status.color === 'orange' ? 'bg-orange-50 border-orange-300' :
                  'bg-red-50 border-red-300'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <code className={`font-bold text-2xl ${
                        status.color === 'green' ? 'text-green-700' :
                        status.color === 'yellow' ? 'text-yellow-700' :
                        status.color === 'orange' ? 'text-orange-700' :
                        'text-red-700'
                      }`}>{status.code}</code>
                      <span className="font-semibold text-gray-700">{status.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">{status.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            <span className="mr-3">✨</span>
            API Features
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'Fast & Reliable', desc: 'Built with Next.js 16 and deployed on Vercel edge network for optimal performance', color: 'from-yellow-400 to-orange-500' },
              { icon: '🔒', title: 'Secure', desc: 'Authentication and comprehensive validation on all protected endpoints', color: 'from-green-400 to-emerald-500' },
              { icon: '📱', title: 'Mobile Ready', desc: 'CORS enabled and optimized for Flutter and React Native integration', color: 'from-blue-400 to-cyan-500' },
              { icon: '🗄️', title: 'PostgreSQL', desc: 'Powered by Vercel Postgres with Prisma ORM for type-safe database access', color: 'from-indigo-400 to-purple-500' },
              { icon: '🔄', title: 'RESTful', desc: 'Follows REST principles with consistent endpoint patterns and HTTP methods', color: 'from-pink-400 to-rose-500' },
              { icon: '📚', title: 'Well Documented', desc: 'Comprehensive API documentation with examples and response formats', color: 'from-teal-400 to-green-500' },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`text-6xl mb-4 inline-block p-4 bg-gradient-to-r ${feature.color} rounded-2xl shadow-md group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center py-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl border border-gray-200">
          <div className="mb-6">
            <div className="text-5xl mb-4">📚</div>
            <p className="text-2xl text-gray-800 font-bold mb-2">
              Digital Library API
            </p>
            <p className="text-lg text-gray-600 mb-4">
              CMPS312 Mobile App Development • Qatar University
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">
              Assignment 4 - RESTful API Integration with Flutter
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              {['Next.js 16', 'TypeScript', 'Prisma ORM', 'Vercel Postgres', 'Tailwind CSS'].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-white rounded-full text-gray-700 font-medium shadow-sm border border-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span>
              RESTful Architecture
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="text-blue-500">✓</span>
              Type-Safe
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="text-purple-500">✓</span>
              Production Ready
            </span>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-300">
            <p className="text-xs text-gray-500">
              © 2025 CMPS312. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}

// Endpoint Section Component
function EndpointSection({
  title,
  icon,
  color,
  id,
  endpoints
}: {
  title: string;
  icon: string;
  color: string;
  id?: string;
  endpoints: any[]
}) {
  const [expandedEndpoint, setExpandedEndpoint] = useState<number | null>(null);

  const colorMap: Record<string, { gradient: string; bg: string; border: string }> = {
    blue: { gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    green: { gradient: 'from-green-500 to-green-600', bg: 'bg-green-50', border: 'border-green-200' },
    purple: { gradient: 'from-purple-500 to-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
    orange: { gradient: 'from-orange-500 to-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
    pink: { gradient: 'from-pink-500 to-pink-600', bg: 'bg-pink-50', border: 'border-pink-200' },
  };

  const colorClasses = colorMap[color] || colorMap.blue;

  return (
    <div id={id} className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200 hover:shadow-2xl transition-all duration-300 scroll-mt-24">
      <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-gray-100">
        <div className={`text-5xl p-3 ${colorClasses.bg} rounded-xl`}>{icon}</div>
        <h2 className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${colorClasses.gradient} text-transparent bg-clip-text`}>
          {title}
        </h2>
        <span className="ml-auto bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-600">
          {endpoints.length} {endpoints.length === 1 ? 'endpoint' : 'endpoints'}
        </span>
      </div>

      <div className="space-y-4">
        {endpoints.map((endpoint, i) => (
          <div
            key={i}
            className={`${colorClasses.bg} ${colorClasses.border} border rounded-xl p-5 hover:shadow-md transition-all duration-200`}
          >
            <div
              className="flex flex-wrap items-center gap-3 mb-3 cursor-pointer"
              onClick={() => setExpandedEndpoint(expandedEndpoint === i ? null : i)}
            >
              <span className={`px-3 py-1.5 rounded-lg font-bold text-xs uppercase ${
                endpoint.method === 'GET' ? 'bg-blue-500 text-white shadow-sm' :
                endpoint.method === 'POST' ? 'bg-green-500 text-white shadow-sm' :
                endpoint.method === 'PUT' ? 'bg-yellow-500 text-white shadow-sm' :
                'bg-red-500 text-white shadow-sm'
              }`}>
                {endpoint.method}
              </span>
              <code className="text-sm md:text-base font-mono text-gray-800 bg-white px-3 py-1.5 rounded-lg border border-gray-300 flex-1 min-w-0">
                {endpoint.path}
              </code>
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                {expandedEndpoint === i ? '▼' : '▶'}
              </button>
            </div>

            <p className="text-gray-700 mb-3 text-sm md:text-base">{endpoint.description}</p>

            {expandedEndpoint === i && (
              <div className="mt-4 space-y-3 animate-slide-down">
                {endpoint.requestBody && (
                  <div>
                    <p className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Request Body</p>
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 overflow-x-auto shadow-inner">
                      <pre className="text-xs md:text-sm text-cyan-300 font-mono">
                        {JSON.stringify(endpoint.requestBody, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}

                {endpoint.response && (
                  <div>
                    <p className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Response</p>
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 overflow-x-auto shadow-inner">
                      <pre className="text-xs md:text-sm text-green-300 font-mono">
                        {JSON.stringify(endpoint.response, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
