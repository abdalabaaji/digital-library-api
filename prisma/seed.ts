import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data in reverse order of dependencies
  console.log('🗑️  Clearing existing data...');
  await prisma.transaction.deleteMany();
  await prisma.book.deleteMany();
  await prisma.author.deleteMany();
  await prisma.member.deleteMany();
  await prisma.staff.deleteMany();

  // Load JSON data from Assignment 3
  const dataPath = join(process.cwd(), '..', 'digital_library', 'assets', 'data');

  // Seed Authors
  console.log('📚 Seeding authors...');
  const authorsData = JSON.parse(
    readFileSync(join(dataPath, 'authors_json.json'), 'utf-8')
  );
  for (const author of authorsData) {
    await prisma.author.create({
      data: {
        id: author.id,
        name: author.name,
        profileImageUrl: author.profileImageUrl || null,
        biography: author.biography || null,
        birthYear: author.birthYear || null,
      },
    });
  }
  console.log(`✅ Created ${authorsData.length} authors`);

  // Seed Books
  console.log('📖 Seeding books...');
  const booksData = JSON.parse(
    readFileSync(join(dataPath, 'library_catalog_json.json'), 'utf-8')
  );
  for (const book of booksData) {
    // Handle authorIds array - use first author
    const authorId = book.authorId || (book.authorIds && book.authorIds[0]);

    await prisma.book.create({
      data: {
        id: book.id,
        title: book.title,
        authorId: authorId,
        publishedYear: book.publishedYear,
        category: book.category,
        isAvailable: book.isAvailable ?? true,
        coverImageUrl: book.coverImageUrl || null,
        description: book.description || null,
        pageCount: book.pageCount,
        isbn: book.isbn,
        publisher: book.publisher,
      },
    });
  }
  console.log(`✅ Created ${booksData.length} books`);

  // Seed Members
  console.log('👥 Seeding members...');
  const membersData = JSON.parse(
    readFileSync(join(dataPath, 'members_json.json'), 'utf-8')
  );
  for (const member of membersData) {
    await prisma.member.create({
      data: {
        id: member.id || member.memberId,
        name: member.name,
        email: member.email,
        phone: member.phone || '',
        memberType: member.memberType || 'student',
        memberSince: new Date(member.memberSince || member.joinDate),
        profileImageUrl: member.profileImageUrl || null,
      },
    });
  }
  console.log(`✅ Created ${membersData.length} members`);

  // Seed Staff
  console.log('👔 Seeding staff...');
  const staffData = JSON.parse(
    readFileSync(join(dataPath, 'staff_json.json'), 'utf-8')
  );
  for (const staff of staffData) {
    await prisma.staff.create({
      data: {
        staffId: staff.staffId,
        username: staff.username,
        password: staff.password, // Note: In production, hash passwords!
        fullName: staff.fullName,
        role: staff.role,
      },
    });
  }
  console.log(`✅ Created ${staffData.length} staff members`);

  // Seed Transactions
  console.log('🔄 Seeding transactions...');
  const transactionsData = JSON.parse(
    readFileSync(join(dataPath, 'transactions.json'), 'utf-8')
  );
  for (const transaction of transactionsData) {
    await prisma.transaction.create({
      data: {
        id: transaction.id,
        memberId: transaction.memberId,
        bookId: transaction.bookId,
        borrowDate: new Date(transaction.borrowDate),
        dueDate: new Date(transaction.dueDate),
        returnDate: transaction.returnDate ? new Date(transaction.returnDate) : null,
        isReturned: transaction.isReturned ?? false,
      },
    });
  }
  console.log(`✅ Created ${transactionsData.length} transactions`);

  console.log('✨ Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
