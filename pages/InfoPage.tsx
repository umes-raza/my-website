
import React from 'react';

interface InfoPageProps {
  type: 'about' | 'privacy' | 'terms' | 'shipping' | 'returns';
}

const contentMap = {
  about: {
    title: "Our Story",
    text: "LuxeMart was born from a desire to make premium, high-quality design accessible to everyone. We curate products that speak of craftsmanship and longevity."
  },
  privacy: {
    title: "Privacy Policy",
    text: "Your privacy is paramount. We use industry-standard encryption to protect your data and never sell your information to third parties."
  },
  terms: {
    title: "Terms & Conditions",
    text: "By using LuxeMart, you agree to our policies regarding fair usage, payment processing, and intellectual property rights."
  },
  shipping: {
    title: "Shipping Information",
    text: "We offer global shipping. Domestic orders arrive in 3-5 business days. International shipping varies by location (usually 10-14 days)."
  },
  returns: {
    title: "Return & Refund",
    text: "Not satisfied? We offer a no-questions-asked 30-day return policy for all products in original packaging."
  }
};

const InfoPage: React.FC<InfoPageProps> = ({ type }) => {
  const content = contentMap[type];

  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      <h1 className="text-5xl font-bold text-slate-900 mb-12 tracking-tight">{content.title}</h1>
      <div className="prose prose-slate lg:prose-xl">
        <p className="text-slate-600 leading-relaxed text-lg">{content.text}</p>
        <div className="mt-12 h-1 w-24 bg-indigo-600 rounded-full"></div>
        <p className="mt-8 text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default InfoPage;
