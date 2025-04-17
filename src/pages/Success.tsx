import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../store/useCart';
import { CheckCircle } from 'lucide-react';

export const Success = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <div className="flex flex-col items-center">
        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-600 mb-8">
          Your payment was successful and your order is being processed.
        </p>
        <Link
          to="/shop"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};