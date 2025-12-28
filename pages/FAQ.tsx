
import React, { useState } from 'react';

const FAQS = [
  { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days." },
  { q: "Do you offer international shipping?", a: "Yes, we ship to over 50 countries worldwide." },
  { q: "Can I cancel my order?", a: "Orders can be cancelled within 2 hours of placement." },
  { q: "Is my payment secure?", a: "Absolutely. We use Stripe for high-level security." }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {FAQS.map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
            >
              <span className="font-bold text-slate-900">{item.q}</span>
              <svg className={`h-5 w-5 text-slate-400 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIdx === idx && (
              <div className="p-6 pt-0 text-slate-500 animate-fade-in">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
