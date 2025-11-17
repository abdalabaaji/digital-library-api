export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            📚 Digital Library API
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            RESTful API for Digital Library Management System
          </p>
          <p className="text-sm text-gray-500">
            CMPS312 Mobile App Development - Assignment 4
          </p>
          <div className="mt-6 inline-block bg-white px-6 py-3 rounded-lg shadow-md">
            <p className="text-sm text-gray-600">Base URL</p>
            <code className="text-blue-600 font-mono font-semibold">{apiUrl}</code>
          </div>
        </header>

        {/* Quick Start */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Quick Start</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Test the API</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
                  curl {apiUrl}/api/books
                </code>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Authentication</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
                  {`curl -X POST ${apiUrl}/api/auth \\
  -H "Content-Type: application/json" \\
  -d '{"username": "admin", "password": "admin123"}'`}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Authors Endpoints */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">👤 Authors</h2>

          <div className="space-y-6">
            {/* GET all authors */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded">GET</span>
                <code className="text-sm font-mono">/api/authors</code>
              </div>
              <p className="text-gray-600 mb-3">Get all authors</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">curl {apiUrl}/api/authors</code>
              </div>
            </div>

            {/* GET author by ID */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded">GET</span>
                <code className="text-sm font-mono">/api/authors/:id</code>
              </div>
              <p className="text-gray-600 mb-3">Get author by ID</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">curl {apiUrl}/api/authors/auth001</code>
              </div>
            </div>

            {/* POST create author */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded">POST</span>
                <code className="text-sm font-mono">/api/authors</code>
              </div>
              <p className="text-gray-600 mb-3">Create a new author</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">{`curl -X POST ${apiUrl}/api/authors \\
  -H "Content-Type: application/json" \\
  -d '{
    "id": "auth999",
    "name": "Jane Doe",
    "biography": "Acclaimed author",
    "birthYear": 1975
  }'`}</pre>
              </div>
            </div>

            {/* PUT update author */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded">PUT</span>
                <code className="text-sm font-mono">/api/authors/:id</code>
              </div>
              <p className="text-gray-600 mb-3">Update author</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">{`curl -X PUT ${apiUrl}/api/authors/auth999 \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Jane Smith", "birthYear": 1975}'`}</pre>
              </div>
            </div>

            {/* DELETE author */}
            <div className="border-l-4 border-red-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded">DELETE</span>
                <code className="text-sm font-mono">/api/authors/:id</code>
              </div>
              <p className="text-gray-600 mb-3">Delete author</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">curl -X DELETE {apiUrl}/api/authors/auth999</code>
              </div>
            </div>
          </div>
        </section>

        {/* Books Endpoints */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📖 Books</h2>

          <div className="space-y-6">
            {/* GET all books */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded">GET</span>
                <code className="text-sm font-mono">/api/books</code>
              </div>
              <p className="text-gray-600 mb-3">Get all books</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">curl {apiUrl}/api/books</code>
              </div>
            </div>

            {/* GET books by author */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded">GET</span>
                <code className="text-sm font-mono">/api/books?authorId=:id</code>
              </div>
              <p className="text-gray-600 mb-3">Get books by author</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">curl {apiUrl}/api/books?authorId=auth001</code>
              </div>
            </div>

            {/* POST create book */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded">POST</span>
                <code className="text-sm font-mono">/api/books</code>
              </div>
              <p className="text-gray-600 mb-3">Create a new book</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">{`curl -X POST ${apiUrl}/api/books \\
  -H "Content-Type: application/json" \\
  -d '{
    "id": "book999",
    "title": "New Book",
    "authorId": "auth001",
    "publishedYear": 2024,
    "category": "Technology",
    "isbn": "978-9999999999",
    "pageCount": 300,
    "publisher": "Tech Press",
    "isAvailable": true
  }'`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Members Endpoints */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">👥 Members</h2>

          <div className="space-y-6">
            {/* GET all members */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded">GET</span>
                <code className="text-sm font-mono">/api/members</code>
              </div>
              <p className="text-gray-600 mb-3">Get all members</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">curl {apiUrl}/api/members</code>
              </div>
            </div>

            {/* POST create member */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded">POST</span>
                <code className="text-sm font-mono">/api/members</code>
              </div>
              <p className="text-gray-600 mb-3">Create a new member</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">{`curl -X POST ${apiUrl}/api/members \\
  -H "Content-Type: application/json" \\
  -d '{
    "id": "mem999",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+974-1234-5678",
    "memberType": "student"
  }'`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Transactions Endpoints */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔄 Transactions</h2>

          <div className="space-y-6">
            {/* GET all transactions */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded">GET</span>
                <code className="text-sm font-mono">/api/transactions</code>
              </div>
              <p className="text-gray-600 mb-3">Get all transactions</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">curl {apiUrl}/api/transactions</code>
              </div>
            </div>

            {/* GET transactions by member */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded">GET</span>
                <code className="text-sm font-mono">/api/transactions?memberId=:id</code>
              </div>
              <p className="text-gray-600 mb-3">Get transactions by member</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">curl {apiUrl}/api/transactions?memberId=mem001</code>
              </div>
            </div>

            {/* POST create transaction */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded">POST</span>
                <code className="text-sm font-mono">/api/transactions</code>
              </div>
              <p className="text-gray-600 mb-3">Create a new transaction</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">{`curl -X POST ${apiUrl}/api/transactions \\
  -H "Content-Type: application/json" \\
  -d '{
    "id": "trans999",
    "memberId": "mem001",
    "bookId": "book001",
    "borrowDate": "2024-11-17T00:00:00Z",
    "dueDate": "2024-12-01T00:00:00Z",
    "isReturned": false
  }'`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Auth Endpoint */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔐 Authentication</h2>

          <div className="space-y-6">
            {/* POST login */}
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded">POST</span>
                <code className="text-sm font-mono">/api/auth</code>
              </div>
              <p className="text-gray-600 mb-3">Staff login</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">{`curl -X POST ${apiUrl}/api/auth \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "admin",
    "password": "admin123"
  }'`}</pre>
              </div>
              <div className="mt-3 p-3 bg-blue-50 rounded">
                <p className="text-sm text-gray-700 font-semibold mb-2">Test Credentials:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• admin / admin123</li>
                  <li>• librarian / lib123</li>
                  <li>• staff / staff123</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Response Format */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Response Format</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Success Response</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">{`{
  "id": "book001",
  "title": "Advanced Data Structures",
  "authorId": "auth001",
  "publishedYear": 2023,
  "category": "Computer Science",
  "isAvailable": true,
  "isbn": "978-1234567890",
  "pageCount": 450,
  "publisher": "Tech Press"
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Error Response</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">{`{
  "error": "Book not found"
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* HTTP Status Codes */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 HTTP Status Codes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <code className="text-green-700 font-bold">200 OK</code>
              <p className="text-sm text-gray-600 mt-1">Request successful</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <code className="text-green-700 font-bold">201 Created</code>
              <p className="text-sm text-gray-600 mt-1">Resource created</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <code className="text-yellow-700 font-bold">400 Bad Request</code>
              <p className="text-sm text-gray-600 mt-1">Invalid request data</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <code className="text-red-700 font-bold">404 Not Found</code>
              <p className="text-sm text-gray-600 mt-1">Resource not found</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <code className="text-red-700 font-bold">409 Conflict</code>
              <p className="text-sm text-gray-600 mt-1">Resource already exists</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <code className="text-red-700 font-bold">500 Internal Error</code>
              <p className="text-sm text-gray-600 mt-1">Server error</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600">
          <p className="text-sm">
            CMPS312 Mobile App Development • Qatar University
          </p>
          <p className="text-xs mt-2">
            Built with Next.js, Prisma, and PostgreSQL
          </p>
        </footer>
      </div>
    </div>
  );
}
