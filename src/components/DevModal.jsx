import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

export default function DevModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [devData, setDevData] = useState({
    name: '',
    email: '',
    stack: '',
    yoe: '5-7',
    github: '',
    linkedin: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10b981', '#059669', '#34d399']
      });
    } catch (e) {}
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl border border-emerald-200/90 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-4">
              <span>Apply as Talent</span>
            </div>
            <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-1">
              Join the Top 1% Global Engineering Roster
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Work with Tier-1 US &amp; Dubai tech leaders. Earn competitive Silicon Valley rates from anywhere with reliable long-term contracts.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={devData.name}
                    onChange={(e) => setDevData({ ...devData, name: e.target.value })}
                    placeholder="Alex Rivera"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={devData.email}
                    onChange={(e) => setDevData({ ...devData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Primary Stack *</label>
                  <input
                    type="text"
                    required
                    value={devData.stack}
                    onChange={(e) => setDevData({ ...devData, stack: e.target.value })}
                    placeholder="Python, PyTorch, FastAPI"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Experience *</label>
                  <select
                    value={devData.yoe}
                    onChange={(e) => setDevData({ ...devData, yoe: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="5-7">5 - 7 Years (Senior)</option>
                    <option value="8-10">8 - 10 Years (Staff)</option>
                    <option value="10+">10+ Years (Principal / Lead)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 mb-1">GitHub / Portfolio URL *</label>
                <input
                  type="url"
                  required
                  value={devData.github}
                  onChange={(e) => setDevData({ ...devData, github: e.target.value })}
                  placeholder="https://github.com/yourhandle"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 mb-1">LinkedIn Profile</label>
                <input
                  type="url"
                  value={devData.linkedin}
                  onChange={(e) => setDevData({ ...devData, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center justify-center space-x-2 text-sm shadow-md"
                >
                  <span>Submit Application for TriaScreen™</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-display font-black text-slate-900">
              Application Submitted
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              If your background meets our algorithmic threshold, our team will invite you to the <strong>Stage 1 Cognitive Challenge</strong> within 48 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-3 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
