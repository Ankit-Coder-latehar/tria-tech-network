import React from 'react';
import { CASE_STUDIES } from '../data/talentData';
import { Quote, CheckCircle2, TrendingUp, Building2, MapPin } from 'lucide-react';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Proven Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
            How US &amp; Dubai Tech Leaders <span className="text-gradient-emerald">Scaled 3x Faster</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Read how high-caliber enterprises achieved faster time-to-market while slashing domestic overhead.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-emerald-100/90 bg-white flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Visual Header Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-4">
                    <div className="flex items-center justify-between w-full text-xs font-mono text-white">
                      <span className="font-semibold flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        {study.location}
                      </span>
                      <span className="bg-emerald-500/90 text-slate-950 font-bold px-2 py-0.5 rounded-full text-[10px]">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {study.summary}
                  </p>

                  {/* Metrics Stats Row */}
                  <div className="grid grid-cols-3 gap-2 py-3.5 border-y border-slate-100 mb-5">
                    {study.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="text-center">
                        <span className="text-base sm:text-lg font-black font-display text-emerald-700 block">
                          {stat.value}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative pl-3.5 italic text-xs sm:text-sm text-slate-700 mb-6 border-l-2 border-emerald-500">
                    "{study.quote}"
                  </div>
                </div>
              </div>

              {/* Author Row with Executive Image */}
              <div className="px-6 pb-6 pt-2 flex items-center space-x-3">
                <img
                  src={study.authorImage}
                  alt={study.author}
                  className="w-10 h-10 rounded-full object-cover border border-emerald-300 shadow-sm"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{study.author}</h4>
                  <p className="text-[11px] text-slate-500">{study.authorRole}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
