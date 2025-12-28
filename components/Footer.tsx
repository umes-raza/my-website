
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="text-2xl font-bold text-indigo-600 tracking-tighter mb-6 block">
              LUXE<span className="text-slate-900">MART</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Luxury curated for the modern minimalist. High-quality essentials for your home, wardrobe, and lifestyle.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Shop</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/products" className="hover:text-indigo-600 transition-colors">All Products</Link></li>
              <li><Link to="/products" className="hover:text-indigo-600 transition-colors">Best Sellers</Link></li>
              <li><Link to="/products" className="hover:text-indigo-600 transition-colors">New Arrivals</Link></li>
              <li><Link to="/shipping-info" className="hover:text-indigo-600 transition-colors">Shipping Info</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Account</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/dashboard" className="hover:text-indigo-600 transition-colors">Profile</Link></li>
              <li><Link to="/dashboard" className="hover:text-indigo-600 transition-colors">My Orders</Link></li>
              <li><Link to="/wishlist" className="hover:text-indigo-600 transition-colors">Wishlist</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Policies</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-600 transition-colors">Terms of Use</Link></li>
              <li><Link to="/returns" className="hover:text-indigo-600 transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="hover:text-indigo-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium">
          <p>&copy; {new Date().getFullYear()} LuxeMart Inc. Crafting modern elegance.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
