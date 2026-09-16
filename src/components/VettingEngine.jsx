import React, { useState } from 'react';
import { VETTING_STAGES } from '../data/talentData';
import { CheckCircle2, ShieldCheck, ChevronRight, Terminal, Cpu, GitPullRequest, MessageSquareCode, Award } from 'lucide-react';

export default function VettingEngine() {
  const [activeStep, setActiveStep] = useState(0);

  const stageIcons = [
    <Cpu className="w-5 h-5 text-emerald-600" />,
    <Terminal className="w-5 h-5 text-emerald-600" />,
    <GitPullRequest className="w-5 h-5 text-emerald-600" />,
    <MessageSquareCode className="w-5 h-5 text-emerald-600" />,
    <Award className="w-5 h-5 text-amber-500" />
  ];

  return (
    <section id="vetting-engine" className="py-20 sm:py-28 relative bg-slate-50/70 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Uncompromising Precision</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
            The 5-Stage <span className="text-gradient-emerald">TriaScreen™</span> Protocol
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Over 22,000 developers apply annually. Only <strong className="text-emerald-800">1.4% pass</strong> our brutal evaluation protocol before ever presenting their credentials to your team.
          </p>
        </div>

        {/* Vetting Stages Horizontal Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {VETTING_STAGES.map((stage, idx) => {
            const isSelected = activeStep === idx;
            const isFinal = idx === 4;

            return (
              <div
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer transition-all duration-300 rounded-2xl p-5 flex flex-col justify-between text-left relative ${
                  isSelected
                    ? isFinal
                      ? 'bg-gradient-to-b from-amber-50 to-white border-2 border-amber-400 shadow-lg scale-105 z-10'
                      : 'bg-white border-2 border-emerald-500 shadow-lg scale-105 z-10'
                    : 'bg-white/80 border border-slate-200 hover:border-emerald-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-black text-slate-400">
                      STAGE {stage.step}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isFinal ? 'bg-amber-100 text-amber-800' : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      {stage.funnel}
                    </span>
                  </div>

                  <div className="mb-3">{stageIcons[idx]}</div>

                  <h3 className="font-display font-bold text-base text-slate-900 mb-2 leading-snug">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-4">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold text-slate-500">
                    {stage.badge}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? (isFinal ? 'bg-amber-500' : 'bg-emerald-500') : 'bg-slate-300'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Stage Deep Dive Card */}
        <div className="mt-10 bg-white rounded-2xl border border-emerald-200 p-6 sm:p-8 shadow-card-elevated max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-sm">
                0{activeStep + 1}
              </div>
              <div>
                <h4 className="font-display font-black text-xl text-slate-900">
                  {VETTING_STAGES[activeStep].title}
                </h4>
                <span className="text-xs font-mono text-emerald-700 font-semibold">
                  Funnel Threshold: {VETTING_STAGES[activeStep].funnel} &bull; {VETTING_STAGES[activeStep].metric}
                </span>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-semibold">
              {VETTING_STAGES[activeStep].badge}
            </div>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {VETTING_STAGES[activeStep].desc}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-xs text-slate-600 font-mono">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-slate-400 block mb-1">EVALUATOR</span>
              <strong className="text-slate-800">Former FAANG / DeepMind Architects</strong>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-slate-400 block mb-1">PROCTORING</span>
              <strong className="text-slate-800">Live Synchronous Screen &amp; Code Review</strong>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="text-slate-400 block mb-1">GUARANTEE</span>
              <strong className="text-emerald-700">14-Day Free Replacement Warranty</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
