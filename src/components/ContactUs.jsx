import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2, Send } from 'lucide-react';

export default function ContactUs({ onShowToast }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    market: 'us',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onShowToast) {
      onShowToast(`Thank you, ${formData.name}! Our placement director will reach out within 15 minutes.`);
    }
  };

  return (
    <section id="contact-us" className="py-20 sm:py-28 relative bg-white border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Executive Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
            Connect With Our <span className="text-gradient-emerald">Talent Matching</span> Team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Whether you are expanding from Silicon Valley or launching an initiative in Dubai DIFC, we are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Contact Form Column */}
          <div className="lg:col-span-7 bg-slate-50/70 p-7 sm:p-10 rounded-3xl border border-emerald-100/90 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Julian Vance"
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. ApexAI Labs"
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                      Executive Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="julian@apexai.com"
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                      Primary Operating Market
                    </label>
                    <select
                      value={formData.market}
                      onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="us">🇺🇸 United States (Delaware Law / PST-EST)</option>
                      <option value="dubai">🇦🇪 Dubai &amp; UAE (DIFC Standard / GST)</option>
                      <option value="global">🌍 UK / Europe / Other Global</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                    How can our engineering network support your roadmap? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the roles, seniority, tech stack, and ideal sprint start date..."
                    className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center justify-center space-x-2 text-sm shadow-md"
                  >
                    <span>Send Message to Placement Director</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-display font-extrabold text-slate-900">Message Received</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our Head of Placement has received your message and will reply to <strong>{formData.email}</strong> within 15 minutes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right Office Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* San Francisco Card */}
            <div className="glass-card p-6 rounded-3xl border border-emerald-100/90 bg-white">
              <div className="flex items-center space-x-2.5 mb-3">
                <span className="text-2xl">🇺🇸</span>
                <div>
                  <h4 className="font-display font-extrabold text-base text-slate-900">San Francisco Hub</h4>
                  <span className="text-xs font-mono text-slate-400">Delaware Incorporation #7184920</span>
                </div>
              </div>
              <div className="text-xs text-slate-600 space-y-1.5 font-mono">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>548 Market St, Suite 72401, San Francisco, CA 94104</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Mon - Fri: 08:00 - 19:00 PST</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <a href="mailto:us@triatechnetwork.com" className="text-emerald-700 underline">us@triatechnetwork.com</a>
                </p>
              </div>
            </div>

            {/* Dubai DIFC Card */}
            <div className="glass-card p-6 rounded-3xl border border-emerald-100/90 bg-white">
              <div className="flex items-center space-x-2.5 mb-3">
                <span className="text-2xl">🇦🇪</span>
                <div>
                  <h4 className="font-display font-extrabold text-base text-slate-900">Dubai DIFC Hub</h4>
                  <span className="text-xs font-mono text-slate-400">DIFC License #CL-4820</span>
                </div>
              </div>
              <div className="text-xs text-slate-600 space-y-1.5 font-mono">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Gate Precinct 4, Level 3, DIFC, Dubai UAE</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Sun - Thu: 09:00 - 18:00 GST</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <a href="mailto:dubai@triatechnetwork.com" className="text-emerald-700 underline">dubai@triatechnetwork.com</a>
                </p>
              </div>
            </div>

            {/* Direct Executive Support Note */}
            <div className="p-5 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl border border-emerald-800 shadow-md">
              <div className="flex items-center space-x-2 text-mint-400 text-xs font-mono font-bold mb-1">
                <Clock className="w-4 h-4" />
                <span>RAPID ESCALATION</span>
              </div>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                Need immediate same-day engineer placement for emergency incident response or critical regulatory sprints? Reach our direct placement desk at <a href="mailto:partners@triatechnetwork.com" className="underline font-semibold text-white">partners@triatechnetwork.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
