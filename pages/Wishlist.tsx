
import React from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface WishlistProps {
  wishlist: Product[];
  onAddToCart: (p: Product) => void;
  onRemove: (p: Product) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ wishlist, onAddToCart, onRemove }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-12">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-200 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
           </svg>
           <h3 className="text-xl font-bold text-slate-900 mb-2">Your wishlist is empty</h3>
           <p className="text-slate-500">Items you heart will appear here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map(product => (
            <div key={product.id} className="relative">
              <ProductCard product={product} onAddToCart={onAddToCart} />
              <button 
                onClick={() => onRemove(product)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full text-rose-500 shadow-md hover:scale-110 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
