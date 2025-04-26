'use client';

import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Cart() {
  const { items, removeFromCart, clearCart } = useCart();
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
            quantity: 1, // You can modify this based on your cart implementation
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

  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600">Add some delicious items to your cart!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      
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

      <div className="mt-6 p-4 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total:</span>
          <span className="text-xl font-bold">${total.toFixed(2)}</span>
        </div>
        
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Proceed to Checkout'}
        </button>
      </div>
    </div>
  );
} 