import React from 'react';
import { ShieldCheck, Target, Award, Globe, Users, CheckCircle2, ArrowRight, Building2, MapPin, Clock, FileCheck } from 'lucide-react';
import VettingEngine from '../components/VettingEngine';
import FinalCta from '../components/FinalCta';

export default function AboutPage({ onOpenHireModal }) {
  return (
    <div className="pt-8 pb-20">
      {/* About Page Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-emerald-50/40 via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span>About TriaTechNetwork</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Bridging Silicon Valley Velocity with <span className="text-gradient-emerald">Dubai Visionary Expansion</span>.
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Founded by veteran tech leaders, TriaTechNetwork connects hyper-growth US companies and UAE enterprises with the top 1% of pre-screened software engineers — deployable into active sprints in under 48 hours.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-16 bg-white border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 text-slate-700 leading-relaxed">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                The Problem We Solved
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
                Traditional Tech Recruiting Was Fundamentally Broken.
              </h2>
              <p className="text-sm sm:text-base">
                In Silicon Valley, hiring a single senior staff engineer takes an average of <strong>84 days</strong>, costs $25,000+ in recruiter finder fees, and commands an annual salary exceeding $240,000. In Dubai, companies face 60-day notice periods, complex visa sponsorships, and local expat shortages.
              </p>
              <p className="text-sm sm:text-base">
                TriaTechNetwork built a high-throughput, cross-border conduit. We pre-vet over 22,000 global engineers annually through our 5-stage live auditing protocol. When your company needs an AI engineer, a distributed systems architect, or a full-stack squad, we deploy battle-tested talent within <strong>48 hours</strong>.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenHireModal()}
                  className="px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center space-x-2 text-sm shadow-sm"
                >
                  <span>Deploy Top 1% Engineers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-emerald-200">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                  alt="TriaTechNetwork Engineering Architecture"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 text-white">
                  <div>
                    <span className="text-xs font-mono font-bold text-mint-300">DUAL-JURISDICTION CONDUIT</span>
                    <h3 className="text-lg font-bold font-display">Delaware C-Corp &amp; Dubai DIFC Standard</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Headquarters Deep Dive */}
      <section className="py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900">
              Dual Global Headquarters
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Strategically situated in the world's most dynamic capital markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* San Francisco HQ */}
            <div className="bg-white rounded-3xl overflow-hidden border border-emerald-200 shadow-md">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"
                  alt="San Francisco Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-6 text-white">
                  <div>
                    <span className="text-[10px] font-mono font-bold bg-emerald-500 text-slate-950 px-2 py-0.5 rounded">
                      US HEADQUARTERS
                    </span>
                    <h3 className="text-xl font-bold font-display mt-1">San Francisco, California</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-3 text-xs sm:text-sm text-slate-600 font-mono">
                <p><strong>Address:</strong> 548 Market St, Suite 72401, San Francisco, CA 94104</p>
                <p><strong>Jurisdiction:</strong> Delaware Registered &bull; W-8BEN Standard &bull; US IP Assignment</p>
                <p><strong>Coverage:</strong> PST / MST / CST / EST Synchronous Overlap</p>
              </div>
            </div>

            {/* Dubai DIFC HQ */}
            <div className="bg-white rounded-3xl overflow-hidden border border-emerald-200 shadow-md">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                  alt="Dubai DIFC Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-6 text-white">
                  <div>
                    <span className="text-[10px] font-mono font-bold bg-mint-400 text-emerald-950 px-2 py-0.5 rounded">
                      MENA HEADQUARTERS
                    </span>
                    <h3 className="text-xl font-bold font-display mt-1">DIFC, Dubai UAE</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-3 text-xs sm:text-sm text-slate-600 font-mono">
                <p><strong>Address:</strong> Gate Precinct 4, DIFC, Dubai UAE</p>
                <p><strong>Jurisdiction:</strong> DIFC License #CL-4820 &bull; UAE Central Bank Standards</p>
                <p><strong>Coverage:</strong> Gulf Standard Time (GST) &bull; Zero Visa Friction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vetting Engine Embedded */}
      <VettingEngine />

      {/* Final CTA */}
      <FinalCta onOpenHireModal={onOpenHireModal} />
    </div>
  );
}
