export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://digital-library-api.vercel.app';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="text-8xl mb-4 animate-bounce">📚</div>
          </div>
          <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-6 leading-tight">
            Digital Library API
          </h1>
          <p className="text-3xl text-gray-700 mb-4 font-semibold">
            RESTful API for Library Management System
          </p>
          <p className="text-lg text-gray-600 mb-10">
            CMPS312 Mobile App Development • Assignment 4 • Qatar University
          </p>

          <div className="inline-flex flex-col items-center bg-white px-10 py-6 rounded-2xl shadow-2xl border-2 border-indigo-100">
            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">API Base URL</p>
            <code className="text-xl text-indigo-600 font-mono font-bold break-all">{apiUrl}</code>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: '👤', number: '7', label: 'Authors', color: 'from-blue-500 to-blue-600' },
              { icon: '📖', number: '8', label: 'Books', color: 'from-green-500 to-green-600' },
              { icon: '👥', number: '6', label: 'Members', color: 'from-purple-500 to-purple-600' },
              { icon: '👔', number: '3', label: 'Staff', color: 'from-orange-500 to-orange-600' },
              { icon: '🔄', number: '8', label: 'Transactions', color: 'from-pink-500 to-pink-600' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className={`text-4xl font-extrabold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-1`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* API Overview */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">🚀 API Overview</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">🔐</span>
                  Authentication
                </h3>
                <p className="text-indigo-100 mb-4 text-lg">
                  Use staff credentials to authenticate and access protected endpoints.
                </p>
                <div className="bg-black/30 rounded-xl p-4 border border-white/20">
                  <p className="text-sm text-gray-300 mb-2 font-semibold">Endpoint:</p>
                  <p className="font-mono text-green-300">POST /api/auth</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">🔑</span>
                  Test Credentials
                </h3>
                <div className="space-y-3">
                  {[
                    { username: 'admin', password: 'admin123', role: 'Administrator' },
                    { username: 'librarian', password: 'lib123', role: 'Librarian' },
                    { username: 'staff', password: 'staff123', role: 'Staff Member' },
                  ].map((cred, i) => (
                    <div key={i} className="bg-black/30 rounded-xl p-3 border border-white/20">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm text-green-300">{cred.username} / {cred.password}</span>
                        <span className="text-xs text-indigo-200 bg-white/10 px-2 py-1 rounded">{cred.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-indigo-100 mb-2">Total Endpoints Available</p>
              <p className="text-6xl font-bold">29</p>
            </div>
          </div>
        </div>

        {/* Endpoints Sections */}
        <div className="space-y-12">

          {/* Authentication */}
          <EndpointSection
            title="Authentication"
            icon="🔐"
            color="purple"
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

          {/* Authors */}
          <EndpointSection
            title="Authors"
            icon="👤"
            color="blue"
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

          {/* Books */}
          <EndpointSection
            title="Books"
            icon="📖"
            color="green"
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

          {/* Members */}
          <EndpointSection
            title="Members"
            icon="👥"
            color="purple"
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

          {/* Staff */}
          <EndpointSection
            title="Staff"
            icon="👔"
            color="orange"
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

          {/* Transactions */}
          <EndpointSection
            title="Transactions"
            icon="🔄"
            color="pink"
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
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-12 text-white">
            <h2 className="text-4xl font-bold text-center mb-12">✨ API Features</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '⚡', title: 'Fast & Reliable', desc: 'Built with Next.js 16 and deployed on Vercel edge network for optimal performance' },
                { icon: '🔒', title: 'Secure', desc: 'Authentication and comprehensive validation on all protected endpoints' },
                { icon: '📱', title: 'Mobile Ready', desc: 'CORS enabled and optimized for Flutter and React Native integration' },
                { icon: '🗄️', title: 'PostgreSQL', desc: 'Powered by Vercel Postgres with Prisma ORM for type-safe database access' },
                { icon: '🔄', title: 'RESTful', desc: 'Follows REST principles with consistent endpoint patterns and HTTP methods' },
                { icon: '📚', title: 'Well Documented', desc: 'Comprehensive API documentation with examples and response formats' },
              ].map((feature, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-indigo-100">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center py-10 border-t-2 border-gray-200">
          <p className="text-xl text-gray-800 font-bold mb-3">
            CMPS312 Mobile App Development • Qatar University
          </p>
          <p className="text-base text-gray-600 mb-5">
            Assignment 4 - RESTful API Integration with Flutter
          </p>
          <p className="text-sm text-gray-500">
            Built with Next.js 16, TypeScript, Prisma ORM, and Vercel Postgres
          </p>
          <div className="mt-6 flex justify-center gap-3 text-sm text-gray-400">
            <span>•</span>
            <span>RESTful Architecture</span>
            <span>•</span>
            <span>Type-Safe</span>
            <span>•</span>
            <span>Production Ready</span>
            <span>•</span>
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
  endpoints
}: {
  title: string;
  icon: string;
  color: string;
  endpoints: any[]
}) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    pink: 'from-pink-500 to-pink-600',
  }[color];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-gray-100">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">{icon}</span>
        <h2 className={`text-4xl font-extrabold bg-gradient-to-r ${colorClasses} text-transparent bg-clip-text`}>
          {title}
        </h2>
      </div>

      <div className="space-y-6">
        {endpoints.map((endpoint, i) => (
          <div key={i} className="border-l-4 border-gray-300 pl-6 py-4 hover:border-indigo-500 transition-colors duration-200">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className={`px-4 py-2 rounded-lg font-bold text-sm border-2 ${
                endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700 border-blue-300' :
                endpoint.method === 'POST' ? 'bg-green-100 text-green-700 border-green-300' :
                endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' :
                'bg-red-100 text-red-700 border-red-300'
              }`}>
                {endpoint.method}
              </span>
              <code className="text-lg font-mono text-gray-800 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300">
                {endpoint.path}
              </code>
            </div>

            <p className="text-gray-700 mb-4 text-lg">{endpoint.description}</p>

            {endpoint.requestBody && (
              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-600 mb-2">Request Body:</p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-sm text-cyan-400 font-mono">
                    {JSON.stringify(endpoint.requestBody, null, 2)}
                  </pre>
                </div>
              </div>
            )}

            {endpoint.response && (
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-2">Response:</p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-sm text-green-400 font-mono">
                    {JSON.stringify(endpoint.response, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
