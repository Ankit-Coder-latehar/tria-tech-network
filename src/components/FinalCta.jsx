import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Clock, FileCheck } from 'lucide-react';

export default function FinalCta({ onOpenHireModal }) {
  return (
    <section className="py-20 sm:py-28 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-900 via-forest-900 to-emerald-950 text-white p-8 sm:p-16 text-center shadow-2xl overflow-hidden">
          {/* Ambient Glowing Circles */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-mint-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-mint-400/20 border border-mint-400/30 text-mint-300 text-xs font-mono font-bold uppercase tracking-wider">
              <span>Accelerate Your Roadmap</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
              Ready to Deploy World-Class Engineers into Your Next Sprint?
            </h2>

            <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Join hundreds of visionary tech firms in Silicon Valley, New York, and Dubai who scale with zero recruitment overhead.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenHireModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-emerald-950 bg-mint-400 hover:bg-mint-300 transition-all shadow-lg flex items-center justify-center space-x-2 group"
              >
                <span>Schedule 15-Min Talent Matching</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#talent-roster"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
              >
                View Available Profiles
              </a>
            </div>

            {/* Perks Row */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-emerald-200 border-t border-emerald-800/60 mt-8">
              <div className="flex items-center justify-center space-x-1.5">
                <span>🛡️ 14-Day Zero Risk</span>
              </div>
              <div className="flex items-center justify-center space-x-1.5">
                <span>⚡ 48-Hour Matching</span>
              </div>
              <div className="flex items-center justify-center space-x-1.5">
                <span>📑 Delaware &amp; DIFC Compliant</span>
              </div>
              <div className="flex items-center justify-center space-x-1.5">
                <span>🕒 4+ Hours Daily Sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
