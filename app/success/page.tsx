'use client';

import { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart when the success page is loaded
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <svg
            className="w-16 h-16 text-green-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for your order. We'll send you an email with the details.
        </p>
        <Link
          href="/"
          className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
} 