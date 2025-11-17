export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://digital-library-api.vercel.app';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="text-7xl mb-4 animate-bounce">📚</div>
          </div>
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Digital Library API
          </h1>
          <p className="text-2xl text-gray-700 mb-3 font-medium">
            RESTful API for Library Management
          </p>
          <p className="text-base text-gray-500 mb-8">
            CMPS312 Mobile App Development • Assignment 4 • Qatar University
          </p>

          <div className="inline-flex items-center bg-white px-8 py-4 rounded-2xl shadow-xl border border-gray-200">
            <div className="text-left">
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Base URL</p>
              <code className="text-lg text-blue-600 font-mono font-bold">{apiUrl}</code>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">👤</div>
              <div className="text-2xl font-bold text-gray-800">7</div>
              <div className="text-xs text-gray-600">Authors</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">📖</div>
              <div className="text-2xl font-bold text-gray-800">8</div>
              <div className="text-xs text-gray-600">Books</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">👥</div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-xs text-gray-600">Members</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">👔</div>
              <div className="text-2xl font-bold text-gray-800">3</div>
              <div className="text-xs text-gray-600">Staff</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">🔄</div>
              <div className="text-2xl font-bold text-gray-800">8</div>
              <div className="text-xs text-gray-600">Transactions</div>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span>🚀</span> Quick Start
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">1️⃣</span> Test the API
              </h3>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <code className="text-sm text-green-300 break-all">curl {apiUrl}/api/books</code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">2️⃣</span> Authenticate
              </h3>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <pre className="text-sm text-green-300 overflow-x-auto">{`curl -X POST ${apiUrl}/api/auth \\
  -H "Content-Type: application/json" \\
  -d '{"username":"admin","password":"admin123"}'`}</pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-sm font-semibold mb-2">🔑 Test Credentials:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="font-mono">admin</span> / <span className="font-mono">admin123</span>
              </div>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="font-mono">librarian</span> / <span className="font-mono">lib123</span>
              </div>
              <div className="bg-black/20 rounded-lg px-3 py-2">
                <span className="font-mono">staff</span> / <span className="font-mono">staff123</span>
              </div>
            </div>
          </div>
        </div>

        {/* Authentication Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-purple-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span>🔐</span> Authentication
          </h2>

          <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 rounded-r-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-100 text-green-800 text-sm font-bold px-4 py-1.5 rounded-lg border border-green-300">POST</span>
              <code className="text-lg font-mono text-gray-800">/api/auth</code>
            </div>
            <p className="text-gray-600 mb-4">Staff login - Returns staff details on success</p>
            <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
              <pre className="text-sm text-green-400">{`curl -X POST ${apiUrl}/api/auth \\
  -H "Content-Type: application/json" \\
  -d '{"username":"admin","password":"admin123"}'`}</pre>
            </div>
          </div>
        </div>

        {/* Authors Endpoints */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-4xl">👤</span>
            <span>Authors</span>
          </h2>

          <div className="space-y-6">
            <EndpointCard
              method="GET"
              path="/api/authors"
              desc="Get all authors"
              example={`curl ${apiUrl}/api/authors`}
            />
            <EndpointCard
              method="GET"
              path="/api/authors/:id"
              desc="Get author by ID"
              example={`curl ${apiUrl}/api/authors/auth001`}
            />
            <EndpointCard
              method="POST"
              path="/api/authors"
              desc="Create new author"
              example={`curl -X POST ${apiUrl}/api/authors \\
  -H "Content-Type: application/json" \\
  -d '{"id":"auth999","name":"Jane Doe","biography":"Acclaimed author","birthYear":1975}'`}
            />
            <EndpointCard
              method="PUT"
              path="/api/authors/:id"
              desc="Update author"
              example={`curl -X PUT ${apiUrl}/api/authors/auth999 \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Jane Smith","birthYear":1975}'`}
            />
            <EndpointCard
              method="DELETE"
              path="/api/authors/:id"
              desc="Delete author"
              example={`curl -X DELETE ${apiUrl}/api/authors/auth999`}
            />
          </div>
        </div>

        {/* Books Endpoints */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-4xl">📖</span>
            <span>Books</span>
          </h2>

          <div className="space-y-6">
            <EndpointCard
              method="GET"
              path="/api/books"
              desc="Get all books"
              example={`curl ${apiUrl}/api/books`}
            />
            <EndpointCard
              method="GET"
              path="/api/books?authorId=:id"
              desc="Filter books by author"
              example={`curl ${apiUrl}/api/books?authorId=auth001`}
            />
            <EndpointCard
              method="GET"
              path="/api/books/:id"
              desc="Get book by ID"
              example={`curl ${apiUrl}/api/books/book001`}
            />
            <EndpointCard
              method="POST"
              path="/api/books"
              desc="Create new book"
              example={`curl -X POST ${apiUrl}/api/books \\
  -H "Content-Type: application/json" \\
  -d '{"id":"book999","title":"New Book","authorId":"auth001","publishedYear":2024,"category":"Technology","isbn":"978-9999999999","pageCount":300,"publisher":"Tech Press","isAvailable":true}'`}
            />
            <EndpointCard
              method="PUT"
              path="/api/books/:id"
              desc="Update book"
              example={`curl -X PUT ${apiUrl}/api/books/book999 \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Updated Title","isAvailable":false}'`}
            />
            <EndpointCard
              method="DELETE"
              path="/api/books/:id"
              desc="Delete book"
              example={`curl -X DELETE ${apiUrl}/api/books/book999`}
            />
          </div>
        </div>

        {/* Members Endpoints */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-4xl">👥</span>
            <span>Members</span>
          </h2>

          <div className="space-y-6">
            <EndpointCard
              method="GET"
              path="/api/members"
              desc="Get all members"
              example={`curl ${apiUrl}/api/members`}
            />
            <EndpointCard
              method="GET"
              path="/api/members/:id"
              desc="Get member by ID"
              example={`curl ${apiUrl}/api/members/mem001`}
            />
            <EndpointCard
              method="POST"
              path="/api/members"
              desc="Create new member"
              example={`curl -X POST ${apiUrl}/api/members \\
  -H "Content-Type: application/json" \\
  -d '{"id":"mem999","name":"John Doe","email":"john@example.com","phone":"+974-1234-5678","memberType":"student"}'`}
            />
            <EndpointCard
              method="PUT"
              path="/api/members/:id"
              desc="Update member"
              example={`curl -X PUT ${apiUrl}/api/members/mem999 \\
  -H "Content-Type: application/json" \\
  -d '{"name":"John Smith","memberType":"faculty"}'`}
            />
            <EndpointCard
              method="DELETE"
              path="/api/members/:id"
              desc="Delete member"
              example={`curl -X DELETE ${apiUrl}/api/members/mem999`}
            />
          </div>
        </div>

        {/* Staff Endpoints */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-4xl">👔</span>
            <span>Staff</span>
          </h2>

          <div className="space-y-6">
            <EndpointCard
              method="GET"
              path="/api/staff"
              desc="Get all staff"
              example={`curl ${apiUrl}/api/staff`}
            />
            <EndpointCard
              method="GET"
              path="/api/staff/:id"
              desc="Get staff by ID"
              example={`curl ${apiUrl}/api/staff/staff001`}
            />
            <EndpointCard
              method="POST"
              path="/api/staff"
              desc="Create new staff"
              example={`curl -X POST ${apiUrl}/api/staff \\
  -H "Content-Type: application/json" \\
  -d '{"staffId":"staff999","username":"newstaff","password":"pass123","fullName":"New Staff","role":"staff"}'`}
            />
            <EndpointCard
              method="PUT"
              path="/api/staff/:id"
              desc="Update staff"
              example={`curl -X PUT ${apiUrl}/api/staff/staff999 \\
  -H "Content-Type: application/json" \\
  -d '{"fullName":"Updated Name","role":"librarian"}'`}
            />
            <EndpointCard
              method="DELETE"
              path="/api/staff/:id"
              desc="Delete staff"
              example={`curl -X DELETE ${apiUrl}/api/staff/staff999`}
            />
          </div>
        </div>

        {/* Transactions Endpoints */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-4xl">🔄</span>
            <span>Transactions</span>
          </h2>

          <div className="space-y-6">
            <EndpointCard
              method="GET"
              path="/api/transactions"
              desc="Get all transactions"
              example={`curl ${apiUrl}/api/transactions`}
            />
            <EndpointCard
              method="GET"
              path="/api/transactions?memberId=:id"
              desc="Filter by member"
              example={`curl ${apiUrl}/api/transactions?memberId=mem001`}
            />
            <EndpointCard
              method="GET"
              path="/api/transactions?bookId=:id"
              desc="Filter by book"
              example={`curl ${apiUrl}/api/transactions?bookId=book001`}
            />
            <EndpointCard
              method="GET"
              path="/api/transactions/:id"
              desc="Get transaction by ID"
              example={`curl ${apiUrl}/api/transactions/trans001`}
            />
            <EndpointCard
              method="POST"
              path="/api/transactions"
              desc="Create transaction"
              example={`curl -X POST ${apiUrl}/api/transactions \\
  -H "Content-Type: application/json" \\
  -d '{"id":"trans999","memberId":"mem001","bookId":"book001","borrowDate":"2024-11-17T00:00:00Z","dueDate":"2024-12-01T00:00:00Z","isReturned":false}'`}
            />
            <EndpointCard
              method="PUT"
              path="/api/transactions/:id"
              desc="Update transaction"
              example={`curl -X PUT ${apiUrl}/api/transactions/trans999 \\
  -H "Content-Type: application/json" \\
  -d '{"isReturned":true,"returnDate":"2024-11-20T00:00:00Z"}'`}
            />
            <EndpointCard
              method="DELETE"
              path="/api/transactions/:id"
              desc="Delete transaction"
              example={`curl -X DELETE ${apiUrl}/api/transactions/trans999`}
            />
          </div>
        </div>

        {/* Response Examples */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span>📋</span> Response Format
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-green-600">✓</span> Success Response
              </h3>
              <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
                <pre className="text-sm text-blue-400">{`{
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-red-600">✗</span> Error Response
              </h3>
              <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
                <pre className="text-sm text-red-400">{`{
  "error": "Book not found"
}`}</pre>
              </div>
            </div>
          </div>
        </div>

        {/* HTTP Status Codes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span>📊</span> HTTP Status Codes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatusCard code="200" name="OK" desc="Request successful" color="green" />
            <StatusCard code="201" name="Created" desc="Resource created" color="green" />
            <StatusCard code="400" name="Bad Request" desc="Invalid request data" color="yellow" />
            <StatusCard code="404" name="Not Found" desc="Resource not found" color="red" />
            <StatusCard code="409" name="Conflict" desc="Resource already exists" color="orange" />
            <StatusCard code="500" name="Internal Error" desc="Server error" color="red" />
          </div>
        </div>

        {/* Features */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">✨ API Features</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast & Reliable</h3>
              <p className="text-sm text-blue-100">Built with Next.js and deployed on Vercel edge network</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure</h3>
              <p className="text-sm text-blue-100">Authentication and validation on all endpoints</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-xl font-bold mb-2">Mobile Ready</h3>
              <p className="text-sm text-blue-100">CORS enabled, perfect for Flutter integration</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-700 font-semibold mb-2">
            CMPS312 Mobile App Development • Qatar University
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Assignment 4 - RESTful API Integration
          </p>
          <p className="text-xs text-gray-400">
            Built with Next.js 16, Prisma ORM, and Vercel Postgres
          </p>
          <div className="mt-4 flex justify-center gap-2 text-xs text-gray-400">
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>RESTful</span>
            <span>•</span>
            <span>PostgreSQL</span>
            <span>•</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Component for endpoint cards
function EndpointCard({ method, path, desc, example }: { method: string; path: string; desc: string; example: string }) {
  const methodColors: Record<string, string> = {
    'GET': 'bg-blue-100 text-blue-800 border-blue-300',
    'POST': 'bg-green-100 text-green-800 border-green-300',
    'PUT': 'bg-amber-100 text-amber-800 border-amber-300',
    'DELETE': 'bg-red-100 text-red-800 border-red-300',
  };

  const borderColors: Record<string, string> = {
    'GET': 'border-blue-400',
    'POST': 'border-green-400',
    'PUT': 'border-amber-400',
    'DELETE': 'border-red-400',
  };

  return (
    <div className={`border-l-4 ${borderColors[method]} pl-6 bg-gray-50 rounded-r-xl p-5 hover:bg-gray-100 transition-colors duration-200`}>
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className={`${methodColors[method]} text-sm font-bold px-4 py-1.5 rounded-lg border`}>
          {method}
        </span>
        <code className="text-base font-mono text-gray-800 bg-white px-3 py-1 rounded border border-gray-200">
          {path}
        </code>
      </div>
      <p className="text-gray-700 mb-4 font-medium">{desc}</p>
      <div className="bg-gray-900 rounded-xl p-5 overflow-x-auto">
        <pre className="text-sm text-green-400 font-mono">{example}</pre>
      </div>
    </div>
  );
}

// Component for status code cards
function StatusCard({ code, name, desc, color }: { code: string; name: string; desc: string; color: string }) {
  const colorClasses: Record<string, string> = {
    'green': 'bg-green-50 border-green-200',
    'yellow': 'bg-yellow-50 border-yellow-200',
    'red': 'bg-red-50 border-red-200',
    'orange': 'bg-orange-50 border-orange-200',
  };

  const textColors: Record<string, string> = {
    'green': 'text-green-700',
    'yellow': 'text-yellow-700',
    'red': 'text-red-700',
    'orange': 'text-orange-700',
  };

  const nameColors: Record<string, string> = {
    'green': 'text-green-600',
    'yellow': 'text-yellow-600',
    'red': 'text-red-600',
    'orange': 'text-orange-600',
  };

  return (
    <div className={`p-5 ${colorClasses[color]} border-2 rounded-xl hover:shadow-lg transition-shadow duration-200`}>
      <div className="flex items-baseline gap-2 mb-2">
        <code className={`${textColors[color]} font-bold text-2xl`}>{code}</code>
        <span className={`${nameColors[color]} font-semibold`}>{name}</span>
      </div>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
