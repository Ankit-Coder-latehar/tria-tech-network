import React from 'react';

export default function PartnerMarquee() {
  const partners = [
    { label: 'SILICON VALLEY AI LABS', icon: '⚡' },
    { label: 'DIFC FINTECH VENTURES', icon: '🏛️' },
    { label: 'AUSTIN CLOUD PLATFORMS', icon: '🚀' },
    { label: 'EMIRATES DIGITAL GROUP', icon: '🏢' },
    { label: 'NYC CYBER DEFENSE', icon: '🛡️' },
    { label: 'DUBAI SILICON OASIS INC', icon: '🌐' },
    { label: 'DELAWARE TECH HOLDINGS', icon: '⚖️' },
    { label: 'MENA HIGH-VELOCITY AI', icon: '✨' }
  ];

  const doublePartners = [...partners, ...partners];

  return (
    <section className="py-8 bg-slate-50/70 border-y border-emerald-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <p className="text-[11px] font-mono uppercase tracking-widest text-emerald-800 font-bold">
          Trusted by Tech Leaders, Venture-Backed Startups &amp; GCC Conglomerates
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {doublePartners.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center space-x-2.5 mx-6 px-4 py-2 rounded-xl bg-white border border-emerald-200/60 shadow-sm text-xs font-mono font-semibold text-slate-800 hover:border-emerald-400 transition-colors"
            >
              <span className="text-base">{item.icon}</span>
              <span className="tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
