/**
 * TriaTechNetwork - Main Application Logic
 * Interactive World Clocks, Talent Roster, Dual-Hub switcher, ROI Calculator, Multi-step Modal
 */

// ==========================================
// 1. DATA REPOSITORY: FEATURED TALENT ROSTER
// ==========================================
const TALENT_ROSTER = [
  {
    id: 'TRIA-802',
    name: 'Elena Rostova',
    initials: 'ER',
    role: 'Senior AI & LLM Systems Engineer',
    category: 'ai',
    yoe: '7 Yrs Exp',
    locationSync: 'US (PST/EST) & Dubai Synced',
    summary: 'Ex-DeepMind fellow. Specializes in fine-tuning open-source LLMs (Llama 3, Mistral), vLLM high-throughput inference serving, and RAG pipelines.',
    skills: ['PyTorch', 'vLLM', 'LangChain', 'FastAPI', 'Python', 'CUDA', 'Vector DBs'],
    benchmarkRate: '$85 / hr',
    benchmarkSub: 'or $9,800 / mo',
    status: 'Ready in 48h'
  },
  {
    id: 'TRIA-714',
    name: 'Marcus Vance',
    initials: 'MV',
    role: 'Principal Cloud & DevOps Architect',
    category: 'devops',
    yoe: '11 Yrs Exp',
    locationSync: 'US East & Dubai Synced',
    summary: 'Architected multi-region Kubernetes clusters handling 400M+ requests/day. Deep expertise in Terraform, GitOps, zero-trust security & AWS cost optimization.',
    skills: ['Kubernetes', 'Terraform', 'AWS / GCP', 'Golang', 'Docker', 'ArgoCD', 'Prometheus'],
    benchmarkRate: '$95 / hr',
    benchmarkSub: 'or $11,200 / mo',
    status: 'Ready in 48h'
  },
  {
    id: 'TRIA-945',
    name: 'Sarah Jenkins',
    initials: 'SJ',
    role: 'Lead Full-Stack Web Architect',
    category: 'fullstack',
    yoe: '8 Yrs Exp',
    locationSync: 'Silicon Valley (PST) Aligned',
    summary: 'Built sub-second consumer applications and high-conversion enterprise SaaS. Master of Next.js 14 App Router, TypeScript, server actions, and Postgres scale.',
    skills: ['Next.js 14', 'TypeScript', 'Node.js', 'React', 'PostgreSQL', 'GraphQL', 'Tailwind'],
    benchmarkRate: '$75 / hr',
    benchmarkSub: 'or $8,900 / mo',
    status: 'Ready in 48h'
  },
  {
    id: 'TRIA-628',
    name: 'Tariq Al-Hashemi',
    initials: 'TA',
    role: 'Staff Fintech & Web3 Systems Lead',
    category: 'fintech',
    yoe: '9 Yrs Exp',
    locationSync: 'Dubai (GST) & US East Synced',
    summary: 'Engineered ultra-low latency FX payment gateways and smart contract protocols with $120M+ TVL. PCI-DSS and DIFC regulatory audit certified.',
    skills: ['Golang', 'Solidity', 'Rust', 'Kafka', 'Redis', 'WebSockets', 'PostgreSQL'],
    benchmarkRate: '$90 / hr',
    benchmarkSub: 'or $10,500 / mo',
    status: 'Ready in 48h'
  },
  {
    id: 'TRIA-519',
    name: 'Lucas Silva',
    initials: 'LS',
    role: 'Senior Mobile Engineer (iOS & Flutter)',
    category: 'mobile',
    yoe: '6 Yrs Exp',
    locationSync: 'US (EST/CST) Synced',
    summary: 'Built flagship mobile banking and AI companion apps featured on the App Store with 4.8+ ratings. Offline-first architecture and native bridge performance.',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'SQLite', 'Biometrics', 'CI/CD'],
    benchmarkRate: '$70 / hr',
    benchmarkSub: 'or $8,200 / mo',
    status: 'Ready in 48h'
  },
  {
    id: 'TRIA-993',
    name: 'Vikramaditya Rao',
    initials: 'VR',
    role: 'Staff Distributed Systems & AI Lead',
    category: 'ai',
    yoe: '10 Yrs Exp',
    locationSync: 'Dubai (GST) & US West Synced',
    summary: 'Specialist in distributed training clusters and high-throughput data processing pipelines. Ex-autonomous mobility backend engineer.',
    skills: ['Rust', 'Python', 'C++', 'Ray', 'Triton', 'Distributed Consensus', 'gRPC'],
    benchmarkRate: '$105 / hr',
    benchmarkSub: 'or $12,500 / mo',
    status: 'Ready in 48h'
  }
];

