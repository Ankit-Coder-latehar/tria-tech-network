import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ShieldCheck, Zap, Clock, Users, CheckCircle2, ChevronRight, Activity, Star, Sparkles, Award } from 'lucide-react';
import { TALENT_ROSTER } from '../data/talentData';

export default function Hero({ onOpenHireModal }) {
  const [clocks, setClocks] = useState({
    sf: '--:--:--',
    ny: '--:--:--',
    dubai: '--:--:--'
  });

  const heroRef = useRef(null);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const timeOpts = {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };

      try {
        setClocks({
          sf: new Intl.DateTimeFormat('en-US', { ...timeOpts, timeZone: 'America/Los_Angeles' }).format(now),
          ny: new Intl.DateTimeFormat('en-US', { ...timeOpts, timeZone: 'America/New_York' }).format(now),
          dubai: new Intl.DateTimeFormat('en-US', { ...timeOpts, timeZone: 'Asia/Dubai' }).format(now)
        });
      } catch (err) {
        console.error('Timezone format error', err);
      }
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-pill',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
      )
        .fromTo(
          '.hero-heading-line',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
          '-=0.4'
        )
        .fromTo(
          '.hero-sub',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.hero-cta-btns',
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          '.hero-social-proof',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.2'
        )
        .fromTo(
          '.hero-visual-card',
          { opacity: 0, x: 40, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          '.hero-trust-metric',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          '.hero-world-clock',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.2'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-10 pb-20 sm:pt-14 sm:pb-28 overflow-hidden">
      {/* Background Soft Mesh Glows (White-and-Green) */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[700px] h-[450px] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-32 right-10 w-[450px] h-[400px] bg-teal-100/45 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-[350px] h-[300px] bg-mint-100/60 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Hero: Left Side Text, Right Side Picture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Left Column: Left-Aligned Text Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Hologram / Pill Tag */}
            <div className="hero-pill inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white/95 border border-emerald-500/25 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-mono font-bold tracking-wider text-emerald-800 uppercase">
                Silicon Valley Velocity &times; Dubai Visionary Expansion
              </span>
            </div>

            {/* Hero Main Headline */}
            <h1 className="hero-heading-line font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Deploy the <span className="text-gradient-emerald underline decoration-emerald-300 decoration-wavy decoration-2">Top 1% Global Tech Talent</span> into US &amp; Dubai Powerhouses.
            </h1>

            {/* Hero Subtitle */}
            <p className="hero-sub text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Bypass months of tedious recruiting. TriaTechNetwork rigorously pre-vets elite software architects, AI engineers, and full-stack wizards ready to join your sprint in <strong>under 48 hours</strong> — fully compliant with <span className="text-emerald-800 font-semibold">US Delaware</span> and <span className="text-emerald-800 font-semibold">Dubai DIFC</span> corporate standards.
            </p>

            {/* Call to Actions */}
            <div className="hero-cta-btns pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenHireModal()}
                className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-[0_10px_25px_-5px_rgba(16,185,129,0.35)] hover:shadow-green-glow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Deploy Engineers in 48h</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#talent-roster"
                className="px-7 py-4 text-base font-semibold text-slate-800 bg-white hover:bg-emerald-50/60 border border-slate-200 hover:border-emerald-300 rounded-xl shadow-sm transition-all flex items-center justify-center space-x-2"
              >
                <span>Browse Pre-Vetted Talent</span>
                <span className="px-2 py-0.5 text-xs font-mono font-bold bg-emerald-100 text-emerald-800 rounded-full">
                  18 Live
                </span>
              </a>
            </div>

            {/* Live Social Proof Stack with Engineer Portraits */}
            <div className="hero-social-proof pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs font-mono text-slate-600">
              <div className="flex -space-x-2.5 overflow-hidden">
                {TALENT_ROSTER.slice(0, 5).map((eng) => (
                  <img
                    key={eng.id}
                    src={eng.image}
                    alt={eng.name}
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm"
                    title={`${eng.name} (${eng.role})`}
                  />
                ))}
              </div>
              <div className="flex items-center space-x-2 flex-wrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-semibold text-slate-800">18 Engineers Ready For Sprint</span>
                <span className="text-slate-400">&bull;</span>
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold ml-1 text-slate-800">4.98/5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Picture & Telemetry Card */}
          <div className="lg:col-span-5 relative">
            <div className="hero-visual-card relative rounded-3xl overflow-hidden border border-emerald-200/90 shadow-2xl bg-white group">
              {/* Main Picture */}
              <div className="relative h-[430px] sm:h-[480px] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Elite Engineering Squad Sprinting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
              </div>

              {/* Floating Badge 1: Top-Left Sprint Matching */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-emerald-200 shadow-lg flex items-center space-x-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div className="text-left">
                  <span className="text-[10px] font-mono text-slate-400 block font-bold leading-none">DEPLOYMENT</span>
                  <span className="text-xs font-mono font-bold text-slate-900">&lt; 48h Sprint Matching</span>
                </div>
              </div>

              {/* Floating Badge 2: Top-Right TriaScreen Vetted */}
              <div className="absolute top-5 right-5 bg-emerald-900/90 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-emerald-500/40 text-white shadow-lg flex items-center space-x-1.5">
                <Award className="w-3.5 h-3.5 text-mint-400" />
                <span className="text-[11px] font-mono font-bold text-mint-300">1.4% Selected</span>
              </div>

              {/* Card Bottom Overlay: Active Engineers & Compliance */}
              <div className="absolute bottom-5 left-5 right-5 space-y-3">
                <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700/80 text-white shadow-xl text-left">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono font-bold text-emerald-400">TRIA-CONDUIT™</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                        LIVE RADAR
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-300">PST &bull; EST &bull; GST</span>
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Zero visa delays. Pre-screened Delaware &amp; DIFC compliance with 14-day money-back guarantee.
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-emerald-400 font-semibold">18 Engineers Synced</span>
                    <button
                      onClick={() => onOpenHireModal()}
                      className="text-white hover:text-mint-300 font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>Connect Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Accent Ring behind picture */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10" />
          </div>
        </div>

        {/* Trust Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          <div className="hero-trust-metric glass-card glass-card-hover p-5 rounded-2xl text-left border border-emerald-100">
            <div className="text-2xl sm:text-3xl font-display font-black text-emerald-700">99.4%</div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Placement Retention Rate</div>
          </div>
          <div className="hero-trust-metric glass-card glass-card-hover p-5 rounded-2xl text-left border border-emerald-100">
            <div className="text-2xl sm:text-3xl font-display font-black text-emerald-700">&lt; 48 Hours</div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Match-to-Sprint Speed</div>
          </div>
          <div className="hero-trust-metric glass-card glass-card-hover p-5 rounded-2xl text-left border border-emerald-100">
            <div className="text-2xl sm:text-3xl font-display font-black text-emerald-700">1.4% Pass</div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">TriaScreen™ Acceptance</div>
          </div>
          <div className="hero-trust-metric glass-card glass-card-hover p-5 rounded-2xl text-left border border-emerald-100">
            <div className="text-2xl sm:text-3xl font-display font-black text-emerald-700">14-Day</div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">100% Zero-Risk Trial</div>
          </div>
        </div>

        {/* Interactive Global Radar & World Clocks */}
        <div className="hero-world-clock mt-8 max-w-7xl mx-auto glass-card rounded-2xl p-5 border border-emerald-200/70 shadow-sm bg-gradient-to-r from-white/95 via-emerald-50/30 to-white/95">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-emerald-100 pb-4 mb-4">
            <div className="flex items-center space-x-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-900 uppercase">
                Global Radar Synchronization &bull; Timezone Overlap Live
              </span>
            </div>
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-600" />
              <span>Guaranteed 4-6h Daily Overlap</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="bg-white/80 p-3.5 rounded-xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="text-[11px] font-semibold text-slate-500 block">San Francisco (PST)</span>
              <span className="text-lg font-mono font-bold text-slate-900 block my-0.5">{clocks.sf}</span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                US West Hub
              </span>
            </div>

            <div className="bg-white/80 p-3.5 rounded-xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="text-[11px] font-semibold text-slate-500 block">New York (EST)</span>
              <span className="text-lg font-mono font-bold text-slate-900 block my-0.5">{clocks.ny}</span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                US East Hub
              </span>
            </div>

            <div className="bg-white/80 p-3.5 rounded-xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="text-[11px] font-semibold text-slate-500 block">Dubai (GST)</span>
              <span className="text-lg font-mono font-bold text-slate-900 block my-0.5">{clocks.dubai}</span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                MENA Tech Hub
              </span>
            </div>

            <div className="bg-emerald-900 text-white p-3.5 rounded-xl border border-emerald-800 shadow-sm">
              <span className="text-[11px] font-semibold text-emerald-200 block">Active Pipeline</span>
              <span className="text-lg font-mono font-bold text-mint-400 block my-0.5">100% Synced</span>
              <span className="text-[10px] font-bold text-emerald-950 bg-mint-400 px-2 py-0.5 rounded-full inline-block">
                Zero Friction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
