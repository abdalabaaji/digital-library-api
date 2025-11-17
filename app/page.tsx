export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://digital-library-api.vercel.app';

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-icon">📚</div>
        <h1>Digital Library API</h1>
        <p className="hero-subtitle">RESTful API for Library Management</p>
        <p className="hero-meta">CMPS312 Mobile App Development • Assignment 4 • Qatar University</p>

        <div className="base-url-card">
          <p className="base-url-label">Base URL</p>
          <code className="base-url">{apiUrl}</code>
        </div>

        {/* Quick Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">👤</div>
            <div className="stat-number">7</div>
            <div className="stat-label">Authors</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📖</div>
            <div className="stat-number">8</div>
            <div className="stat-label">Books</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number">6</div>
            <div className="stat-label">Members</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👔</div>
            <div className="stat-number">3</div>
            <div className="stat-label">Staff</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔄</div>
            <div className="stat-number">8</div>
            <div className="stat-label">Transactions</div>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="quick-start">
        <h2>🚀 Quick Start</h2>

        <div className="quick-grid">
          <div className="quick-item">
            <h3>1️⃣ Test the API</h3>
            <div className="code-block">
              <code>curl {apiUrl}/api/books</code>
            </div>
          </div>

          <div className="quick-item">
            <h3>2️⃣ Authenticate</h3>
            <div className="code-block">
              <code>{`curl -X POST ${apiUrl}/api/auth \\
  -H "Content-Type: application/json" \\
  -d '{"username":"admin","password":"admin123"}'`}</code>
            </div>
          </div>
        </div>

        <div className="credentials">
          <h4>🔑 Test Credentials:</h4>
          <div className="cred-grid">
            <div className="cred-item">admin / admin123</div>
            <div className="cred-item">librarian / lib123</div>
            <div className="cred-item">staff / staff123</div>
          </div>
        </div>
      </div>

      {/* Authentication Section */}
      <div className="section">
        <div className="section-header">
          <span className="section-icon">🔐</span>
          <h2>Authentication</h2>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-post">POST</span>
            <code className="endpoint-path">/api/auth</code>
          </div>
          <p className="endpoint-desc">Staff login - Returns staff details on success</p>
          <div className="endpoint-code">
            <pre>{`curl -X POST ${apiUrl}/api/auth \\
  -H "Content-Type: application/json" \\
  -d '{"username":"admin","password":"admin123"}'`}</pre>
          </div>
        </div>
      </div>

      {/* Authors Endpoints */}
      <div className="section">
        <div className="section-header">
          <span className="section-icon">👤</span>
          <h2>Authors</h2>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-get">GET</span>
            <code className="endpoint-path">/api/authors</code>
          </div>
          <p className="endpoint-desc">Get all authors</p>
          <div className="endpoint-code">
            <pre>curl {apiUrl}/api/authors</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-get">GET</span>
            <code className="endpoint-path">/api/authors/:id</code>
          </div>
          <p className="endpoint-desc">Get author by ID</p>
          <div className="endpoint-code">
            <pre>curl {apiUrl}/api/authors/auth001</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-post">POST</span>
            <code className="endpoint-path">/api/authors</code>
          </div>
          <p className="endpoint-desc">Create new author</p>
          <div className="endpoint-code">
            <pre>{`curl -X POST ${apiUrl}/api/authors \\
  -H "Content-Type: application/json" \\
  -d '{"id":"auth999","name":"Jane Doe","biography":"Acclaimed author","birthYear":1975}'`}</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-put">PUT</span>
            <code className="endpoint-path">/api/authors/:id</code>
          </div>
          <p className="endpoint-desc">Update author</p>
          <div className="endpoint-code">
            <pre>{`curl -X PUT ${apiUrl}/api/authors/auth999 \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Jane Smith","birthYear":1975}'`}</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-delete">DELETE</span>
            <code className="endpoint-path">/api/authors/:id</code>
          </div>
          <p className="endpoint-desc">Delete author</p>
          <div className="endpoint-code">
            <pre>curl -X DELETE {apiUrl}/api/authors/auth999</pre>
          </div>
        </div>
      </div>

      {/* Books Endpoints */}
      <div className="section">
        <div className="section-header">
          <span className="section-icon">📖</span>
          <h2>Books</h2>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-get">GET</span>
            <code className="endpoint-path">/api/books</code>
          </div>
          <p className="endpoint-desc">Get all books</p>
          <div className="endpoint-code">
            <pre>curl {apiUrl}/api/books</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-get">GET</span>
            <code className="endpoint-path">/api/books?authorId=:id</code>
          </div>
          <p className="endpoint-desc">Filter books by author</p>
          <div className="endpoint-code">
            <pre>curl {apiUrl}/api/books?authorId=auth001</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-get">GET</span>
            <code className="endpoint-path">/api/books/:id</code>
          </div>
          <p className="endpoint-desc">Get book by ID</p>
          <div className="endpoint-code">
            <pre>curl {apiUrl}/api/books/book001</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-post">POST</span>
            <code className="endpoint-path">/api/books</code>
          </div>
          <p className="endpoint-desc">Create new book</p>
          <div className="endpoint-code">
            <pre>{`curl -X POST ${apiUrl}/api/books \\
  -H "Content-Type: application/json" \\
  -d '{"id":"book999","title":"New Book","authorId":"auth001","publishedYear":2024,"category":"Technology","isbn":"978-9999999999","pageCount":300,"publisher":"Tech Press","isAvailable":true}'`}</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-put">PUT</span>
            <code className="endpoint-path">/api/books/:id</code>
          </div>
          <p className="endpoint-desc">Update book</p>
          <div className="endpoint-code">
            <pre>{`curl -X PUT ${apiUrl}/api/books/book999 \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Updated Title","isAvailable":false}'`}</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-delete">DELETE</span>
            <code className="endpoint-path">/api/books/:id</code>
          </div>
          <p className="endpoint-desc">Delete book</p>
          <div className="endpoint-code">
            <pre>curl -X DELETE {apiUrl}/api/books/book999</pre>
          </div>
        </div>
      </div>

      {/* Members Endpoints */}
      <div className="section">
        <div className="section-header">
          <span className="section-icon">👥</span>
          <h2>Members</h2>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-get">GET</span>
            <code className="endpoint-path">/api/members</code>
          </div>
          <p className="endpoint-desc">Get all members</p>
          <div className="endpoint-code">
            <pre>curl {apiUrl}/api/members</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-get">GET</span>
            <code className="endpoint-path">/api/members/:id</code>
          </div>
          <p className="endpoint-desc">Get member by ID</p>
          <div className="endpoint-code">
            <pre>curl {apiUrl}/api/members/mem001</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-post">POST</span>
            <code className="endpoint-path">/api/members</code>
          </div>
          <p className="endpoint-desc">Create new member</p>
          <div className="endpoint-code">
            <pre>{`curl -X POST ${apiUrl}/api/members \\
  -H "Content-Type: application/json" \\
  -d '{"id":"mem999","name":"John Doe","email":"john@example.com","phone":"+974-1234-5678","memberType":"student"}'`}</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-put">PUT</span>
            <code className="endpoint-path">/api/members/:id</code>
          </div>
          <p className="endpoint-desc">Update member</p>
          <div className="endpoint-code">
            <pre>{`curl -X PUT ${apiUrl}/api/members/mem999 \\
  -H "Content-Type: application/json" \\
  -d '{"name":"John Smith","memberType":"faculty"}'`}</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-delete">DELETE</span>
            <code className="endpoint-path">/api/members/:id</code>
          </div>
          <p className="endpoint-desc">Delete member</p>
          <div className="endpoint-code">
            <pre>curl -X DELETE {apiUrl}/api/members/mem999</pre>
          </div>
        </div>
      </div>

      {/* Staff Endpoints */}
      <div className="section">
        <div className="section-header">
          <span className="section-icon">👔</span>
          <h2>Staff</h2>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-get">GET</span>
            <code className="endpoint-path">/api/staff</code>
          </div>
          <p className="endpoint-desc">Get all staff</p>
          <div className="endpoint-code">
            <pre>curl {apiUrl}/api/staff</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-get">GET</span>
            <code className="endpoint-path">/api/staff/:id</code>
          </div>
          <p className="endpoint-desc">Get staff by ID</p>
          <div className="endpoint-code">
            <pre>curl {apiUrl}/api/staff/staff001</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-post">POST</span>
            <code className="endpoint-path">/api/staff</code>
          </div>
          <p className="endpoint-desc">Create new staff</p>
          <div className="endpoint-code">
            <pre>{`curl -X POST ${apiUrl}/api/staff \\
  -H "Content-Type: application/json" \\
  -d '{"staffId":"staff999","username":"newstaff","password":"pass123","fullName":"New Staff","role":"staff"}'`}</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-put">PUT</span>
            <code className="endpoint-path">/api/staff/:id</code>
          </div>
          <p className="endpoint-desc">Update staff</p>
          <div className="endpoint-code">
            <pre>{`curl -X PUT ${apiUrl}/api/staff/staff999 \\
  -H "Content-Type: application/json" \\
  -d '{"fullName":"Updated Name","role":"librarian"}'`}</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-delete">DELETE</span>
            <code className="endpoint-path">/api/staff/:id</code>
          </div>
          <p className="endpoint-desc">Delete staff</p>
          <div className="endpoint-code">
            <pre>curl -X DELETE {apiUrl}/api/staff/staff999</pre>
          </div>
        </div>
      </div>

      {/* Transactions Endpoints */}
      <div className="section">
        <div className="section-header">
          <span className="section-icon">🔄</span>
          <h2>Transactions</h2>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-get">GET</span>
            <code className="endpoint-path">/api/transactions</code>
          </div>
          <p className="endpoint-desc">Get all transactions</p>
          <div className="endpoint-code">
            <pre>curl {apiUrl}/api/transactions</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-get">GET</span>
            <code className="endpoint-path">/api/transactions?memberId=:id</code>
          </div>
          <p className="endpoint-desc">Filter by member</p>
          <div className="endpoint-code">
            <pre>curl {apiUrl}/api/transactions?memberId=mem001</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-get">GET</span>
            <code className="endpoint-path">/api/transactions?bookId=:id</code>
          </div>
          <p className="endpoint-desc">Filter by book</p>
          <div className="endpoint-code">
            <pre>curl {apiUrl}/api/transactions?bookId=book001</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-get">GET</span>
            <code className="endpoint-path">/api/transactions/:id</code>
          </div>
          <p className="endpoint-desc">Get transaction by ID</p>
          <div className="endpoint-code">
            <pre>curl {apiUrl}/api/transactions/trans001</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-post">POST</span>
            <code className="endpoint-path">/api/transactions</code>
          </div>
          <p className="endpoint-desc">Create transaction</p>
          <div className="endpoint-code">
            <pre>{`curl -X POST ${apiUrl}/api/transactions \\
  -H "Content-Type: application/json" \\
  -d '{"id":"trans999","memberId":"mem001","bookId":"book001","borrowDate":"2024-11-17T00:00:00Z","dueDate":"2024-12-01T00:00:00Z","isReturned":false}'`}</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-put">PUT</span>
            <code className="endpoint-path">/api/transactions/:id</code>
          </div>
          <p className="endpoint-desc">Update transaction</p>
          <div className="endpoint-code">
            <pre>{`curl -X PUT ${apiUrl}/api/transactions/trans999 \\
  -H "Content-Type: application/json" \\
  -d '{"isReturned":true,"returnDate":"2024-11-20T00:00:00Z"}'`}</pre>
          </div>
        </div>

        <div className="endpoint">
          <div className="endpoint-header">
            <span className="method-badge method-delete">DELETE</span>
            <code className="endpoint-path">/api/transactions/:id</code>
          </div>
          <p className="endpoint-desc">Delete transaction</p>
          <div className="endpoint-code">
            <pre>curl -X DELETE {apiUrl}/api/transactions/trans999</pre>
          </div>
        </div>
      </div>

      {/* Response Examples */}
      <div className="section">
        <div className="section-header">
          <span className="section-icon">📋</span>
          <h2>Response Format</h2>
        </div>

        <div className="response-grid">
          <div className="response-card">
            <h3 className="response-success">✓ Success Response</h3>
            <div className="response-code">
              <pre className="response-success">{`{
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

          <div className="response-card">
            <h3 className="response-error">✗ Error Response</h3>
            <div className="response-code">
              <pre className="response-error">{`{
  "error": "Book not found"
}`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* HTTP Status Codes */}
      <div className="section">
        <div className="section-header">
          <span className="section-icon">📊</span>
          <h2>HTTP Status Codes</h2>
        </div>

        <div className="status-grid">
          <div className="status-card status-green">
            <div className="status-header">
              <code className="status-code">200</code>
              <span className="status-name">OK</span>
            </div>
            <p className="status-desc">Request successful</p>
          </div>

          <div className="status-card status-green">
            <div className="status-header">
              <code className="status-code">201</code>
              <span className="status-name">Created</span>
            </div>
            <p className="status-desc">Resource created</p>
          </div>

          <div className="status-card status-yellow">
            <div className="status-header">
              <code className="status-code">400</code>
              <span className="status-name">Bad Request</span>
            </div>
            <p className="status-desc">Invalid request data</p>
          </div>

          <div className="status-card status-red">
            <div className="status-header">
              <code className="status-code">404</code>
              <span className="status-name">Not Found</span>
            </div>
            <p className="status-desc">Resource not found</p>
          </div>

          <div className="status-card status-orange">
            <div className="status-header">
              <code className="status-code">409</code>
              <span className="status-name">Conflict</span>
            </div>
            <p className="status-desc">Resource already exists</p>
          </div>

          <div className="status-card status-red">
            <div className="status-header">
              <code className="status-code">500</code>
              <span className="status-name">Internal Error</span>
            </div>
            <p className="status-desc">Server error</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="features">
        <h2>✨ API Features</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Reliable</h3>
            <p>Built with Next.js and deployed on Vercel edge network</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Authentication and validation on all endpoints</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Ready</h3>
            <p>CORS enabled, perfect for Flutter integration</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-title">CMPS312 Mobile App Development • Qatar University</p>
        <p className="footer-subtitle">Assignment 4 - RESTful API Integration</p>
        <p className="footer-tech">Built with Next.js 16, Prisma ORM, and Vercel Postgres</p>
        <div className="footer-tags">
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
  );
}
