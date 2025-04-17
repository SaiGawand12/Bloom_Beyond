import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../store/useCart';
import { ShoppingCart } from 'lucide-react';

export const Shop = () => {
  const { addItem } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4">
              <Link to={`/product/${product.id}`}>
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              </Link>
              <p className="text-gray-600 mb-2">{product.origin}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>
                <button
                  onClick={() => addItem(product)}
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 flex items-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};