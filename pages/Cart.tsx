
import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CartProps {
  cart: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, onRemove, onUpdateQuantity }) => {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 15.00 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Your cart is empty</h2>
        <p className="text-slate-500 mb-10 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Head over to our shop to discover amazing products.</p>
        <Link 
          to="/products" 
          className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-12">Shopping Bag</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="w-28 h-28 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{item.category}</p>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="mt-4 text-rose-500 hover:text-rose-600 text-sm font-semibold transition-colors"
                >
                  Remove item
                </button>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 rounded-full px-4 py-2">
                <button 
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors text-slate-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-sm font-bold text-slate-900 w-4 text-center">{item.quantity}</span>
                <button 
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors text-slate-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>

              <div className="text-right">
                <span className="text-xl font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping estimate</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-between">
                <span className="text-lg font-bold text-slate-900">Total</span>
                <span className="text-2xl font-bold text-indigo-600">${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 mb-4">
              Checkout Now
            </button>
            <p className="text-xs text-center text-slate-400">
              Free shipping on orders over $500. Secure checkout powered by Stripe.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
