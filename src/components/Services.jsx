import React, { useState } from 'react';
import { Bot, Cloud, Layers, CreditCard, Users2, ArrowRight, CheckCircle2, Cpu } from 'lucide-react';

export default function Services({ onOpenHireModal }) {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      id: 'ai_ml',
      icon: <Bot className="w-6 h-6 text-emerald-600" />,
      title: 'AI & LLM Systems Engineering',
      headline: 'Autonomous Agents, Fine-Tuning & High-Throughput Inference',
      desc: 'Deploy senior AI researchers and infrastructure engineers who specialize in production open-source LLMs (Llama 3, Mistral, DeepSeek), CUDA optimization, vector databases, and enterprise RAG pipelines.',
      deliverables: [
        'vLLM & TensorRT-LLM 4x inference speedups',
        'Custom fine-tuning & domain-specific model quantization',
        'Production RAG architecture with sub-100ms vector search',
        'Autonomous agentic workflows with LangChain & LangGraph'
      ],
      stacks: ['PyTorch', 'vLLM', 'Python', 'LangChain', 'CUDA', 'FastAPI', 'Qdrant', 'Milvus'],
      rate: 'From $85 / hr'
    },
    {
      id: 'cloud_devops',
      icon: <Cloud className="w-6 h-6 text-emerald-600" />,
      title: 'High-Scale Cloud & DevOps Pods',
      headline: 'Zero-Downtime Infrastructure & Cost Optimization',
      desc: 'Architect multi-region Kubernetes clusters handling hundreds of millions of daily API transactions. SREs and cloud architects with deep mastery of AWS, GCP, Terraform GitOps, and zero-trust security.',
      deliverables: [
        'Multi-region Kubernetes (EKS / GKE) zero-downtime migrations',
        'Terraform GitOps automated deployment pipelines',
        'Cloud cost audit with average 35-50% infrastructure reduction',
        '24/7 SRE monitoring, Prometheus, and automated failover'
      ],
      stacks: ['Kubernetes', 'Terraform', 'AWS', 'GCP', 'Docker', 'ArgoCD', 'Prometheus', 'Golang'],
      rate: 'From $90 / hr'
    },
    {
      id: 'fullstack',
      icon: <Layers className="w-6 h-6 text-emerald-600" />,
      title: 'Full-Stack & Sub-Second Web Architecture',
      headline: 'Next.js 15, TypeScript & Distributed SaaS Backends',
      desc: 'Engineers who build consumer-facing applications and high-conversion enterprise SaaS with 100/100 Core Web Vitals, fluid responsive interfaces, and distributed PostgreSQL scale.',
      deliverables: [
        'Sub-second edge rendering with Next.js 15 App Router & Server Actions',
        'Clean TypeScript microservices with modular design systems',
        'High-concurrency PostgreSQL and Redis caching layers',
        'Enterprise RBAC authentication, Stripe billing & webhook orchestration'
      ],
      stacks: ['Next.js 15', 'TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Tailwind', 'GraphQL'],
      rate: 'From $75 / hr'
    },
    {
      id: 'fintech',
      icon: <CreditCard className="w-6 h-6 text-emerald-600" />,
      title: 'Fintech & Sovereign Web3 Payment Rails',
      headline: 'Ultra-Low Latency Gateways & DIFC Regulatory Standard',
      desc: 'High-security financial engineers certified in PCI-DSS and DIFC/ADGM compliance. Specialists in multi-currency FX settlement engines, smart contract protocol development, and ledger security.',
      deliverables: [
        'Sub-20ms transactional payment gateway processing',
        'DIFC & US Delaware compliant regulatory audit architecture',
        'Smart contracts with formal mathematical verification',
        'Real-time fraud prevention & event-driven Kafka pipelines'
      ],
      stacks: ['Golang', 'Solidity', 'Rust', 'Kafka', 'Redis', 'WebSockets', 'PostgreSQL'],
      rate: 'From $90 / hr'
    },
    {
      id: 'dedicated_pod',
      icon: <Users2 className="w-6 h-6 text-emerald-600" />,
      title: 'Turnkey Dedicated Pods (3-5 Engineers)',
      headline: 'Complete Cross-Functional Engineering Squad',
      desc: 'Scale an entire engineering vertical overnight. A dedicated pod includes a Principal Architect/Lead, 2 Senior Full-Stack/Backend Engineers, and a dedicated DevOps specialist pre-synchronized to your timezone.',
      deliverables: [
        'Complete autonomous sprint execution from Day 3',
        'Daily standup alignment in US (PST/EST) or Dubai (GST)',
        'Unified Delaware or DIFC vendor contract with single invoice',
        'Quarterly tech stack roadmap review with our Principal Partners'
      ],
      stacks: ['Full Stack Polyglot Squad', 'Lead + Senior Engineers', 'End-to-End Delivery'],
      rate: 'Custom Monthly Retainer'
    }
  ];

  const current = services[selectedService];

  return (
    <section id="services" className="py-20 sm:py-28 relative bg-slate-50/70 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
            Elite Engineering <span className="text-gradient-emerald">Practice Areas</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Precision-engineered talent squads built for rapid product sprints and mission-critical enterprise systems.
          </p>
        </div>

        {/* Interactive Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Service Menu Selector */}
          <div className="lg:col-span-5 space-y-3">
            {services.map((srv, idx) => {
              const active = selectedService === idx;
              return (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 flex items-center justify-between border ${
                    active
                      ? 'bg-white border-emerald-500 shadow-md shadow-emerald-500/10 scale-[1.02]'
                      : 'bg-white/70 border-slate-200 hover:border-emerald-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className={`p-2.5 rounded-xl ${active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                      {srv.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">
                        {srv.title}
                      </h4>
                      <span className="text-xs font-mono text-emerald-700 font-semibold">{srv.rate}</span>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${active ? 'text-emerald-600 translate-x-1' : 'text-slate-400'}`} />
                </div>
              );
            })}
          </div>

          {/* Right Active Service Deep Dive Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-emerald-200/90 shadow-card-elevated flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 mb-2">
                <span>Practice Overview</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 mb-2">
                {current.headline}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {current.desc}
              </p>

              {/* Deliverables Checklist */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Key Sprint Deliverables
                </h4>
                <div className="space-y-2.5">
                  {current.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Featured Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {current.stacks.map((st) => (
                    <span
                      key={st}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-100 text-slate-800"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA Bar */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                  Benchmark Investment
                </span>
                <span className="text-lg font-bold font-mono text-slate-900">{current.rate}</span>
              </div>

              <button
                onClick={() => onOpenHireModal({ role: current.id })}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center justify-center space-x-2 shadow-sm text-sm"
              >
                <span>Deploy This Capability (48h)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
