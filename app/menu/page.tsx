'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaRegStar, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic tomato sauce, mozzarella, and fresh basil',
    price: 12.99,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    name: 'Spaghetti Carbonara',
    description: 'Pasta with creamy egg sauce, pancetta, and parmesan',
    price: 14.99,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 3,
    name: 'Caesar Salad',
    description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing',
    price: 9.99,
    category: 'salad',
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 4,
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee and mascarpone',
    price: 7.99,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart } = useCart();

  const categories = ['all', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Our Menu</h1>
      
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg capitalize ${
              activeCategory === category
                ? 'bg-amber-500 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-amber-500 font-bold">${item.price.toFixed(2)}</span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 