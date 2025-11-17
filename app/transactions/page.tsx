'use client';

import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config/api';

interface Transaction {
  id: string;
  bookId: string;
  memberId: string;
  borrowDate: string;
  dueDate: string;
  returnDate: string | null;
  isReturned: boolean;
}

interface Book {
  id: string;
  title: string;
  isAvailable: boolean;
}

interface Member {
  id: string;
  name: string;
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'returned'>('all');
  const [formData, setFormData] = useState({
    id: '',
    bookId: '',
    memberId: '',
    borrowDate: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [transactionsRes, booksRes, membersRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/transactions`),
        fetch(`${API_BASE_URL}/api/books`),
        fetch(`${API_BASE_URL}/api/members`),
      ]);

      setTransactions(await transactionsRes.json());
      setBooks(await booksRes.json());
      setMembers(await membersRes.json());
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchData();
        resetForm();
        setShowCheckoutForm(false);
      }
    } catch (error) {
      console.error('Failed to create checkout:', error);
    }
  };

  const handleReturn = async (id: string) => {
    if (!confirm('Mark this book as returned?')) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/transactions/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          returnDate: new Date().toISOString().split('T')[0],
        }),
      });

      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Failed to process return:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      id: '',
      bookId: '',
      memberId: '',
      borrowDate: new Date().toISOString().split('T')[0],
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    });
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (filterStatus === 'active') return !transaction.returnDate;
    if (filterStatus === 'returned') return !!transaction.returnDate;
    return true;
  });

  const getBookTitle = (bookId: string) => {
    const book = books.find((b) => b.id === bookId);
    return book?.title || 'Unknown Book';
  };

  const getMemberName = (id: string) => {
    const member = members.find((m) => m.id === id);
    return member?.name || 'Unknown Member';
  };

  const isOverdue = (dueDate: string, returnDate: string | null) => {
    if (returnDate) return false;
    return new Date(dueDate) < new Date();
  };

  const availableBooks = books.filter((b) => b.isAvailable);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Transactions</h1>
            <p className="text-gray-600">Manage book checkouts and returns</p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowCheckoutForm(!showCheckoutForm);
            }}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition shadow-lg"
          >
            {showCheckoutForm ? 'Cancel' : '+ New Checkout'}
          </button>
        </div>

        {showCheckoutForm && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">New Book Checkout</h2>
            <form onSubmit={handleCheckout} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transaction ID</label>
                <input
                  type="text"
                  required
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., T001"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Book (Available Only)
                </label>
                <select
                  required
                  value={formData.bookId}
                  onChange={(e) => setFormData({ ...formData, bookId: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select a book</option>
                  {availableBooks.map((book) => (
                    <option key={book.id} value={book.id}>
                      {book.title} ({book.id})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Member</label>
                <select
                  required
                  value={formData.memberId}
                  onChange={(e) => setFormData({ ...formData, memberId: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select a member</option>
                  {members.map((member) => (
                    <option key={member.id} value={member.id}>
                      {member.name} ({member.id})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Borrow Date</label>
                <input
                  type="date"
                  required
                  value={formData.borrowDate}
                  onChange={(e) => setFormData({ ...formData, borrowDate: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                <input
                  type="date"
                  required
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2 flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                >
                  Create Checkout
                </button>
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setShowCheckoutForm(false);
                  }}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="mb-6 flex gap-4">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filterStatus === 'all'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Transactions
            </button>
            <button
              onClick={() => setFilterStatus('active')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filterStatus === 'active'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Active Loans
            </button>
            <button
              onClick={() => setFilterStatus('returned')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filterStatus === 'returned'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Returned
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading transactions...</p>
            </div>
          ) : filteredTransactions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No transactions found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">ID</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Book</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Member</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Borrow Date</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Due Date</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-right py-4 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((transaction) => {
                    const overdue = isOverdue(transaction.dueDate, transaction.returnDate);
                    return (
                      <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 text-sm font-medium text-gray-900">
                          {transaction.id}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">
                          {getBookTitle(transaction.bookId)}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">
                          {getMemberName(transaction.memberId)}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">
                          {new Date(transaction.borrowDate).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">
                          {new Date(transaction.dueDate).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4">
                          {transaction.returnDate ? (
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                              Returned {new Date(transaction.returnDate).toLocaleDateString()}
                            </span>
                          ) : overdue ? (
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                              Overdue
                            </span>
                          ) : (
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                              Active
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-right">
                          {!transaction.returnDate && (
                            <button
                              onClick={() => handleReturn(transaction.id)}
                              className="text-orange-600 hover:text-orange-800 font-medium"
                            >
                              Mark as Returned
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-6 text-sm text-gray-600">
            Showing {filteredTransactions.length} of {transactions.length} transactions
          </div>
        </div>
      </div>
    </main>
  );
}
