
import React, { useState } from 'react';
import { User, Order } from '../types';

interface DashboardProps {
  user: User;
  orders: Order[];
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, orders, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses' | 'password'>('orders');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        <aside className="w-full md:w-64 space-y-2">
          <div className="p-6 bg-white rounded-3xl border border-slate-100 mb-6 text-center">
            <div className="w-20 h-20 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
              {user.name.charAt(0)}
            </div>
            <h3 className="font-bold text-slate-900">{user.name}</h3>
            <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Premium Member</p>
          </div>

          {[
            { id: 'orders', label: 'My Orders' },
            { id: 'profile', label: 'Profile Settings' },
            { id: 'addresses', label: 'Saved Addresses' },
            { id: 'password', label: 'Change Password' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full text-left px-6 py-3 rounded-2xl font-medium transition-all ${activeTab === tab.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-100'}`}
            >
              {tab.label}
            </button>
          ))}
          <button onClick={onLogout} className="w-full text-left px-6 py-3 rounded-2xl font-medium text-rose-500 hover:bg-rose-50 mt-8 transition-all">
            Logout
          </button>
        </aside>

        <div className="flex-1 bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-sm min-h-[500px]">
          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Recent Orders</h2>
              {orders.length === 0 ? (
                <div className="text-center py-20 text-slate-400">No orders found. Start shopping to fill this up!</div>
              ) : (
                <div className="space-y-6">
                  {orders.map(order => (
                    <div key={order.id} className="p-6 border border-slate-100 rounded-3xl hover:border-indigo-100 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-xs font-bold text-indigo-600 mb-1">{order.id}</p>
                          <p className="text-sm text-slate-500">{order.date}</p>
                        </div>
                        <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-bold uppercase">{order.status}</span>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="flex -space-x-3">
                          {order.items.map(item => (
                            <img key={item.id} src={item.image} className="w-10 h-10 rounded-full border-2 border-white object-cover" title={item.name} />
                          ))}
                        </div>
                        <p className="font-bold text-slate-900">${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="max-w-md">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Account Details</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Display Name</label>
                  <input type="text" defaultValue={user.name} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" defaultValue={user.email} disabled className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl cursor-not-allowed" />
                </div>
                <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">Save Changes</button>
              </form>
            </div>
          )}

          {activeTab === 'addresses' && (
             <div className="text-center py-20 text-slate-400">
               <h2 className="text-2xl font-bold text-slate-900 mb-4">Manage Addresses</h2>
               <p>No addresses saved. You can add one during your next checkout.</p>
             </div>
          )}

          {activeTab === 'password' && (
            <div className="max-w-md">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Security</h2>
              <form className="space-y-6">
                <input type="password" placeholder="Current Password" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                <input type="password" placeholder="New Password" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl" />
                <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">Update Password</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
