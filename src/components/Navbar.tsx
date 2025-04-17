import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Flower, LogOut, User } from 'lucide-react';
import { useCart } from '../store/useCart';
import { useAuth } from '../store/useAuth';

export const Navbar = () => {
  const { items } = useCart();
  const { user, signOut } = useAuth();
  
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Flower className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-semibold text-gray-900 hidden sm:block">Blooms Beyond Borders</span>
              <span className="ml-2 text-xl font-semibold text-gray-900 sm:hidden">BBB</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-pink-500">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-pink-500">Shop</Link>
            <Link to="/cart" className="text-gray-700 hover:text-pink-500 relative">
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {items.length}
                </span>
              )}
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 hidden sm:block">{user.email}</span>
                <button
                  onClick={() => signOut()}
                  className="text-gray-700 hover:text-pink-500"
                >
                  <LogOut className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center text-gray-700 hover:text-pink-500">
                <User className="h-6 w-6" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};