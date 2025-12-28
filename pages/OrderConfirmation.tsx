
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Order } from '../types';

interface OrderConfirmationProps {
  orders: Order[];
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ orders }) => {
  const { orderId } = useParams<{ orderId: string }>();
  const order = orders.find(o => o.id === orderId);

  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Order Confirmed!</h1>
      <p className="text-slate-500 mb-8 text-lg">Thank you for your purchase. Your order <span className="font-bold text-indigo-600">{orderId}</span> has been received.</p>
      
      <div className="bg-white border border-slate-100 p-8 rounded-3xl text-left mb-12">
        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-50 pb-4 uppercase text-xs tracking-widest">Order Details</h3>
        <div className="space-y-3 mb-6">
          {order?.items.map(item => (
            <div key={item.id} className="flex justify-between text-sm">
              <span className="text-slate-600">{item.name} x {item.quantity}</span>
              <span className="font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xl font-bold pt-4 border-t border-slate-100">
          <span>Total Amount</span>
          <span className="text-indigo-600">${order?.total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/dashboard" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all">
          View Order History
        </Link>
        <Link to="/products" className="px-8 py-4 bg-indigo-50 text-indigo-600 rounded-2xl font-bold hover:bg-indigo-100 transition-all">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
