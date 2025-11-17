# Digital Library API

A RESTful API for Digital Library Management System built with Next.js, Prisma, and PostgreSQL for **CMPS312 Mobile App Development - Assignment 4**.

## Features

- 📚 Full CRUD operations for all entities (Authors, Books, Members, Staff, Transactions)
- 🔐 Staff authentication endpoint
- 🔄 Query filters (books by author, transactions by member/book)
- 💾 PostgreSQL database with Prisma ORM
- 🌐 CORS enabled for Flutter clients
- 📖 Interactive API documentation
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: Vercel Postgres (PostgreSQL)
- **ORM**: Prisma
- **Language**: TypeScript
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (Vercel Postgres recommended)
- npm or yarn package manager

### Installation

1. **Clone or download this project**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory:
   ```env
   POSTGRES_PRISMA_URL="postgresql://user:password@host:5432/database?sslmode=require"
   ```

4. **Generate Prisma Client**:
   ```bash
   npm run prisma:generate
   ```

5. **Push database schema**:
   ```bash
   npm run prisma:push
   ```

6. **Seed the database**:
   ```bash
   npm run prisma:seed
   ```

7. **Run the development server**:
   ```bash
   npm run dev
   ```

8. **Open the API documentation**:

   Visit [http://localhost:3000](http://localhost:3000)

## API Endpoints

### Authors
- `GET /api/authors` - Get all authors
- `GET /api/authors/:id` - Get author by ID
- `POST /api/authors` - Create author
- `PUT /api/authors/:id` - Update author
- `DELETE /api/authors/:id` - Delete author

### Books
- `GET /api/books` - Get all books
- `GET /api/books?authorId=:id` - Get books by author
- `GET /api/books/:id` - Get book by ID
- `POST /api/books` - Create book
- `PUT /api/books/:id` - Update book
- `DELETE /api/books/:id` - Delete book

### Members
- `GET /api/members` - Get all members
- `GET /api/members/:id` - Get member by ID
- `POST /api/members` - Create member
- `PUT /api/members/:id` - Update member
- `DELETE /api/members/:id` - Delete member

### Staff
- `GET /api/staff` - Get all staff
- `GET /api/staff/:id` - Get staff by ID
- `POST /api/staff` - Create staff
- `PUT /api/staff/:id` - Update staff
- `DELETE /api/staff/:id` - Delete staff

### Transactions
- `GET /api/transactions` - Get all transactions
- `GET /api/transactions?memberId=:id` - Get transactions by member
- `GET /api/transactions?bookId=:id` - Get transactions by book
- `GET /api/transactions/:id` - Get transaction by ID
- `POST /api/transactions` - Create transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Authentication
- `POST /api/auth` - Staff login

**Test Credentials**:
- `admin` / `admin123`
- `librarian` / `lib123`
- `staff` / `staff123`

## Database Schema

The API uses 5 main entities:

1. **Author**: id, name, profileImageUrl, biography, birthYear
2. **Book**: id, title, authorId (FK), publishedYear, category, isAvailable, coverImageUrl, description, pageCount, isbn, publisher
3. **Member**: id, name, email, phone, memberType, memberSince, profileImageUrl
4. **Staff**: staffId, username, password, fullName, role
5. **Transaction**: id, memberId (FK), bookId (FK), borrowDate, dueDate, returnDate, isReturned

## Deployment to Vercel

### Option 1: Via GitHub (Recommended)

1. Push this code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variable: `POSTGRES_PRISMA_URL`
6. Deploy!

### Option 2: Via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Add environment variable in Vercel dashboard

### Post-Deployment

After deploying:

1. Go to Vercel dashboard → Your project → Settings → Environment Variables
2. Add `POSTGRES_PRISMA_URL` with your database connection string
3. Redeploy the project
4. Run seed script (one-time):
   ```bash
   npm run prisma:seed
   ```

## Development

### Prisma Commands

```bash
# Generate Prisma Client
npm run prisma:generate

# Push schema changes to database
npm run prisma:push

# Create migration
npm run prisma:migrate

# Seed database
npm run prisma:seed

# Open Prisma Studio
npm run prisma:studio
```

### Testing Endpoints

Use curl, Postman, or any HTTP client:

```bash
# Get all books
curl http://localhost:3000/api/books

# Create a book
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "id": "book999",
    "title": "Test Book",
    "authorId": "auth001",
    "publishedYear": 2024,
    "category": "Test",
    "isbn": "978-9999999999",
    "pageCount": 100,
    "publisher": "Test Press"
  }'

# Login
curl -X POST http://localhost:3000/api/auth \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'
```

## Project Structure

```
digital_library_api/
├── app/
│   ├── api/
│   │   ├── authors/
│   │   ├── books/
│   │   ├── members/
│   │   ├── staff/
│   │   ├── transactions/
│   │   └── auth/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── lib/
│   └── prisma.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── package.json
├── tsconfig.json
└── vercel.json
```

## Notes

- Passwords are stored in plain text for educational purposes. **In production, always hash passwords!**
- CORS is enabled by default in Next.js App Router
- All API routes include proper error handling and HTTP status codes
- Database uses String IDs to match Assignment 3 structure

## License

MIT

## Course Information

**Course**: CMPS312 Mobile App Development
**Institution**: Qatar University
**Assignment**: Assignment 4 - Web API Integration
