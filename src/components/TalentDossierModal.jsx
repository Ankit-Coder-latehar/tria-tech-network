import React from 'react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Star, Award, Code, Building, MapPin, Clock } from 'lucide-react';

export default function TalentDossierModal({ engineer, isOpen, onClose, onHire }) {
  if (!isOpen || !engineer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl border border-emerald-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Engineer Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-slate-100 pb-6 mb-6">
          <div className="relative">
            <img
              src={engineer.image}
              alt={engineer.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-emerald-400 shadow-md"
            />
            <span className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500 text-white shadow-sm">
              VERIFIED
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold text-slate-400">{engineer.id}</span>
              <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                {engineer.status}
              </span>
            </div>
            <h3 className="text-2xl font-display font-black text-slate-900">{engineer.name}</h3>
            <p className="text-sm font-semibold text-emerald-700">{engineer.role}</p>
            <div className="flex items-center space-x-4 text-xs text-slate-500 font-mono pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                {engineer.locationSync}
              </span>
              <span>&bull;</span>
              <span>{engineer.yoe}</span>
            </div>
          </div>
        </div>

        {/* Audit Scores Breakdown Grid */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
            TriaScreen™ 5-Stage Live Audit Telemetry
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
              <span className="text-xs text-slate-500 block mb-1">Algorithmic</span>
              <span className="text-lg font-black font-display text-emerald-700">{engineer.auditScores.algorithms}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
              <span className="text-xs text-slate-500 block mb-1">Architecture</span>
              <span className="text-lg font-black font-display text-emerald-700">{engineer.auditScores.architecture}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
              <span className="text-xs text-slate-500 block mb-1">Code Health</span>
              <span className="text-lg font-black font-display text-emerald-700">{engineer.auditScores.codeCleanliness}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
              <span className="text-xs text-slate-500 block mb-1">Communication</span>
              <span className="text-xs font-bold font-mono text-emerald-700 mt-1 block">{engineer.auditScores.communication}</span>
            </div>
          </div>
        </div>

        {/* Executive Bio & Highlights */}
        <div className="space-y-4 mb-6 text-sm text-slate-700 leading-relaxed">
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Technical Background
            </h4>
            <p className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-slate-700 text-xs sm:text-sm">
              {engineer.dossier.bio}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
              Verified Sprint Achievements
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {engineer.dossier.highlights.map((h, i) => (
                <li key={i} className="flex items-start space-x-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold mt-0.5 flex-shrink-0">
                    ✓
                  </div>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Past Companies */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
              Past Engineering Pedigree
            </h4>
            <div className="flex flex-wrap gap-2">
              {engineer.pastCompanies.map((c, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-mono font-semibold border border-emerald-200">
                  🏛️ {c}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {engineer.skills.map((s) => (
                <span key={s} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-mono font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
              Deployment Benchmark Rate
            </span>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-xl font-bold text-slate-900 font-mono">{engineer.benchmarkRate}</span>
              <span className="text-xs text-slate-500">{engineer.benchmarkSub}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-3 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors w-full sm:w-auto text-center"
            >
              Back to Roster
            </button>
            <button
              onClick={() => {
                onClose();
                onHire({ prefillEngineer: engineer.name, prefillRole: engineer.role });
              }}
              className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center justify-center space-x-2 shadow-sm w-full sm:w-auto"
            >
              <span>Instant Interview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
