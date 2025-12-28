
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from '../types';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  user: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, wishlistCount, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600 tracking-tighter">
              LUXE<span className="text-slate-900">MART</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  isActive(link.path) ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2 md:space-x-5">
            <Link to="/wishlist" className="relative p-2 text-slate-500 hover:text-rose-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-rose-500 text-white text-[10px] font-bold px-1 rounded-full min-w-[16px] text-center border-2 border-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative p-2 text-slate-500 hover:text-indigo-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-indigo-600 text-white text-[10px] font-bold px-1 rounded-full min-w-[16px] text-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <Link to="/dashboard" className="flex items-center space-x-2 p-1.5 hover:bg-slate-50 rounded-full transition-all group">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-xs uppercase group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {user.name.charAt(0)}
                </div>
              </Link>
            ) : (
              <Link to="/login" className="text-sm font-bold text-slate-900 px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-all">
                Login
              </Link>
            )}

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-500 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 px-6 space-y-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block text-lg font-medium ${isActive(link.path) ? 'text-indigo-600' : 'text-slate-600'}`}>
              {link.name}
            </Link>
          ))}
          {!user && <Link to="/signup" className="block text-lg font-bold text-indigo-600">Get Started</Link>}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
