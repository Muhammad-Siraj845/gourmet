'use client';

import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CartPage() {
  const { items, removeFromCart, getCartTotal } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      
      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items.map(item => ({
            ...item,
            quantity: 1,
          })),
        }),
      });

      const { sessionId } = await response.json();
      
      // Redirect to Stripe checkout
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');
      
      const { error } = await stripe.redirectToCheckout({ sessionId });
      
      if (error) {
        console.error('Stripe checkout error:', error);
        throw error;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong with the checkout process');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="text-gray-600">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">${(getCartTotal() * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-amber-500">
                    ${(getCartTotal() * 1.1).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full mt-6 bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Proceed to Checkout'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 