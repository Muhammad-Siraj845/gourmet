'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CancelPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Cancelled</h1>
        <p className="text-gray-600 mb-8">Your payment was cancelled. You can try again or return to the menu.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/menu"
            className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
          >
            Back to Menu
          </Link>
          <Link
            href="/"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 