// ==========================================
// 2. LIVE WORLD CLOCKS (SF, NY, DUBAI)
// ==========================================
function updateWorldClocks() {
  const sfEl = document.getElementById('clock-sf');
  const nyEl = document.getElementById('clock-ny');
  const dubaiEl = document.getElementById('clock-dubai');

  const now = new Date();

  const optionsTime = {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  try {
    if (sfEl) {
      sfEl.textContent = new Intl.DateTimeFormat('en-US', {
        ...optionsTime,
        timeZone: 'America/Los_Angeles'
      }).format(now);
    }
    if (nyEl) {
      nyEl.textContent = new Intl.DateTimeFormat('en-US', {
        ...optionsTime,
        timeZone: 'America/New_York'
      }).format(now);
    }
    if (dubaiEl) {
      dubaiEl.textContent = new Intl.DateTimeFormat('en-US', {
        ...optionsTime,
        timeZone: 'Asia/Dubai'
      }).format(now);
    }
  } catch (e) {
    console.error('Timezone formatting fallback', e);
  }
}

// ==========================================
// 3. RENDER TALENT CARDS & FILTERING
// ==========================================
function renderTalentGrid(category = 'all') {
  const grid = document.getElementById('talentGrid');
  if (!grid) return;

  const filtered = category === 'all' 
    ? TALENT_ROSTER 
    : TALENT_ROSTER.filter((item) => item.category === category);

  grid.innerHTML = filtered
    .map(
      (dev) => `
    <div class="talent-card glass-panel" data-id="${dev.id}">
      <div>
        <div class="talent-card-header">
          <div class="talent-identity">
            <div class="talent-avatar">${dev.initials}</div>
            <div class="talent-meta">
              <h4>${dev.name}</h4>
              <span class="talent-role">${dev.role}</span>
            </div>
          </div>
          <span class="talent-status-pill">● ${dev.status}</span>
        </div>

        <p class="talent-summary">${dev.summary}</p>

        <div class="talent-skills-row">
          ${dev.skills.map((s) => `<span class="skill-badge">${s}</span>`).join('')}
        </div>
      </div>

      <div class="talent-footer">
        <div class="talent-benchmark">
          <span class="rate-label">${dev.yoe} &bull; Overlap</span>
          <span class="rate-value">${dev.benchmarkRate}</span>
        </div>
        <button class="btn-interview magnetic-hover" onclick="window.requestSpecificTalent('${dev.name}', '${dev.role}')">
          Instant Interview &rarr;
        </button>
      </div>
    </div>
  `
    )
    .join('');

  if (window.updateCursorTargets) {
    window.updateCursorTargets();
  }
}

// Global hook to trigger hire modal prefilled with developer
window.requestSpecificTalent = function (name, role) {
  const hireModal = document.getElementById('hireModal');
  const projectBrief = document.getElementById('projectBrief');
  if (projectBrief) {
    projectBrief.value = `I am interested in interviewing ${name} (${role}) or candidates with an equivalent skill profile for our upcoming sprint.`;
  }
  openHireModal();
};

// ==========================================
// 4. INTERACTIVE ROI & VELOCITY CALCULATOR
// ==========================================
let calcState = {
  market: 'us',
  teamSize: 3,
  seniority: 'senior',
  durationMonths: 12
};

function calculateROI() {
  const savingsOutput = document.getElementById('savingsOutput');
  const timeSavedOutput = document.getElementById('timeSavedOutput');
  const savingsComparison = document.getElementById('savingsComparison');

  if (!savingsOutput || !timeSavedOutput) return;

  // Seniority Multiplier
  let domesticAnnualCostPerDev = 230000;
  let triaAnnualCostPerDev = 95000;

  if (calcState.market === 'us') {
    if (calcState.seniority === 'mid') {
      domesticAnnualCostPerDev = 175000;
      triaAnnualCostPerDev = 75000;
    } else if (calcState.seniority === 'senior') {
      domesticAnnualCostPerDev = 240000;
      triaAnnualCostPerDev = 100000;
    } else if (calcState.seniority === 'lead') {
      domesticAnnualCostPerDev = 310000;
      triaAnnualCostPerDev = 128000;
    }
  } else {
    // Dubai Market (USD equivalent conversion for clarity)
    if (calcState.seniority === 'mid') {
      domesticAnnualCostPerDev = 145000;
      triaAnnualCostPerDev = 72000;
    } else if (calcState.seniority === 'senior') {
      domesticAnnualCostPerDev = 195000;
      triaAnnualCostPerDev = 92000;
    } else if (calcState.seniority === 'lead') {
      domesticAnnualCostPerDev = 255000;
      triaAnnualCostPerDev = 115000;
    }
  }

  // Multiply by duration factor
  const durationFactor = calcState.durationMonths / 12;
  const annualDiff = domesticAnnualCostPerDev - triaAnnualCostPerDev;
  const totalSavings = Math.round(annualDiff * calcState.teamSize * durationFactor);

  // Time saved: Traditional agency takes ~64 days; TriaTech takes 2 days (48h)
  const daysSaved = 62;

  // Format currency
  savingsOutput.textContent = `$${totalSavings.toLocaleString()}`;
  timeSavedOutput.textContent = `${daysSaved} Days`;

  if (calcState.market === 'us') {
    savingsComparison.textContent = `vs domestic US agency recruitment & Silicon Valley salaries`;
  } else {
    savingsComparison.textContent = `vs Dubai local recruitment fees, expat visa sponsorships & severance`;
  }
}

// ==========================================
// 5. MULTI-STEP HIRE MODAL LOGIC
// ==========================================
let currentStep = 1;

function openHireModal() {
  const modal = document.getElementById('hireModal');
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  goToStep(1);
}

function closeHireModal() {
  const modal = document.getElementById('hireModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function goToStep(step) {
  currentStep = step;
  const step1 = document.getElementById('formStep1');
  const step2 = document.getElementById('formStep2');
  const step3 = document.getElementById('formStep3');
  const success = document.getElementById('modalSuccessState');
  const form = document.getElementById('hireForm');

  const dot1 = document.getElementById('dotStep1');
  const dot2 = document.getElementById('dotStep2');
  const dot3 = document.getElementById('dotStep3');

  const title = document.getElementById('modalStepTitle');
  const desc = document.getElementById('modalStepDesc');

  if (form) form.style.display = 'block';
  if (success) success.style.display = 'none';

  if (step === 1) {
    if (step1) step1.style.display = 'block';
    if (step2) step2.style.display = 'none';
    if (step3) step3.style.display = 'none';

    dot1.className = 'step-dot active';
    dot2.className = 'step-dot';
    dot3.className = 'step-dot';

    title.textContent = 'Deploy Top 1% Engineers (48h Match)';
    desc.textContent = "Select your desired tech stack and required seniority tier.";
  } else if (step === 2) {
    if (step1) step1.style.display = 'none';
    if (step2) step2.style.display = 'block';
    if (step3) step3.style.display = 'none';

    dot1.className = 'step-dot completed';
    dot2.className = 'step-dot active';
    dot3.className = 'step-dot';

    title.textContent = 'Target Timezone & Deployment Timeline';
    desc.textContent = "Choose where your team operates to guarantee 4-8 hours of daily synchronous overlap.";
  } else if (step === 3) {
    if (step1) step1.style.display = 'none';
    if (step2) step2.style.display = 'none';
    if (step3) step3.style.display = 'block';

    dot1.className = 'step-dot completed';
    dot2.className = 'step-dot completed';
    dot3.className = 'step-dot active';

    title.textContent = 'Schedule Your Talent Match Call';
    desc.textContent = "We will send you 2-3 anonymous vetted portfolios and code audits within 24 hours.";
  }
}

// ==========================================
// 6. NOTIFICATION TOAST SYSTEM
// ==========================================
window.showNotification = function (message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>⚡ ${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

// Developer application modal handler
window.handleDevApply = function () {
  const form = document.getElementById('devApplyForm');
  const msg = document.getElementById('devSuccessMsg');
  if (form) form.style.display = 'none';
  if (msg) msg.style.display = 'block';
  window.showNotification('Application received! Check your email for Stage 1 Challenge.');
};

// ==========================================
// 7. INITIALIZATION ON DOM CONTENT LOADED
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Clocks
  updateWorldClocks();
  setInterval(updateWorldClocks, 1000);

  // Render initial talent roster
  renderTalentGrid('all');

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderTalentGrid(cat);
    });
  });

  // Dual Hubs Switcher
  const usTab = document.getElementById('tab-us');
  const dubaiTab = document.getElementById('tab-dubai');
  const usPanel = document.getElementById('us-panel');
  const dubaiPanel = document.getElementById('dubai-panel');

  if (usTab && dubaiTab) {
    usTab.addEventListener('click', () => {
      usTab.classList.add('active');
      usTab.setAttribute('aria-selected', 'true');
      dubaiTab.classList.remove('active');
      dubaiTab.setAttribute('aria-selected', 'false');

      usPanel.style.display = 'block';
      dubaiPanel.style.display = 'none';
    });

    dubaiTab.addEventListener('click', () => {
      dubaiTab.classList.add('active');
      dubaiTab.setAttribute('aria-selected', 'true');
      usTab.classList.remove('active');
      usTab.setAttribute('aria-selected', 'false');

      dubaiPanel.style.display = 'block';
      usPanel.style.display = 'none';
    });
  }

  // Calculator Event Listeners
  const teamSlider = document.getElementById('teamSizeSlider');
  const teamValBadge = document.getElementById('teamSizeVal');
  if (teamSlider && teamValBadge) {
    teamSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      calcState.teamSize = val;
      teamValBadge.textContent = `${val} Engineer${val > 1 ? 's' : ''}`;
      calculateROI();
    });
  }

  // Market selector buttons
  const marketBtns = document.querySelectorAll('.radio-toggle-group .toggle-btn');
  marketBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      marketBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      calcState.market = btn.getAttribute('data-market');
      calculateROI();
    });
  });

  // Seniority buttons
  const seniorityBtns = document.querySelectorAll('.seniority-btn');
  seniorityBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      seniorityBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      calcState.seniority = btn.getAttribute('data-seniority');
      calculateROI();
    });
  });

  // Duration buttons
  const durationBtns = document.querySelectorAll('.duration-btn');
  durationBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      durationBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      calcState.durationMonths = parseInt(btn.getAttribute('data-duration'), 10);
      calculateROI();
    });
  });

  calculateROI();

  // Modal Open / Close buttons
  const openHireModalBtn = document.getElementById('openHireModalBtn');
  const heroHireBtn = document.getElementById('heroHireBtn');
  const floatingHireBtn = document.getElementById('floatingHireBtn');
  const finalHireCtaBtn = document.getElementById('finalHireCtaBtn');
  const lockInCalculationBtn = document.getElementById('lockInCalculationBtn');
  const closeHireModalBtn = document.getElementById('closeHireModalBtn');
  const hireModal = document.getElementById('hireModal');
  const requestCustomSquadBtn = document.getElementById('requestCustomSquadBtn');
  const mobileHireBtn = document.getElementById('mobileHireBtn');

  const modalTriggerUs = document.querySelector('.modal-trigger-us');
  const modalTriggerDubai = document.querySelector('.modal-trigger-dubai');

  [
    openHireModalBtn,
    heroHireBtn,
    floatingHireBtn,
    finalHireCtaBtn,
    lockInCalculationBtn,
    modalTriggerUs,
    modalTriggerDubai,
    requestCustomSquadBtn,
    mobileHireBtn
  ].forEach((btn) => {
    if (btn) btn.addEventListener('click', openHireModal);
  });

  if (closeHireModalBtn) closeHireModalBtn.addEventListener('click', closeHireModal);

  // Close modal on backdrop click
  if (hireModal) {
    hireModal.addEventListener('click', (e) => {
      if (e.target === hireModal) closeHireModal();
    });
  }

  // Multi-step modal navigation
  const step1NextBtn = document.getElementById('step1NextBtn');
  const step2NextBtn = document.getElementById('step2NextBtn');
  const step2BackBtn = document.getElementById('step2BackBtn');
  const step3BackBtn = document.getElementById('step3BackBtn');
  const hireForm = document.getElementById('hireForm');

  if (step1NextBtn) step1NextBtn.addEventListener('click', () => goToStep(2));
  if (step2NextBtn) step2NextBtn.addEventListener('click', () => goToStep(3));
  if (step2BackBtn) step2BackBtn.addEventListener('click', () => goToStep(1));
  if (step3BackBtn) step3BackBtn.addEventListener('click', () => goToStep(2));

  if (hireForm) {
    hireForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const contactName = document.getElementById('contactName').value;
      hireForm.style.display = 'none';
      const success = document.getElementById('modalSuccessState');
      if (success) success.style.display = 'block';
      window.showNotification(`Match request sent for ${contactName}!`);
    });
  }

  const closeSuccessModalBtn = document.getElementById('closeSuccessModalBtn');
  if (closeSuccessModalBtn) {
    closeSuccessModalBtn.addEventListener('click', closeHireModal);
  }

  // Developer Application Modal
  const openDevApplyBtn = document.getElementById('openDevApplyBtn');
  const mobileDevBtn = document.getElementById('mobileDevBtn');
  const footerApplyDev = document.getElementById('footerApplyDev');
  const devModal = document.getElementById('devModal');
  const closeDevModalBtn = document.getElementById('closeDevModalBtn');
  const closeDevSuccessBtn = document.getElementById('closeDevSuccessBtn');

  function openDevModal() {
    if (devModal) {
      devModal.classList.add('open');
      const form = document.getElementById('devApplyForm');
      const msg = document.getElementById('devSuccessMsg');
      if (form) form.style.display = 'block';
      if (msg) msg.style.display = 'none';
    }
  }

  function closeDevModal() {
    if (devModal) devModal.classList.remove('open');
  }

  if (openDevApplyBtn) openDevApplyBtn.addEventListener('click', openDevModal);
  if (mobileDevBtn) mobileDevBtn.addEventListener('click', openDevModal);
  if (footerApplyDev) {
    footerApplyDev.addEventListener('click', (e) => {
      e.preventDefault();
      openDevModal();
    });
  }
  if (closeDevModalBtn) closeDevModalBtn.addEventListener('click', closeDevModal);
  if (closeDevSuccessBtn) closeDevSuccessBtn.addEventListener('click', closeDevModal);

  if (devModal) {
    devModal.addEventListener('click', (e) => {
      if (e.target === devModal) closeDevModal();
    });
  }

  // Accordion Logic
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');

    // Initial state check for open item
    if (trigger && trigger.getAttribute('aria-expanded') === 'true') {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }

    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close all others
        accordionItems.forEach((other) => {
          other.classList.remove('active');
          const otherTrigger = other.querySelector('.accordion-trigger');
          const otherContent = other.querySelector('.accordion-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });

  // Header background on scroll
  const siteHeader = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // Metric Counter Animation on view
  const counters = document.querySelectorAll('.counter');
  let counted = false;

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          counters.forEach((counter) => {
            const target = parseFloat(counter.getAttribute('data-target'));
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target % 1 === 0 ? target : target.toFixed(1);
                clearInterval(timer);
              } else {
                counter.textContent = target % 1 === 0 ? Math.floor(current) : current.toFixed(1);
              }
            }, 30);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  const trustStrip = document.querySelector('.trust-metrics-strip');
  if (trustStrip) countObserver.observe(trustStrip);
});
