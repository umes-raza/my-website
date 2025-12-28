
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductDetailsProps {
  onAddToCart: (p: Product) => void;
  onToggleWishlist: (p: Product) => void;
  isWishlisted: (id: number) => boolean;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ onAddToCart, onToggleWishlist, isWishlisted }) => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) return <div className="text-center py-20">Product not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <nav className="mb-8">
        <ol className="flex text-sm text-slate-500">
          <li><Link to="/products" className="hover:text-indigo-600">Products</Link></li>
          <li className="mx-2">/</li>
          <li className="text-slate-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div>
          <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">{product.category}</span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">{product.name}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
            <span className="text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold uppercase">In Stock</span>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">{product.description}</p>

          <div className="flex gap-4">
            <button 
              onClick={() => onAddToCart(product)}
              className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Add to Cart
            </button>
            <button 
              onClick={() => onToggleWishlist(product)}
              className={`p-4 rounded-2xl border transition-all ${isWishlisted(product.id) ? 'bg-rose-50 border-rose-100 text-rose-500' : 'bg-white border-slate-200 text-slate-400 hover:text-rose-500'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isWishlisted(product.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          <div className="mt-12 pt-12 border-t border-slate-100 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Specifications</h4>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• Premium materials</li>
                <li>• Durable construction</li>
                <li>• Eco-friendly packaging</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Shipping Info</h4>
              <p className="text-sm text-slate-500">Free 2-day delivery on orders over $150. Easy returns within 30 days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
