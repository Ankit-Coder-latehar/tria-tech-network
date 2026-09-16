import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Shield, Zap, DollarSign, Award, Clock, MapPin } from 'lucide-react';

export default function DualHubs({ onOpenHireModal }) {
  const [activeTab, setActiveTab] = useState('us');
  const [simulatedHour, setSimulatedHour] = useState(10); // 10 AM PST

  // Computed times based on simulated hour (PST)
  // PST = base, EST = base + 3, Dubai GST = base + 12
  const pstHour = simulatedHour;
  const estHour = (simulatedHour + 3) % 24;
  const gstHour = (simulatedHour + 12) % 24;

  const formatHour = (h) => {
    const period = h >= 12 ? 'PM' : 'AM';
    const displayH = h % 12 === 0 ? 12 : h % 12;
    return `${displayH}:00 ${period}`;
  };

  const isOverlap = (pstHour >= 6 && pstHour <= 14); // 6am to 2pm PST overlaps with Dubai late afternoon/evening

  return (
    <section id="dual-hubs" className="py-20 sm:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Tailored Powerhouse Hubs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
            Engineered Specifically for <span className="text-gradient-emerald">US &amp; Dubai</span> Markets
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We understand the exact legal frameworks, operational velocity, and engineering demands of both high-growth US tech companies and Dubai's ambitious digital frontier.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('us')}
              className={`flex items-center space-x-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeTab === 'us'
                  ? 'bg-white text-emerald-900 shadow-md border border-emerald-100'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="text-lg">🇺🇸</span>
              <span>United States Clients</span>
            </button>
            <button
              onClick={() => setActiveTab('dubai')}
              className={`flex items-center space-x-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeTab === 'dubai'
                  ? 'bg-white text-emerald-900 shadow-md border border-emerald-100'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="text-lg">🇦🇪</span>
              <span>Dubai &amp; UAE Clients</span>
            </button>
          </div>
        </div>

        {/* Tab Content: US Market */}
        {activeTab === 'us' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-emerald-50/40 via-white to-mint-50/30 p-6 sm:p-10 rounded-3xl border border-emerald-200/80 shadow-card-elevated">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wider">
                SILICON VALLEY &bull; NYC &bull; AUSTIN &bull; SEATTLE
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                US Market Advantage: Fast-Track Engineering Without Bay Area Overhead
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Hiring in San Francisco or NYC costs upwards of $240,000/yr per senior engineer with 90-day recruitment cycles. TriaTechNetwork supplies the same elite engineering caliber at a <strong>60% budget efficiency</strong>, embedded in your timezone.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</div>
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">Delaware &amp; US Legal Protection:</strong> Complete IP assignment, NDA coverage, and seamless W-8BEN/vendor invoicing.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</div>
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">4 to 8 Hours Timezone Overlap:</strong> Daily standups in PST, MST, or EST without synchronous delay.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</div>
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">Silicon Valley Velocity:</strong> Engineers proficient in production Next.js, PyTorch, Kubernetes, Go, and distributed cloud microservices.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</div>
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">Zero Employer Payroll Tax:</strong> Direct, frictionless monthly billing without HR or compliance burden.
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenHireModal({ location: 'us' })}
                  className="px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center space-x-2 shadow-sm"
                >
                  <span>Hire for US Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual & Benchmark Card with Real Silicon Valley Image */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-emerald-200">
                <img
                  src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"
                  alt="San Francisco Bay Area Tech Hub"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[10px] font-mono uppercase bg-emerald-500 text-slate-950 font-bold px-2 py-0.5 rounded">
                      US CORE HUB
                    </span>
                    <h4 className="text-sm font-bold font-display mt-1">San Francisco &bull; NYC &bull; Austin &bull; Seattle</h4>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="bg-white rounded-2xl border border-emerald-200/80 shadow-lg overflow-hidden">
                <div className="bg-slate-900 px-5 py-3.5 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-300 font-medium">US Enterprise Deployment Benchmark</span>
                </div>

                <div className="p-5 divide-y divide-slate-100 text-sm">
                  <div className="grid grid-cols-3 pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span>Metric</span>
                    <span>Domestic US Agency</span>
                    <span className="text-emerald-700 font-extrabold">TriaTechNetwork</span>
                  </div>

                  <div className="grid grid-cols-3 py-3 items-center">
                    <span className="font-semibold text-slate-800">Speed to First Hire</span>
                    <span className="text-slate-500">60 - 90 Days</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md inline-block">48 - 72 Hours</span>
                  </div>

                  <div className="grid grid-cols-3 py-3 items-center">
                    <span className="font-semibold text-slate-800">Annual Cost / Dev</span>
                    <span className="text-slate-500">$220k - $280k</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md inline-block">$85k - $115k</span>
                  </div>

                  <div className="grid grid-cols-3 py-3 items-center">
                    <span className="font-semibold text-slate-800">Trial Guarantee</span>
                    <span className="text-slate-500">None / Upfront Fee</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md inline-block">14-Day 100% Risk Free</span>
                  </div>

                  <div className="grid grid-cols-3 py-3 items-center">
                    <span className="font-semibold text-slate-800">Vetting Depth</span>
                    <span className="text-slate-500">Keyword Matching</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md inline-block">5-Stage Live Code Audit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Dubai Market */}
        {activeTab === 'dubai' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 p-6 sm:p-10 rounded-3xl border border-emerald-200/80 shadow-card-elevated">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wider">
                DIFC &bull; INTERNET CITY &bull; SILICON OASIS &bull; ABU DHABI
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                Dubai &amp; GCC Advantage: Visionary Scaling with Zero Visa Overhead
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Fuel your ambition for the UAE Digital Economy Strategy 2031. Whether you are building sovereign AI, Web3 protocols, or enterprise fintech, secure battle-tested software leaders on-demand without local sponsorship friction.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</div>
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">DIFC &amp; ADGM Standard Compliance:</strong> Fully aligned with UAE corporate laws, local currency (AED) or USD direct invoicing.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</div>
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">No Visa, Sponsorship, or Gratuity Friction:</strong> Onboard senior specialists immediately without bureaucratic wait times.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</div>
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">UAE Timezone Aligned (GST):</strong> Seamless full-day synchronization for regional government and banking schedules.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</div>
                  <div className="text-sm text-slate-700">
                    <strong className="text-slate-900">Relocation Ready / Golden Visa Pipeline:</strong> Option to transition star engineers on-site to Dubai when you expand physical offices.
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenHireModal({ location: 'dubai' })}
                  className="px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center space-x-2 shadow-sm"
                >
                  <span>Hire for Dubai Enterprise</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual & Benchmark Card with Real Dubai Architecture Image */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-emerald-200">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                  alt="Dubai DIFC Futuristic Skyline"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[10px] font-mono uppercase bg-mint-400 text-emerald-950 font-bold px-2 py-0.5 rounded">
                      GCC TECH HUB
                    </span>
                    <h4 className="text-sm font-bold font-display mt-1">Dubai DIFC &bull; Internet City &bull; Abu Dhabi Hub71</h4>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="bg-white rounded-2xl border border-emerald-200/80 shadow-lg overflow-hidden">
                <div className="bg-slate-900 px-5 py-3.5 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-300 font-medium">Dubai / GCC Market Deployment Comparison</span>
                </div>

                <div className="p-5 divide-y divide-slate-100 text-sm">
                  <div className="grid grid-cols-3 pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span>Metric</span>
                    <span>Local UAE Recruitment</span>
                    <span className="text-emerald-700 font-extrabold">TriaTechNetwork</span>
                  </div>

                  <div className="grid grid-cols-3 py-3 items-center">
                    <span className="font-semibold text-slate-800">Talent Pool Depth</span>
                    <span className="text-slate-500">Limited Expat Pool</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md inline-block">Global Top 1% Engineers</span>
                  </div>

                  <div className="grid grid-cols-3 py-3 items-center">
                    <span className="font-semibold text-slate-800">Onboarding Friction</span>
                    <span className="text-slate-500">Visa + Relocation + 45d</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md inline-block">Zero Visa Delays (Day 1 Sprint)</span>
                  </div>

                  <div className="grid grid-cols-3 py-3 items-center">
                    <span className="font-semibold text-slate-800">Tech Stack Caliber</span>
                    <span className="text-slate-500">Standard Generic Devs</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md inline-block">AI, High-Throughput &amp; Web3 Leads</span>
                  </div>

                  <div className="grid grid-cols-3 py-3 items-center">
                    <span className="font-semibold text-slate-800">Billing Currencies</span>
                    <span className="text-slate-500">Strict Local Accounts</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md inline-block">AED, USD, EUR Direct</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Live Timezone Overlap Simulator */}
        <div className="mt-12 bg-white rounded-3xl border border-emerald-200/90 p-6 sm:p-8 shadow-card-elevated">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                Interactive Telemetry
              </span>
              <h4 className="text-lg sm:text-xl font-display font-extrabold text-slate-900 mt-0.5">
                US &amp; Dubai Synchronous Overlap Simulator
              </h4>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
              isOverlap ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-slate-100 text-slate-600'
            }`}>
              {isOverlap ? '● LIVE SYNCHRONOUS OVERLAP ACTIVE' : '○ ASYNCHRONOUS HANDOFF WINDOW'}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-xs font-mono text-slate-500 mb-2">
              <span>Adjust Working Hour: <strong className="text-slate-900">{formatHour(pstHour)} (PST)</strong></span>
              <span className="text-emerald-700 font-semibold">Slide to test 24h clock synchronization</span>
            </div>
            <input
              type="range"
              min="0"
              max="23"
              value={simulatedHour}
              onChange={(e) => setSimulatedHour(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center space-x-2 text-slate-500 mb-1">
                <span>🇺🇸</span>
                <span className="font-semibold text-slate-800">San Francisco (PST)</span>
              </div>
              <div className="text-xl font-bold text-slate-900">{formatHour(pstHour)}</div>
              <span className="text-[10px] text-slate-400">Core US West Coast</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center space-x-2 text-slate-500 mb-1">
                <span>🇺🇸</span>
                <span className="font-semibold text-slate-800">New York (EST)</span>
              </div>
              <div className="text-xl font-bold text-slate-900">{formatHour(estHour)}</div>
              <span className="text-[10px] text-slate-400">Core US East Coast</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center space-x-2 text-slate-500 mb-1">
                <span>🇦🇪</span>
                <span className="font-semibold text-slate-800">Dubai (GST)</span>
              </div>
              <div className="text-xl font-bold text-emerald-700">{formatHour(gstHour)}</div>
              <span className="text-[10px] text-slate-400">DIFC / GCC Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
