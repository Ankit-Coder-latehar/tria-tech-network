import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, ArrowRight, ArrowLeft, Check, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function HireModal({ isOpen, onClose, initialData = {} }) {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    roles: ['fullstack'],
    seniority: 'senior',
    location: 'us',
    timeline: 'immediate',
    name: '',
    company: '',
    email: '',
    phone: '',
    projectBrief: ''
  });

  useEffect(() => {
    if (initialData) {
      if (initialData.location) {
        setFormData(prev => ({ ...prev, location: initialData.location }));
      }
      if (initialData.role) {
        setFormData(prev => ({ ...prev, roles: [initialData.role] }));
      }
      if (initialData.seniority) {
        setFormData(prev => ({ ...prev, seniority: initialData.seniority }));
      }
      if (initialData.prefillEngineer) {
        setFormData(prev => ({
          ...prev,
          projectBrief: `I am requesting an instant interview with ${initialData.prefillEngineer} (${initialData.prefillRole}) or an engineer with an equivalent caliber.`
        }));
      }
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleRoleToggle = (val) => {
    setFormData(prev => {
      const exists = prev.roles.includes(val);
      if (exists) {
        return { ...prev, roles: prev.roles.filter(r => r !== val) };
      } else {
        return { ...prev, roles: [...prev.roles, val] };
      }
    });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#059669', '#34d399', '#064e3b']
      });
    } catch (err) {
      console.log('Confetti effect', err);
    }
  };

  const handleReset = () => {
    setStep(1);
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl border border-emerald-200/90 shadow-2xl max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                        step === s
                          ? 'bg-emerald-600 text-white'
                          : step > s
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {step > s ? <Check className="w-3.5 h-3.5" /> : s}
                    </div>
                    {s < 3 && <div className={`w-8 h-0.5 mx-1 ${step > s ? 'bg-emerald-400' : 'bg-slate-200'}`} />}
                  </div>
                ))}
              </div>
              <span className="text-xs font-mono text-emerald-700 font-semibold uppercase">
                48h Match Sprint
              </span>
            </div>

            {/* Modal Titles */}
            <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-1">
              {step === 1 && 'Deploy Top 1% Engineers'}
              {step === 2 && 'Location & Deployment Horizon'}
              {step === 3 && 'Contact & Matching Calendar'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              {step === 1 && "Specify the technical stack and experience level required for your product sprint."}
              {step === 2 && "Help us pair engineers who match your core timezone and compliance framework."}
              {step === 3 && "Tell us who to send candidate dossiers and calendar invites to."}
            </p>

            <form onSubmit={handleSubmit}>
              {/* STEP 1: ROLES & SENIORITY */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-2">
                      Engineering Disciplines Required (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { id: 'ai_ml', label: '🤖 AI / LLM / Python' },
                        { id: 'fullstack', label: '⚡ Full-Stack (Next/Node)' },
                        { id: 'cloud', label: '☁️ Cloud & DevOps / K8s' },
                        { id: 'fintech', label: '💳 Fintech / Go / Web3' },
                        { id: 'mobile', label: '📱 Mobile (iOS/Flutter)' },
                        { id: 'dedicated_pod', label: '🚀 Dedicated Pod (3-5 Devs)' }
                      ].map((r) => {
                        const active = formData.roles.includes(r.id);
                        return (
                          <div
                            key={r.id}
                            onClick={() => handleRoleToggle(r.id)}
                            className={`p-2.5 rounded-xl border cursor-pointer font-medium transition-all ${
                              active
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                          >
                            {r.label}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                      Target Seniority Level
                    </label>
                    <select
                      value={formData.seniority}
                      onChange={(e) => setFormData({ ...formData, seniority: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="senior">Senior Engineer (5-8 yrs) - $65-85/hr or $9k/mo</option>
                      <option value="staff">Staff / Principal Architect (8-12+ yrs) - $90-120/hr</option>
                      <option value="lead">Engineering Manager / Tech Lead</option>
                      <option value="mixed">Mixed Multi-Discipline Squad</option>
                    </select>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center space-x-2 text-sm shadow-sm"
                    >
                      <span>Next: Location &amp; Timezone</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: LOCATION & TIMELINE */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-2">
                      Client Operating Location
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'us', flag: '🇺🇸', name: 'United States', sub: 'PST / MST / CST / EST timezone sync & Delaware IP standard' },
                        { id: 'dubai', flag: '🇦🇪', name: 'Dubai & UAE / GCC', sub: 'GST timezone alignment & DIFC legal compliance' },
                        { id: 'europe_global', flag: '🌍', name: 'UK / Europe / Global', sub: 'Flexible cross-border synchronization' }
                      ].map((loc) => {
                        const active = formData.location === loc.id;
                        return (
                          <div
                            key={loc.id}
                            onClick={() => setFormData({ ...formData, location: loc.id })}
                            className={`p-3 rounded-xl border cursor-pointer flex items-center space-x-3 transition-all ${
                              active
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                          >
                            <span className="text-2xl">{loc.flag}</span>
                            <div>
                              <div className="text-sm font-bold text-slate-900">{loc.name}</div>
                              <div className="text-[11px] text-slate-500">{loc.sub}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                      When do you need the developer(s) in sprint?
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="immediate">Immediately (Next 48 to 72 hours)</option>
                      <option value="two_weeks">Within 2 Weeks</option>
                      <option value="next_month">Next Month / Q4 Roadmap</option>
                    </select>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2.5 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 transition-all flex items-center space-x-1.5 text-xs"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center space-x-2 text-sm shadow-sm"
                    >
                      <span>Next: Contact Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT & SUBMIT */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Julian Vance"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Company / Startup *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Cognix AI"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="julian@cognix.ai"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (415) ... or +971 50 ..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1">
                      Brief Project Scope / Key Technologies (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectBrief}
                      onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                      placeholder="e.g. We need 2 senior Next.js + Python engineers to build high-concurrency microservices..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-xl text-[11px] text-emerald-900 flex items-center space-x-2 border border-emerald-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Includes 14-day zero-risk trial. Pay nothing if candidate does not surpass expectations.</span>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2.5 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 transition-all flex items-center space-x-1.5 text-xs"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center space-x-2 text-sm shadow-md"
                    >
                      <span>Submit &amp; Schedule Matching</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-display font-black text-slate-900">
              Talent Match Request Received!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name || 'Executive'}</strong>. Our Head of Technical Placement is reviewing your criteria. We are assembling <strong>2-3 matched developer profiles</strong> aligned with your timezone.
            </p>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 max-w-md mx-auto text-left space-y-1">
              <strong className="block font-semibold">What happens next:</strong>
              <p>Check your inbox at <strong>{formData.email || 'your email'}</strong> in the next 15 minutes for calendar invite and candidate dossier access.</p>
            </div>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all text-sm"
              >
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
