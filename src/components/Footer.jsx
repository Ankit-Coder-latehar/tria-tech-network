import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Mail, Globe, MapPin } from 'lucide-react';

export default function Footer({ onOpenDevModal, onShowToast }) {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;
    onShowToast(`Subscribed ${email} to Global Tech Pulse!`);
    setEmail('');
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Office Hubs */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-mint-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                  <span className="text-emerald-400 font-black text-base">▲</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tight text-white">
                  TRIA<span className="text-emerald-400">TECH</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase font-bold -mt-1">
                  NETWORK
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier engineering conduit connecting hyper-growth enterprises across the United States and Dubai with pre-vetted top 1% global software talent.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center space-x-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                <span className="text-base">🇺🇸</span>
                <span><strong>San Francisco:</strong> 548 Market St, Suite 72401, CA</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
                <span className="text-base">🇦🇪</span>
                <span><strong>Dubai:</strong> Gate Precinct 4, DIFC, Dubai UAE</span>
              </div>
            </div>
          </div>

          {/* Col 2: Markets & Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home Landing</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Engineering Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Executive Contact</Link></li>
              <li><Link to="/#talent-roster" className="hover:text-white transition-colors">Vetted Roster</Link></li>
              <li><Link to="/#roi-calculator" className="hover:text-white transition-colors">ROI Calculator</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/#case-studies" className="hover:text-white transition-colors">Client Case Studies</Link></li>
              <li><Link to="/#faq" className="hover:text-white transition-colors">Legal Compliance &amp; IP</Link></li>
              <li>
                <button onClick={onOpenDevModal} className="hover:text-white transition-colors text-left">
                  Apply as Developer
                </button>
              </li>
              <li><a href="mailto:partners@triatechnetwork.com" className="hover:text-white transition-colors">Executive Inquiries</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Global Tech Pulse
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get our bi-weekly engineering talent index comparing US &amp; Dubai compensation benchmarks and emerging tech stacks.
            </p>

            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter executive email..."
                required
                className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 w-full"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center justify-center flex-shrink-0"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1.5">
              <span>🔒 SOC2 Type II Certified &bull; GDPR &amp; DIFC Compliant</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} TriaTechNetwork Inc. All rights reserved. Delaware (US) &amp; DIFC (Dubai, UAE).</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Engagement</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Security &amp; IP Protection</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
