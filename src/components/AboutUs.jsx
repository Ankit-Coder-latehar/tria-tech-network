import React from 'react';
import { ShieldCheck, Target, Award, Globe, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutUs({ onOpenHireModal }) {
  return (
    <section id="about-us" className="py-20 sm:py-28 relative bg-white overflow-hidden border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Our Founding Vision</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
            The Delaware &amp; Dubai <span className="text-gradient-emerald">Engineering Conduit</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            TriaTechNetwork was established to solve a singular crisis: fast-scaling US tech ventures and visionary Dubai enterprises were bottlenecked by 3 to 4 month recruitment cycles and astronomical domestic overhead.
          </p>
        </div>

        {/* Narrative & Dual HQ Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-5 text-slate-700 leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
              Silicon Valley Engineering Caliber Delivered in Under 48 Hours.
            </h3>
            <p className="text-sm sm:text-base">
              We operate at the nexus of the world's two most ambitious technology epicenters: the rapid iterative product velocity of <strong>Silicon Valley (Delaware C-Corp framework)</strong> and the limitless digital horizon of the <strong>UAE (Dubai DIFC jurisdiction)</strong>.
            </p>
            <p className="text-sm sm:text-base">
              Unlike generic freelance platforms or slow legacy staffing agencies that merely keyword-match resumes, every single developer on our roster has undergone our 5-Stage <strong>TriaScreen™</strong> protocol — evaluated live by former FAANG and DeepMind architects.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3 text-xs font-mono">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <span className="text-2xl font-display font-black text-emerald-700 block">22,000+</span>
                <span className="text-slate-500 font-semibold">Annual Global Applicants</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <span className="text-2xl font-display font-black text-emerald-700 block">1.4%</span>
                <span className="text-slate-500 font-semibold">Accepted to Roster</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenHireModal()}
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center space-x-2 text-sm shadow-sm"
              >
                <span>Partner With Our Network</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dual Offices Visual Card */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden border border-emerald-100 shadow-md bg-white">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80"
                  alt="San Francisco Headquarters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[10px] font-mono bg-emerald-500 text-slate-950 px-2 py-0.5 rounded font-bold">
                      US HEADQUARTERS
                    </span>
                    <h4 className="text-sm font-bold font-display mt-1">San Francisco, California</h4>
                  </div>
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600 space-y-1">
                <p><strong>Address:</strong> 548 Market St, Suite 72401, CA</p>
                <p><strong>Legal:</strong> Delaware C-Corp &bull; US IP Assignment</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-emerald-100 shadow-md bg-white">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
                  alt="Dubai DIFC Headquarters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[10px] font-mono bg-mint-400 text-emerald-950 px-2 py-0.5 rounded font-bold">
                      MENA HEADQUARTERS
                    </span>
                    <h4 className="text-sm font-bold font-display mt-1">DIFC, Dubai UAE</h4>
                  </div>
                </div>
              </div>
              <div className="p-4 text-xs text-slate-600 space-y-1">
                <p><strong>Address:</strong> Gate Precinct 4, DIFC, Dubai</p>
                <p><strong>Legal:</strong> DIFC Standard &bull; Zero Visa Friction</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card glass-card-hover p-6 rounded-3xl border border-emerald-100 bg-slate-50/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
              🛡️
            </div>
            <h4 className="font-display font-extrabold text-lg text-slate-900 mb-2">14-Day Zero-Risk Trial</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every deployment begins with a two-week zero-risk trial. If the engineer does not exceed your benchmark, you pay $0 and we replace them instantly.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-6 rounded-3xl border border-emerald-100 bg-slate-50/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
              ⚡
            </div>
            <h4 className="font-display font-extrabold text-lg text-slate-900 mb-2">48-Hour Sprint Matching</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No endless interview loops. We handpick 2-3 audited candidates matching your exact tech stack and timezone who can commit production code by Day 2.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-6 rounded-3xl border border-emerald-100 bg-slate-50/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
              📑
            </div>
            <h4 className="font-display font-extrabold text-lg text-slate-900 mb-2">100% IP &amp; Legal Protection</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Full legal compliance under Delaware (US) or DIFC (Dubai) jurisdictions with comprehensive NDA, invention assignment, and simple direct vendor billing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
