import React from 'react';
import ContactUs from '../components/ContactUs';
import FaqSection from '../components/FaqSection';
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ContactPage({ onShowToast }) {
  return (
    <div className="pt-8 pb-20">
      {/* Contact Page Hero */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-emerald-50/40 via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span>Executive Placement Desk</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Deploy Top 1% Engineers <span className="text-gradient-emerald">Into Your Next Sprint</span>.
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Connect directly with our Technical Placement Directors across our San Francisco and Dubai DIFC hubs. Average initial response time under 15 minutes.
          </p>
        </div>
      </section>

      {/* Main Contact Us Component */}
      <ContactUs onShowToast={onShowToast} />

      {/* Embedded FAQ for Client Inquiries */}
      <FaqSection />
    </div>
  );
}
