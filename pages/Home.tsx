
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 4);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Hero Background"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Redefining <br />
            <span className="text-indigo-400">Premium Living</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
            Discover a curated collection of handpicked lifestyle products that blend functional excellence with modern aesthetics.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
            <Link 
              to="/products" 
              className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 text-lg w-full sm:w-auto text-center"
            >
              Shop Now
            </Link>
            <Link 
              to="/products" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all text-lg w-full sm:w-auto text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Our Favorites</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Featured Products</h2>
          </div>
          <Link to="/products" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center group">
            View all products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Shop by Category</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              Explore our wide range of carefully curated categories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-3xl aspect-[4/5] md:aspect-auto md:h-[500px]">
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-2">Fashion</h3>
                <Link to="/products" className="text-white/80 hover:text-white underline decoration-indigo-500 underline-offset-4 text-sm font-semibold">Explore Collections</Link>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-6">
               <div className="relative group overflow-hidden rounded-3xl">
                <img src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white mb-1">Electronics</h3>
                  <Link to="/products" className="text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest">Shop Gear</Link>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-3xl">
                <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white mb-1">Home Decor</h3>
                  <Link to="/products" className="text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest">Discover Items</Link>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl aspect-[4/5] md:aspect-auto md:h-[500px]">
              <img src="https://images.unsplash.com/photo-1511499767350-a1590fdb2e47?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-2">Lifestyle</h3>
                <Link to="/products" className="text-white/80 hover:text-white underline decoration-indigo-500 underline-offset-4 text-sm font-semibold">Browse Essentials</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Quality</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We source only the highest quality materials and work with expert artisans to deliver products that last.
            </p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 17v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Eco-Friendly</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Sustainability is at our core. We use recycled packaging and carbon-neutral shipping methods.
            </p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Support</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our dedicated support team is always available to assist you with any questions or concerns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
