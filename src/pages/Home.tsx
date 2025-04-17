import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Blooms Beyond Borders</h1>
            <p className="text-xl mb-8">Bringing the world's most beautiful flowers to your doorstep</p>
            <Link
              to="/shop"
              className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1523386571890-790e639b10a4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Spring Collection"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Spring Collection</h3>
              <p className="text-gray-600 mb-4">Vibrant tulips and daffodils to welcome the season</p>
              <Link to="/shop" className="text-pink-500 hover:text-pink-600">Shop Collection →</Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1618217797866-72d517d2bb19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Exotic Collection"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Exotic Collection</h3>
              <p className="text-gray-600 mb-4">Rare and beautiful flowers from distant lands</p>
              <Link to="/shop" className="text-pink-500 hover:text-pink-600">Shop Collection →</Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1708003790396-ba55e2d75226?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Premium Roses"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Premium Roses</h3>
              <p className="text-gray-600 mb-4">Luxury roses for special occasions</p>
              <Link to="/shop" className="text-pink-500 hover:text-pink-600">Shop Collection →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};