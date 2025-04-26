'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface CartContextType {
  items: MenuItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getCartItemCount: () => number;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<MenuItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartItemCount = () => {
    return items.length;
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        clearCart,
        getCartItemCount,
        getCartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 