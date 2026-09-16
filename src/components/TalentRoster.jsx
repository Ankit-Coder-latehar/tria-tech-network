import React, { useState } from 'react';
import { TALENT_ROSTER } from '../data/talentData';
import TalentDossierModal from './TalentDossierModal';
import { ArrowRight, Search, Clock, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

export default function TalentRoster({ onOpenHireModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEngineer, setSelectedEngineer] = useState(null);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'ai', label: 'AI / ML & LLM' },
    { id: 'fullstack', label: 'Full-Stack & Web' },
    { id: 'devops', label: 'Cloud & DevOps' },
    { id: 'fintech', label: 'Fintech & Web3' },
    { id: 'mobile', label: 'Mobile (iOS/Flutter)' }
  ];

  const filteredTalent = TALENT_ROSTER.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(q) ||
      item.role.toLowerCase().includes(q) ||
      item.skills.some((s) => s.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="talent-roster" className="py-20 sm:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Immediate Deployment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
            Featured <span className="text-gradient-emerald">Top 1% Engineers</span> Available Today
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Vetted, audited, and ready to join your Slack, Jira, and GitHub repositories within 48 hours.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech stack (e.g. PyTorch, Next.js, Kubernetes, Golang) or name..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-emerald-200/80 rounded-2xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400 hover:text-slate-700 bg-slate-200 px-2 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Talent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTalent.length > 0 ? (
            filteredTalent.map((dev) => (
              <div
                key={dev.id}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-emerald-100/90 bg-white shadow-sm group"
              >
                <div>
                  {/* Portrait + Name + Online badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center space-x-3.5">
                      <div className="relative">
                        <img
                          src={dev.image}
                          alt={dev.name}
                          className="w-14 h-14 rounded-2xl object-cover border-2 border-emerald-300 shadow-sm transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-base text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                          {dev.name}
                        </h3>
                        <p className="text-xs font-semibold text-emerald-700 font-sans">{dev.role}</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[10px] font-mono text-slate-400">{dev.pastCompanies[0]}</span>
                        </div>
                      </div>
                    </div>
                    <span className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      ● {dev.status}
                    </span>
                  </div>

                  {/* Location / Overlap Strip */}
                  <div className="flex items-center space-x-1.5 text-[11px] text-slate-500 font-mono mb-3 bg-slate-50 p-2 rounded-xl">
                    <Clock className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                    <span>{dev.locationSync}</span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {dev.summary}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {dev.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-slate-100 text-slate-700 group-hover:border-emerald-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                      {dev.yoe} &bull; Rate
                    </span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-base font-bold text-slate-900 font-mono">{dev.benchmarkRate}</span>
                      <span className="text-[10px] text-slate-500">{dev.benchmarkSub}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={() => setSelectedEngineer(dev)}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all flex items-center space-x-1"
                      title="View Full Audit Dossier"
                    >
                      <span>Dossier</span>
                    </button>
                    <button
                      onClick={() => onOpenHireModal({ prefillEngineer: dev.name, prefillRole: dev.role })}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center space-x-1 shadow-sm"
                    >
                      <span>Interview</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12 bg-slate-50 rounded-3xl border border-slate-200">
              <p className="text-sm font-semibold text-slate-600">No engineers found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Custom Squad Banner */}
        <div className="mt-14 bg-gradient-to-r from-emerald-900 via-forest-900 to-emerald-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-left">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
                Need a custom tech stack or an entire dedicated engineering squad?
              </h3>
              <p className="text-emerald-200/90 text-sm sm:text-base leading-relaxed">
                We source bespoke specialists in Rust, Elixir, Embedded C++, Golang, or Computer Vision in 3 to 5 business days with customized Delaware or DIFC agreements.
              </p>
            </div>
            <button
              onClick={() => onOpenHireModal({ role: 'dedicated_pod' })}
              className="flex-shrink-0 px-7 py-4 rounded-xl font-bold text-emerald-950 bg-mint-400 hover:bg-mint-300 transition-all shadow-lg flex items-center space-x-2"
            >
              <span>Request Custom Squad</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Engineer Dossier Detailed Modal */}
      <TalentDossierModal
        engineer={selectedEngineer}
        isOpen={!!selectedEngineer}
        onClose={() => setSelectedEngineer(null)}
        onHire={onOpenHireModal}
      />
    </section>
  );
}
