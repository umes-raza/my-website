
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem, User } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  user: User | null;
  onCheckout: (items: CartItem[], total: number) => string;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, user, onCheckout }) => {
  const navigate = useNavigate();
  const subtotal = cart.reduce((a, b) => a + b.price * b.quantity, 0);
  const shipping = 15;
  const total = subtotal + shipping;

  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    address: '',
    city: '',
    zip: '',
    card: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = onCheckout(cart, total);
    navigate(`/order-confirmation/${orderId}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-12">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Shipping Information</h2>
            <div className="grid grid-cols-1 gap-4">
              <input required type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200" />
              <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200" />
              <input required type="text" placeholder="Street Address" value={form.address} onChange={e => setForm({...form, address: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200" />
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="City" className="px-4 py-3 rounded-xl border border-slate-200" />
                <input required type="text" placeholder="Zip Code" className="px-4 py-3 rounded-xl border border-slate-200" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Payment Method</h2>
            <div className="p-6 border border-indigo-100 bg-indigo-50/30 rounded-2xl">
              <input required type="text" placeholder="Card Number (XXXX XXXX XXXX XXXX)" className="w-full px-4 py-3 rounded-xl border border-slate-200 mb-4" />
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="MM/YY" className="px-4 py-3 rounded-xl border border-slate-200" />
                <input required type="text" placeholder="CVC" className="px-4 py-3 rounded-xl border border-slate-200" />
              </div>
            </div>
          </section>
        </div>

        <aside>
          <div className="bg-slate-900 text-white p-8 rounded-3xl sticky top-24">
            <h3 className="text-2xl font-bold mb-8">Summary</h3>
            <div className="space-y-4 mb-8">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-sm text-slate-400">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-slate-800 flex justify-between text-slate-300">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="pt-4 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-indigo-400">${total.toFixed(2)}</span>
              </div>
            </div>
            <button type="submit" className="w-full py-4 bg-indigo-600 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-900/40">
              Pay & Complete Order
            </button>
          </div>
        </aside>
      </form>
    </div>
  );
};

export default Checkout;
