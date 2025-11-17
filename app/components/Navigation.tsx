'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: '🏠' },
    { name: 'Books', path: '/books', icon: '📚' },
    { name: 'Authors', path: '/authors', icon: '👤' },
    { name: 'Members', path: '/members', icon: '👥' },
    { name: 'Transactions', path: '/transactions', icon: '🔄' },
    { name: 'API Docs', path: '/docs', icon: '📖' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <span className="text-3xl">📚</span>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Digital Library</h1>
              <p className="text-xs text-gray-500">Management System</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="hidden sm:inline">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
