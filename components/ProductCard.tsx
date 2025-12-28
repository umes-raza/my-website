
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 transform hover:-translate-y-2">
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-slate-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-600 shadow-sm">
            {product.category}
          </span>
        </div>
      </Link>
      <div className="p-6">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-slate-500 line-clamp-1">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          <button 
            onClick={() => onAddToCart(product)}
            className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
