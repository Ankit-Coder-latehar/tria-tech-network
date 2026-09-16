import React from 'react';
import Services from '../components/Services';
import FinalCta from '../components/FinalCta';
import { ArrowRight, CheckCircle2, Shield, Zap, Clock, Code2, Users, Cpu } from 'lucide-react';

export default function ServicesPage({ onOpenHireModal }) {
  return (
    <div className="pt-8 pb-20">
      {/* Services Page Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-emerald-50/40 via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span>Specialized Engineering Practices</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Full-Spectrum <span className="text-gradient-emerald">Engineering Capabilities</span>.
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From autonomous AI agents and ultra-low latency fintech engines to multi-region cloud migrations and complete dedicated engineering squads.
          </p>
        </div>
      </section>

      {/* Main Interactive Services Component */}
      <Services onOpenHireModal={onOpenHireModal} />

      {/* 4-Step Rapid Deployment Protocol */}
      <section className="py-20 bg-white border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              Velocity Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 mt-2">
              From Requirement to Production Commit in 48 Hours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
              <span className="text-2xl font-mono font-black text-emerald-600 mb-2 block">01</span>
              <h3 className="font-display font-bold text-base text-slate-900 mb-2">Requirement Sync (15 min)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect with our Technical Placement Director to define your tech stack, seniority, timezone overlap, and sprint start date.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
              <span className="text-2xl font-mono font-black text-emerald-600 mb-2 block">02</span>
              <h3 className="font-display font-bold text-base text-slate-900 mb-2">Candidate Dossiers (24h)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive 2-3 matched profiles with live TriaScreen™ audit telemetry, GitHub repositories, and past enterprise project histories.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
              <span className="text-2xl font-mono font-black text-emerald-600 mb-2 block">03</span>
              <h3 className="font-display font-bold text-base text-slate-900 mb-2">Direct Interview (Same Day)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Host a 30-minute technical or cultural sync with the candidate. Validate chemistry and architecture alignment.
              </p>
            </div>

            <div className="bg-emerald-900 text-white p-6 rounded-2xl border border-emerald-800 relative">
              <span className="text-2xl font-mono font-black text-mint-400 mb-2 block">04</span>
              <h3 className="font-display font-bold text-base text-white mb-2">Sprint Kickoff (Day 2-3)</h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Engineer embeds directly into your Slack, Jira, and GitHub. 14-day 100% risk-free trial automatically begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta onOpenHireModal={onOpenHireModal} />
    </div>
  );
}
