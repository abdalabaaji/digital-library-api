export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-10 border border-gray-100">
        {/* Header Section */}
        <div className="mb-10 pb-6 border-b-2 border-gray-100">
          <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">Digital Library API</h1>
          <p className="text-base text-blue-600 font-semibold mb-3">CMPS312 Assignment 4 • Qatar University</p>
          <p className="text-gray-600 leading-relaxed">
            A comprehensive RESTful API for managing a digital library system with books, authors, members, staff, and transactions. Built with Next.js 15, PostgreSQL, and Prisma ORM.
          </p>
        </div>

        {/* Base URL Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5 flex items-center gap-2">
            <span className="text-2xl">🌐</span>
            Base URL
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 font-mono text-sm hover:shadow-md transition-shadow duration-200">
            <p className="text-sm text-gray-600 mb-1 font-sans">Production API Endpoint</p>
            <p className="text-blue-700 font-semibold text-lg">https://digital-library-api.vercel.app</p>
          </div>
        </section>

        {/* How to Use cURL */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">📖</span>
            How to Use cURL
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>cURL</strong> is a command-line tool for making HTTP requests. It comes pre-installed on macOS, Linux, and Windows 10+.
              Use it to test API endpoints directly from your terminal.
            </p>

            <div className="bg-white rounded-lg p-5 border border-green-200">
              <h3 className="font-bold text-gray-800 mb-3">Basic Usage:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>GET Request:</strong> Simply copy and paste the cURL command in your terminal</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>POST/PUT Requests:</strong> Include the <code className="bg-gray-100 px-2 py-1 rounded text-sm">-d</code> flag with JSON data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Headers:</strong> Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">-H</code> to specify Content-Type and other headers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5 border border-green-200">
              <h3 className="font-bold text-gray-800 mb-3">Quick Example:</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm">{`# Open your terminal and run:
curl -X GET https://digital-library-api.vercel.app/api/authors

# You'll see JSON response with all authors!`}</pre>
              </div>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-blue-900 text-sm">
                <strong>💡 Tip:</strong> For better formatting, pipe the output through <code className="bg-blue-200 px-2 py-1 rounded">jq</code> or
                use <code className="bg-blue-200 px-2 py-1 rounded">| python -m json.tool</code> to pretty-print JSON responses.
              </p>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-purple-500 flex items-center gap-3">
            <span className="text-3xl">🔐</span>
            Authentication
          </h2>

          <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-500 text-white px-4 py-1.5 rounded-lg font-bold text-sm shadow-sm">POST</span>
              <code className="text-lg font-mono text-gray-800 bg-white px-3 py-1 rounded border border-gray-200">/api/auth</code>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">Authenticate staff member with username and password</p>

            <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto mb-4 shadow-inner">
              <p className="text-gray-400 text-xs mb-3 uppercase tracking-wide font-semibold">Request Body:</p>
              <pre className="text-yellow-400 text-sm leading-relaxed">{`{
  "username": "admin",
  "password": "admin123"
}`}</pre>
            </div>

            <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto mb-4 shadow-inner">
              <p className="text-gray-400 text-xs mb-3 uppercase tracking-wide font-semibold">Response (200 OK):</p>
              <pre className="text-green-400 text-sm leading-relaxed">{`{
  "staffId": "S001",
  "username": "admin",
  "fullName": "Admin User",
  "role": "admin"
}`}</pre>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5">
              <p className="text-blue-900 font-bold text-sm mb-3 flex items-center gap-2">
                <span>💻</span>
                cURL Example:
              </p>
              <pre className="text-sm text-gray-800 overflow-x-auto leading-relaxed">{`curl -X POST https://digital-library-api.vercel.app/api/auth \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "admin",
    "password": "admin123"
  }'`}</pre>
            </div>
          </div>
        </section>

        {/* Authors Endpoints */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-blue-500 flex items-center gap-3">
            <span className="text-3xl">👤</span>
            Authors Endpoints
          </h2>

          {/* GET all authors */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-sm">GET</span>
              <code className="text-lg font-mono text-gray-700">/api/authors</code>
            </div>
            <p className="text-gray-600 mb-3">Get all authors in the library</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`[
  {
    "id": "auth001",
    "name": "J.K. Rowling",
    "biography": "British author...",
    "birthYear": 1965
  }
]`}</pre>
            </div>

            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-semibold text-sm mb-2">💻 cURL Example:</p>
              <pre className="text-sm text-gray-800 overflow-x-auto">{`curl -X GET https://digital-library-api.vercel.app/api/authors`}</pre>
            </div>
          </div>

          {/* GET author by ID */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-sm">GET</span>
              <code className="text-lg font-mono text-gray-700">/api/authors/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Get a specific author by ID</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`{
  "id": "auth001",
  "name": "J.K. Rowling",
  "biography": "British author...",
  "birthYear": 1965
}`}</pre>
            </div>
          </div>

          {/* POST author */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-semibold text-sm">POST</span>
              <code className="text-lg font-mono text-gray-700">/api/authors</code>
            </div>
            <p className="text-gray-600 mb-3">Create a new author</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-3">
              <p className="text-gray-400 text-xs mb-2">Request Body:</p>
              <pre className="text-yellow-400 text-sm">{`{
  "id": "auth008",
  "name": "New Author",
  "biography": "Biography text",
  "birthYear": 1980
}`}</pre>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (201 Created):</p>
              <pre className="text-green-400 text-sm">{`{
  "id": "auth008",
  "name": "New Author",
  "biography": "Biography text",
  "birthYear": 1980
}`}</pre>
            </div>

            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-semibold text-sm mb-2">💻 cURL Example:</p>
              <pre className="text-sm text-gray-800 overflow-x-auto">{`curl -X POST https://digital-library-api.vercel.app/api/authors \\
  -H "Content-Type: application/json" \\
  -d '{
    "id": "auth008",
    "name": "New Author",
    "biography": "Biography text",
    "birthYear": 1980
  }'`}</pre>
            </div>
          </div>

          {/* PUT author */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-semibold text-sm">PUT</span>
              <code className="text-lg font-mono text-gray-700">/api/authors/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Update an existing author</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Request Body:</p>
              <pre className="text-yellow-400 text-sm">{`{
  "name": "Updated Name",
  "biography": "Updated biography",
  "birthYear": 1980
}`}</pre>
            </div>
          </div>

          {/* DELETE author */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded font-semibold text-sm">DELETE</span>
              <code className="text-lg font-mono text-gray-700">/api/authors/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Delete an author from the library</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`{
  "message": "Author deleted successfully"
}`}</pre>
            </div>
          </div>
        </section>

        {/* Books Endpoints */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-green-500 flex items-center gap-3">
            <span className="text-3xl">📚</span>
            Books Endpoints
          </h2>

          {/* GET all books */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-sm">GET</span>
              <code className="text-lg font-mono text-gray-700">/api/books</code>
            </div>
            <p className="text-gray-600 mb-3">Get all books (optional: filter by authorId)</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-3">
              <p className="text-gray-400 text-xs mb-2">Query Parameters (optional):</p>
              <pre className="text-yellow-400 text-sm">{`?authorId=auth001  // Filter by author`}</pre>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`[
  {
    "id": "book001",
    "title": "Harry Potter and the Philosopher's Stone",
    "authorId": "auth001",
    "publishedYear": 1997,
    "category": "Fantasy",
    "isAvailable": true
  }
]`}</pre>
            </div>

            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-semibold text-sm mb-2">💻 cURL Example:</p>
              <pre className="text-sm text-gray-800 overflow-x-auto">{`# Get all books
curl -X GET https://digital-library-api.vercel.app/api/books

# Get books by author
curl -X GET "https://digital-library-api.vercel.app/api/books?authorId=auth001"`}</pre>
            </div>
          </div>

          {/* GET book by ID */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-sm">GET</span>
              <code className="text-lg font-mono text-gray-700">/api/books/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Get a specific book by ID</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`{
  "id": "book001",
  "title": "Harry Potter and the Philosopher's Stone",
  "authorId": "auth001",
  "publishedYear": 1997,
  "category": "Fantasy",
  "isAvailable": true
}`}</pre>
            </div>
          </div>

          {/* POST book */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-semibold text-sm">POST</span>
              <code className="text-lg font-mono text-gray-700">/api/books</code>
            </div>
            <p className="text-gray-600 mb-3">Add a new book to the library</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-3">
              <p className="text-gray-400 text-xs mb-2">Request Body:</p>
              <pre className="text-yellow-400 text-sm">{`{
  "id": "book009",
  "title": "New Book",
  "authorId": "auth001",
  "publishedYear": 2024,
  "category": "Fiction",
  "isbn": "978-1234567890",
  "pageCount": 350,
  "publisher": "Publisher Name"
}`}</pre>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (201 Created):</p>
              <pre className="text-green-400 text-sm">{`{
  "id": "book009",
  "title": "New Book",
  "authorId": "auth001",
  "publishedYear": 2024,
  "category": "Fiction",
  "isAvailable": true
}`}</pre>
            </div>

            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-semibold text-sm mb-2">💻 cURL Example:</p>
              <pre className="text-sm text-gray-800 overflow-x-auto">{`curl -X POST https://digital-library-api.vercel.app/api/books \\
  -H "Content-Type: application/json" \\
  -d '{
    "id": "book009",
    "title": "New Book",
    "authorId": "auth001",
    "publishedYear": 2024,
    "category": "Fiction",
    "isbn": "978-1234567890",
    "pageCount": 350,
    "publisher": "Publisher Name"
  }'`}</pre>
            </div>
          </div>

          {/* PUT book */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-semibold text-sm">PUT</span>
              <code className="text-lg font-mono text-gray-700">/api/books/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Update book information</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Request Body:</p>
              <pre className="text-yellow-400 text-sm">{`{
  "title": "Updated Title",
  "isAvailable": false
}`}</pre>
            </div>
          </div>

          {/* DELETE book */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded font-semibold text-sm">DELETE</span>
              <code className="text-lg font-mono text-gray-700">/api/books/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Remove a book from the library</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`{
  "message": "Book deleted successfully"
}`}</pre>
            </div>
          </div>
        </section>

        {/* Members Endpoints */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-purple-500 flex items-center gap-3">
            <span className="text-3xl">👥</span>
            Members Endpoints
          </h2>

          {/* GET all members */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-sm">GET</span>
              <code className="text-lg font-mono text-gray-700">/api/members</code>
            </div>
            <p className="text-gray-600 mb-3">Get all library members</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`[
  {
    "id": "M001",
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "phone": "+974-1234-5678",
    "memberType": "student"
  }
]`}</pre>
            </div>

            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-semibold text-sm mb-2">💻 cURL Example:</p>
              <pre className="text-sm text-gray-800 overflow-x-auto">{`curl -X GET https://digital-library-api.vercel.app/api/members`}</pre>
            </div>
          </div>

          {/* GET member by ID */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-sm">GET</span>
              <code className="text-lg font-mono text-gray-700">/api/members/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Get a specific member by ID (includes transaction history)</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`{
  "id": "M001",
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "phone": "+974-1234-5678",
  "memberType": "student",
  "transactions": [...]
}`}</pre>
            </div>
          </div>

          {/* POST member */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-semibold text-sm">POST</span>
              <code className="text-lg font-mono text-gray-700">/api/members</code>
            </div>
            <p className="text-gray-600 mb-3">Register a new library member</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-3">
              <p className="text-gray-400 text-xs mb-2">Request Body:</p>
              <pre className="text-yellow-400 text-sm">{`{
  "id": "M007",
  "name": "New Member",
  "email": "newmember@example.com",
  "phone": "+974-9999-9999",
  "memberType": "student"
}`}</pre>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (201 Created):</p>
              <pre className="text-green-400 text-sm">{`{
  "id": "M007",
  "name": "New Member",
  "email": "newmember@example.com",
  "phone": "+974-9999-9999",
  "memberType": "student"
}`}</pre>
            </div>

            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-semibold text-sm mb-2">💻 cURL Example:</p>
              <pre className="text-sm text-gray-800 overflow-x-auto">{`curl -X POST https://digital-library-api.vercel.app/api/members \\
  -H "Content-Type: application/json" \\
  -d '{
    "id": "M007",
    "name": "New Member",
    "email": "newmember@example.com",
    "phone": "+974-9999-9999",
    "memberType": "student"
  }'`}</pre>
            </div>
          </div>

          {/* PUT member */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-semibold text-sm">PUT</span>
              <code className="text-lg font-mono text-gray-700">/api/members/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Update member information</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Request Body:</p>
              <pre className="text-yellow-400 text-sm">{`{
  "name": "Updated Name",
  "email": "updated@example.com",
  "memberType": "faculty"
}`}</pre>
            </div>
          </div>

          {/* DELETE member */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded font-semibold text-sm">DELETE</span>
              <code className="text-lg font-mono text-gray-700">/api/members/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Remove a member from the system</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`{
  "message": "Member deleted successfully"
}`}</pre>
            </div>
          </div>
        </section>

        {/* Staff Endpoints */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-orange-500 flex items-center gap-3">
            <span className="text-3xl">👔</span>
            Staff Endpoints
          </h2>

          {/* GET all staff */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-sm">GET</span>
              <code className="text-lg font-mono text-gray-700">/api/staff</code>
            </div>
            <p className="text-gray-600 mb-3">Get all staff members</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`[
  {
    "staffId": "S001",
    "username": "admin",
    "fullName": "Admin User",
    "role": "admin"
  }
]`}</pre>
            </div>

            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-semibold text-sm mb-2">💻 cURL Example:</p>
              <pre className="text-sm text-gray-800 overflow-x-auto">{`curl -X GET https://digital-library-api.vercel.app/api/staff`}</pre>
            </div>
          </div>

          {/* GET staff by ID */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-sm">GET</span>
              <code className="text-lg font-mono text-gray-700">/api/staff/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Get a specific staff member by ID</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`{
  "staffId": "S001",
  "username": "admin",
  "fullName": "Admin User",
  "role": "admin"
}`}</pre>
            </div>
          </div>

          {/* POST staff */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-semibold text-sm">POST</span>
              <code className="text-lg font-mono text-gray-700">/api/staff</code>
            </div>
            <p className="text-gray-600 mb-3">Add a new staff member</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-3">
              <p className="text-gray-400 text-xs mb-2">Request Body:</p>
              <pre className="text-yellow-400 text-sm">{`{
  "staffId": "S004",
  "username": "newstaff",
  "password": "password123",
  "fullName": "New Staff",
  "role": "staff"
}`}</pre>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (201 Created):</p>
              <pre className="text-green-400 text-sm">{`{
  "staffId": "S004",
  "username": "newstaff",
  "fullName": "New Staff",
  "role": "staff"
}`}</pre>
            </div>

            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-semibold text-sm mb-2">💻 cURL Example:</p>
              <pre className="text-sm text-gray-800 overflow-x-auto">{`curl -X POST https://digital-library-api.vercel.app/api/staff \\
  -H "Content-Type: application/json" \\
  -d '{
    "staffId": "S004",
    "username": "newstaff",
    "password": "password123",
    "fullName": "New Staff",
    "role": "staff"
  }'`}</pre>
            </div>
          </div>

          {/* PUT staff */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-semibold text-sm">PUT</span>
              <code className="text-lg font-mono text-gray-700">/api/staff/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Update staff member information</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Request Body:</p>
              <pre className="text-yellow-400 text-sm">{`{
  "username": "updatedusername",
  "fullName": "Updated Name",
  "role": "librarian"
}`}</pre>
            </div>
          </div>

          {/* DELETE staff */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded font-semibold text-sm">DELETE</span>
              <code className="text-lg font-mono text-gray-700">/api/staff/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Remove a staff member</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`{
  "message": "Staff deleted successfully"
}`}</pre>
            </div>
          </div>
        </section>

        {/* Transactions Endpoints */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-pink-500 flex items-center gap-3">
            <span className="text-3xl">🔄</span>
            Transactions Endpoints
          </h2>

          {/* GET all transactions */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-sm">GET</span>
              <code className="text-lg font-mono text-gray-700">/api/transactions</code>
            </div>
            <p className="text-gray-600 mb-3">Get all transactions (supports filtering by memberId or bookId)</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-3">
              <p className="text-gray-400 text-xs mb-2">Query Parameters (optional):</p>
              <pre className="text-yellow-400 text-sm">{`?memberId=M001  // Filter by member
?bookId=book001  // Filter by book`}</pre>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`[
  {
    "id": "T001",
    "memberId": "M001",
    "bookId": "book001",
    "borrowDate": "2024-01-15T10:00:00Z",
    "dueDate": "2024-02-15T10:00:00Z",
    "isReturned": false
  }
]`}</pre>
            </div>

            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-semibold text-sm mb-2">💻 cURL Example:</p>
              <pre className="text-sm text-gray-800 overflow-x-auto">{`# Get all transactions
curl -X GET https://digital-library-api.vercel.app/api/transactions

# Filter by member
curl -X GET "https://digital-library-api.vercel.app/api/transactions?memberId=M001"

# Filter by book
curl -X GET "https://digital-library-api.vercel.app/api/transactions?bookId=book001"`}</pre>
            </div>
          </div>

          {/* GET transaction by ID */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-sm">GET</span>
              <code className="text-lg font-mono text-gray-700">/api/transactions/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Get a specific transaction by ID</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`{
  "id": "T001",
  "memberId": "M001",
  "bookId": "book001",
  "borrowDate": "2024-01-15T10:00:00Z",
  "dueDate": "2024-02-15T10:00:00Z",
  "returnDate": null,
  "isReturned": false
}`}</pre>
            </div>
          </div>

          {/* POST transaction */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-semibold text-sm">POST</span>
              <code className="text-lg font-mono text-gray-700">/api/transactions</code>
            </div>
            <p className="text-gray-600 mb-3">Create a new book borrowing transaction</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-3">
              <p className="text-gray-400 text-xs mb-2">Request Body:</p>
              <pre className="text-yellow-400 text-sm">{`{
  "id": "T009",
  "memberId": "M001",
  "bookId": "book002",
  "borrowDate": "2024-01-20T10:00:00Z",
  "dueDate": "2024-02-20T10:00:00Z"
}`}</pre>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (201 Created):</p>
              <pre className="text-green-400 text-sm">{`{
  "id": "T009",
  "memberId": "M001",
  "bookId": "book002",
  "borrowDate": "2024-01-20T10:00:00Z",
  "dueDate": "2024-02-20T10:00:00Z",
  "isReturned": false
}`}</pre>
            </div>

            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-semibold text-sm mb-2">💻 cURL Example:</p>
              <pre className="text-sm text-gray-800 overflow-x-auto">{`curl -X POST https://digital-library-api.vercel.app/api/transactions \\
  -H "Content-Type: application/json" \\
  -d '{
    "id": "T009",
    "memberId": "M001",
    "bookId": "book002",
    "borrowDate": "2024-01-20T10:00:00Z",
    "dueDate": "2024-02-20T10:00:00Z"
  }'`}</pre>
            </div>
          </div>

          {/* PUT transaction */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-semibold text-sm">PUT</span>
              <code className="text-lg font-mono text-gray-700">/api/transactions/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Update transaction (e.g., mark book as returned)</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Request Body:</p>
              <pre className="text-yellow-400 text-sm">{`{
  "isReturned": true,
  "returnDate": "2024-02-10T15:30:00Z"
}`}</pre>
            </div>
          </div>

          {/* DELETE transaction */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded font-semibold text-sm">DELETE</span>
              <code className="text-lg font-mono text-gray-700">/api/transactions/:id</code>
            </div>
            <p className="text-gray-600 mb-3">Delete a transaction record</p>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs mb-2">Response (200 OK):</p>
              <pre className="text-green-400 text-sm">{`{
  "message": "Transaction deleted successfully"
}`}</pre>
            </div>
          </div>
        </section>

        {/* Error Responses */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            Error Responses
          </h2>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-xs">400</span>
                <p className="font-bold text-red-900">Bad Request</p>
              </div>
              <pre className="text-sm text-gray-800 bg-white p-3 rounded-lg">{`{ "error": "Invalid request data" }`}</pre>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-yellow-600 text-white px-3 py-1 rounded-lg font-bold text-xs">404</span>
                <p className="font-bold text-yellow-900">Not Found</p>
              </div>
              <pre className="text-sm text-gray-800 bg-white p-3 rounded-lg">{`{ "error": "Resource not found" }`}</pre>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-300 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-lg font-bold text-xs">409</span>
                <p className="font-bold text-orange-900">Conflict</p>
              </div>
              <pre className="text-sm text-gray-800 bg-white p-3 rounded-lg">{`{ "error": "Resource already exists" }`}</pre>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-700 text-white px-3 py-1 rounded-lg font-bold text-xs">500</span>
                <p className="font-bold text-red-900">Internal Server Error</p>
              </div>
              <pre className="text-sm text-gray-800 bg-white p-3 rounded-lg">{`{ "error": "Failed to process request" }`}</pre>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t-2 border-gray-200 text-center">
          <div className="mb-4">
            <p className="text-gray-700 font-semibold text-base mb-2">Digital Library API</p>
            <p className="text-gray-600 text-sm">
              Built with Next.js 15 • PostgreSQL • Prisma ORM
            </p>
          </div>
          <div className="flex justify-center gap-2 flex-wrap text-xs text-gray-500">
            <span className="bg-gray-100 px-3 py-1 rounded-full">CMPS312</span>
            <span>•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Assignment 4</span>
            <span>•</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Qatar University</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
