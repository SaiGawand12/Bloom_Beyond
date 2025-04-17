import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Blooms Beyond Borders brings you the finest flowers from around the world,
              carefully selected and delivered with love.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/shop" className="text-gray-400 hover:text-pink-500">Shop</a></li>
              <li><a href="/cart" className="text-gray-400 hover:text-pink-500">Cart</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-pink-500">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-pink-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Email: saigawand90@gmail.com</li>
              <li>Phone: +91 8180828260</li>
              <li>Address: Banglore</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/SaiGawand12" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/sai-gawand-aa719025b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/saigawand90" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© 2024 Blooms Beyond Borders. Made with ❤️ by Sai Gawand</p>
        </div>
      </div>
    </footer>
  );
};