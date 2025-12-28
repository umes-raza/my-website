
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Product, CartItem, Order, User } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import OrderConfirmation from './pages/OrderConfirmation';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import InfoPage from './pages/InfoPage';
import FAQ from './pages/FAQ';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('luxe-mart-cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const saved = localStorage.getItem('luxe-mart-wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('luxe-mart-orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('luxe-mart-user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('luxe-mart-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('luxe-mart-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('luxe-mart-orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => setCart(prev => prev.filter(item => item.id !== id));
  const updateQuantity = (id: number, qty: number) => {
    if (qty < 1) return;
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) return prev.filter(p => p.id !== product.id);
      return [...prev, product];
    });
  };

  const handleCheckout = (orderItems: CartItem[], total: number) => {
    const newOrder: Order = {
      id: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      date: new Date().toLocaleDateString(),
      items: orderItems,
      total,
      status: 'Processing'
    };
    setOrders([newOrder, ...orders]);
    setCart([]);
    return newOrder.id;
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('luxe-mart-user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('luxe-mart-user');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={cart.reduce((a, b) => a + b.quantity, 0)} wishlistCount={wishlist.length} user={user} />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/products" element={<Products onAddToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetails onAddToCart={addToCart} onToggleWishlist={toggleWishlist} isWishlisted={(id) => wishlist.some(p => p.id === id)} />} />
            <Route path="/cart" element={<Cart cart={cart} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} />} />
            <Route path="/checkout" element={<Checkout cart={cart} onCheckout={handleCheckout} user={user} />} />
            <Route path="/wishlist" element={<Wishlist wishlist={wishlist} onAddToCart={addToCart} onRemove={toggleWishlist} />} />
            <Route path="/order-confirmation/:orderId" element={<OrderConfirmation orders={orders} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<InfoPage type="about" />} />
            <Route path="/privacy" element={<InfoPage type="privacy" />} />
            <Route path="/terms" element={<InfoPage type="terms" />} />
            <Route path="/shipping-info" element={<InfoPage type="shipping" />} />
            <Route path="/returns" element={<InfoPage type="returns" />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard/*" element={user ? <Dashboard user={user} orders={orders} onLogout={handleLogout} /> : <Navigate to="/login" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
