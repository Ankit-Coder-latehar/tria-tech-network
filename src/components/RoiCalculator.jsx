import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Clock, ShieldCheck, Check, RefreshCw } from 'lucide-react';

export default function RoiCalculator({ onOpenHireModal }) {
  const [market, setMarket] = useState('us');
  const [teamSize, setTeamSize] = useState(3);
  const [seniority, setSeniority] = useState('senior');
  const [durationMonths, setDurationMonths] = useState(12);
  const [currency, setCurrency] = useState('USD');

  const currencies = {
    USD: { symbol: '$', rate: 1, label: 'USD ($)' },
    AED: { symbol: 'AED ', rate: 3.67, label: 'AED (د.إ)' },
    EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
    GBP: { symbol: '£', rate: 0.78, label: 'GBP (£)' }
  };

  const curr = currencies[currency];

  // Cost calculations in USD base
  let domesticAnnualCostUSD = 240000;
  let triaAnnualCostUSD = 100000;

  if (market === 'us') {
    if (seniority === 'mid') {
      domesticAnnualCostUSD = 175000;
      triaAnnualCostUSD = 75000;
    } else if (seniority === 'senior') {
      domesticAnnualCostUSD = 240000;
      triaAnnualCostUSD = 100000;
    } else if (seniority === 'lead') {
      domesticAnnualCostUSD = 310000;
      triaAnnualCostUSD = 128000;
    }
  } else {
    // Dubai / GCC market
    if (seniority === 'mid') {
      domesticAnnualCostUSD = 145000;
      triaAnnualCostUSD = 72000;
    } else if (seniority === 'senior') {
      domesticAnnualCostUSD = 195000;
      triaAnnualCostUSD = 92000;
    } else if (seniority === 'lead') {
      domesticAnnualCostUSD = 255000;
      triaAnnualCostUSD = 115000;
    }
  }

  const durationFactor = durationMonths / 12;
  const annualSavingsPerDevUSD = domesticAnnualCostUSD - triaAnnualCostUSD;
  const totalSavingsUSD = Math.round(annualSavingsPerDevUSD * teamSize * durationFactor);
  const totalSavingsConverted = Math.round(totalSavingsUSD * curr.rate);
  const daysSaved = 62;

  const formatCurrency = (val) => {
    return `${curr.symbol}${val.toLocaleString()}`;
  };

  return (
    <section id="roi-calculator" className="py-20 sm:py-28 relative bg-slate-50/70 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Financial &amp; Velocity Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
            Interactive <span className="text-gradient-emerald">Engineering ROI</span> Calculator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Calculate exactly how much capital and time your organization saves by partnering with TriaTechNetwork versus domestic recruiters.
          </p>
        </div>

        {/* Currency Switcher Bar */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-white border border-emerald-200 shadow-sm">
            {Object.keys(currencies).map((cKey) => (
              <button
                key={cKey}
                onClick={() => setCurrency(cKey)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  currency === cKey
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {currencies[cKey].label}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Main Grid */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-emerald-200/90 shadow-card-elevated overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Controls Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-7 border-b lg:border-b-0 lg:border-r border-slate-100">
              {/* Market Selection */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. Organization Base
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMarket('us')}
                    className={`py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center space-x-2 border transition-all ${
                      market === 'us'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span>🇺🇸 United States</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMarket('dubai')}
                    className={`py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center space-x-2 border transition-all ${
                      market === 'dubai'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span>🇦🇪 Dubai / GCC</span>
                  </button>
                </div>
              </div>

              {/* Slider: Engineers to Deploy */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    2. Engineers to Deploy
                  </label>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-900 font-mono font-bold text-sm rounded-lg">
                    {teamSize} {teamSize === 1 ? 'Engineer' : 'Engineers'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1 font-semibold">
                  <span>1 Dev</span>
                  <span>5 Devs</span>
                  <span>10 Devs</span>
                  <span>15+ Pod</span>
                </div>
              </div>

              {/* Seniority Tier */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  3. Target Seniority Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'mid', label: 'Mid (4-6y)' },
                    { id: 'senior', label: 'Senior (7-10y)' },
                    { id: 'lead', label: 'Staff/Lead (10y+)' }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSeniority(tier.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        seniority === tier.id
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Selector */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  4. Engagement Horizon
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDurationMonths(6)}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                      durationMonths === 6
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    6 Months Sprint
                  </button>
                  <button
                    type="button"
                    onClick={() => setDurationMonths(12)}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                      durationMonths === 12
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    12 Months (Full Year)
                  </button>
                </div>
              </div>
            </div>

            {/* Right Output Column */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-gradient-to-br from-emerald-900 via-forest-900 to-emerald-950 text-white flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-mint-400/20 text-mint-300 text-[10px] font-mono font-bold uppercase tracking-wider mb-6">
                  <span>Projected Client Benefit</span>
                </div>

                <div className="mb-6">
                  <span className="text-xs font-mono text-emerald-200 block uppercase tracking-wider">
                    Total Estimated Savings ({currency})
                  </span>
                  <div className="text-4xl sm:text-5xl font-display font-black text-white mt-1 text-gradient-emerald">
                    {formatCurrency(totalSavingsConverted)}
                  </div>
                  <p className="text-xs text-emerald-200/80 mt-1">
                    {market === 'us'
                      ? 'vs traditional US recruiters & Silicon Valley domestic salaries'
                      : 'vs Dubai local agency fees, visa sponsorships & severance liabilities'}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-emerald-800/80">
                  <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/50">
                    <span className="text-xl font-bold font-mono text-mint-400 block">{daysSaved} Days</span>
                    <span className="text-[11px] text-emerald-200">Recruiting Time Saved</span>
                  </div>
                  <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/50">
                    <span className="text-xl font-bold font-mono text-mint-400 block">48 Hours</span>
                    <span className="text-[11px] text-emerald-200">Speed to First Sprint</span>
                  </div>
                  <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/50">
                    <span className="text-xl font-bold font-mono text-mint-400 block">14 Days</span>
                    <span className="text-[11px] text-emerald-200">100% Free Trial</span>
                  </div>
                  <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/50">
                    <span className="text-xl font-bold font-mono text-mint-400 block">100%</span>
                    <span className="text-[11px] text-emerald-200">IP Code Ownership</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-emerald-800/80">
                <button
                  onClick={() => onOpenHireModal({ teamSize, market, seniority, currency })}
                  className="w-full py-4 rounded-xl font-bold text-emerald-950 bg-mint-400 hover:bg-mint-300 transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Lock In These Terms &amp; Hire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[11px] text-emerald-300/80 mt-2">
                  🔒 Zero upfront payment required &bull; 14-day trial applies automatically
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
