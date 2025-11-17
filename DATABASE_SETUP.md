# Database Setup Guide

This guide explains how to set up the PostgreSQL database for the Digital Library API using Vercel Postgres.

## Prerequisites

- Vercel account
- Node.js 18+ installed
- This project cloned/downloaded

## Step 1: Create Vercel Postgres Database

### Option A: Via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on the "Storage" tab
3. Click "Create Database"
4. Select "Postgres"
5. Choose a name (e.g., "digital-library-db")
6. Select a region close to your users
7. Click "Create"

### Option B: Via Vercel CLI

```bash
vercel postgres create digital-library-db
```

## Step 2: Get Connection String

1. In Vercel Dashboard, go to your database
2. Click on the ".env.local" tab
3. Copy the `POSTGRES_PRISMA_URL` value
4. It should look like:
   ```
   postgres://default:xxxxx@xxxx-xxxxx-xxxxx.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require
   ```

## Step 3: Configure Local Environment

1. Create `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

2. Paste your connection string:
   ```env
   POSTGRES_PRISMA_URL="your-connection-string-here"
   ```

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Generate Prisma Client

```bash
npm run prisma:generate
```

This generates the Prisma Client based on your schema.

## Step 6: Push Schema to Database

```bash
npm run prisma:push
```

This creates all tables in your database without creating migration files (good for prototyping).

**Alternative: Create Migration (Production Approach)**

```bash
npm run prisma:migrate
```

This creates a migration file and applies it. Better for production as it tracks schema changes.

## Step 7: Seed the Database

```bash
npm run prisma:seed
```

This loads all the sample data from Assignment 3's JSON files:
- 20+ Authors
- 30+ Books
- 20+ Members
- 3 Staff members
- 15+ Transactions

Expected output:
```
🌱 Starting database seed...
🗑️  Clearing existing data...
📚 Seeding authors...
✅ Created 20 authors
📖 Seeding books...
✅ Created 30 books
👥 Seeding members...
✅ Created 20 members
👔 Seeding staff...
✅ Created 3 staff members
🔄 Seeding transactions...
✅ Created 15 transactions
✨ Database seeding completed successfully!
```

## Step 8: Verify Setup

### Option 1: Prisma Studio

```bash
npm run prisma:studio
```

Opens a GUI at `http://localhost:5555` where you can browse your data.

### Option 2: Test API Endpoint

Start the dev server:
```bash
npm run dev
```

Test an endpoint:
```bash
curl http://localhost:3000/api/books
```

Should return an array of books.

## Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to Vercel Dashboard
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Link Database**:
   - In project settings → Storage
   - Click "Connect Store"
   - Select your Postgres database
   - This automatically adds `POSTGRES_PRISMA_URL` to environment variables

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete

5. **Seed Production Database** (One-time):

   After first deployment, run seed from your local machine pointing to production:

   ```bash
   # Make sure .env has production POSTGRES_PRISMA_URL
   npm run prisma:seed
   ```

   Or use Vercel CLI:
   ```bash
   vercel env pull .env
   npm run prisma:seed
   ```

## Updating the Schema

If you need to modify the database schema:

### Development
1. Edit `prisma/schema.prisma`
2. Generate client: `npm run prisma:generate`
3. Push changes: `npm run prisma:push`
4. Reseed if needed: `npm run prisma:seed`

### Production
1. Edit `prisma/schema.prisma`
2. Create migration: `npm run prisma:migrate`
3. Commit and push to GitHub
4. Vercel will auto-deploy and run migrations

## Troubleshooting

### Error: "Can't reach database server"

**Solution**: Check your connection string in `.env`. Make sure it includes `?sslmode=require`.

### Error: "Table already exists"

**Solution**: Drop all tables and recreate:
```bash
npx prisma db push --force-reset
npm run prisma:seed
```

### Error: "Foreign key constraint fails" during seed

**Solution**: The seed script deletes data in the correct order. Make sure you're not modifying the deletion order in `prisma/seed.ts`.

### Prisma Client not generated

**Solution**: Run generate command:
```bash
npm run prisma:generate
```

### Connection timeout

**Solutions**:
1. Check if database is running (Vercel dashboard)
2. Verify connection string has correct credentials
3. Check firewall/network settings
4. Verify region matches for lower latency

## Database Schema Overview

### Tables

1. **authors**
   - id (String, Primary Key)
   - name, profileImageUrl, biography, birthYear
   - Relations: books (one-to-many)

2. **books**
   - id (String, Primary Key)
   - title, authorId (FK), publishedYear, category, isAvailable
   - isbn (Unique), pageCount, publisher, coverImageUrl, description
   - Relations: author (many-to-one), transactions (one-to-many)

3. **members**
   - id (String, Primary Key)
   - name, email (Unique), phone, memberType, memberSince
   - profileImageUrl
   - Relations: transactions (one-to-many)

4. **staff**
   - staffId (String, Primary Key)
   - username (Unique), password, fullName, role

5. **transactions**
   - id (String, Primary Key)
   - memberId (FK), bookId (FK)
   - borrowDate, dueDate, returnDate, isReturned
   - Relations: member (many-to-one), book (many-to-one)

### Indexes

- books: authorId, category
- members: memberType
- staff: role
- transactions: memberId, bookId, isReturned

## Security Notes

⚠️ **Important**: This setup is for educational purposes only!

For production:
1. **Hash passwords**: Use bcrypt/argon2 for staff passwords
2. **Add authentication**: Implement JWT tokens
3. **Rate limiting**: Prevent abuse
4. **Input validation**: Add Zod or similar validation library
5. **SQL injection protection**: Prisma handles this, but be careful with raw queries
6. **Environment variables**: Never commit `.env` to Git

## Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Vercel Postgres Documentation](https://vercel.com/docs/storage/vercel-postgres)
- [Next.js Documentation](https://nextjs.org/docs)

## Support

If you encounter issues:
1. Check error messages carefully
2. Review Prisma logs
3. Check Vercel deployment logs
4. Verify environment variables are set correctly

---

**CMPS312 Mobile App Development** • Qatar University
