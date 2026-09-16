import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NetworkCanvas from './components/NetworkCanvas';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import HireModal from './components/HireModal';
import DevModal from './components/DevModal';
import Toast from './components/Toast';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

import { Zap } from 'lucide-react';

export default function App() {
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [hireModalData, setHireModalData] = useState({});
  const [devModalOpen, setDevModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenHireModal = (data = {}) => {
    setHireModalData(data);
    setHireModalOpen(true);
  };

  const handleOpenDevModal = () => {
    setDevModalOpen(true);
  };

  const handleShowToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-900 relative">
        {/* Route Scroll Reset */}
        <ScrollToTop />

        {/* Magnetic Custom Cursor */}
        <CustomCursor />

        {/* Interactive Global Network & Conduit Canvas */}
        <NetworkCanvas />

        {/* Navigation Header with About Us, Services, Contact Us */}
        <Navbar
          onOpenHireModal={() => handleOpenHireModal()}
          onOpenDevModal={handleOpenDevModal}
        />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage onOpenHireModal={handleOpenHireModal} />} />
            <Route path="/about" element={<AboutPage onOpenHireModal={handleOpenHireModal} />} />
            <Route path="/services" element={<ServicesPage onOpenHireModal={handleOpenHireModal} />} />
            <Route path="/contact" element={<ContactPage onShowToast={handleShowToast} />} />
            <Route path="*" element={<HomePage onOpenHireModal={handleOpenHireModal} />} />
          </Routes>
        </main>

        {/* Luxury Footer */}
        <Footer
          onOpenDevModal={handleOpenDevModal}
          onShowToast={handleShowToast}
        />

        {/* Floating Action Button for Quick 48h Hiring */}
        <aside className="fixed bottom-6 right-6 z-30">
          <button
            onClick={() => handleOpenHireModal()}
            className="flex items-center space-x-2 px-5 py-3.5 rounded-full font-bold text-xs sm:text-sm text-emerald-950 bg-gradient-to-r from-mint-400 via-emerald-400 to-teal-400 hover:from-mint-300 hover:to-teal-300 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.5)] hover:shadow-green-glow transition-all duration-300 group"
            title="Request Talent in 48h"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-900 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-900"></span>
            </span>
            <Zap className="w-4 h-4 text-emerald-950 fill-emerald-950" />
            <span className="font-extrabold tracking-wide">Hire in 48h</span>
          </button>
        </aside>

        {/* Conversion Modals */}
        <HireModal
          isOpen={hireModalOpen}
          onClose={() => setHireModalOpen(false)}
          initialData={hireModalData}
        />

        <DevModal
          isOpen={devModalOpen}
          onClose={() => setDevModalOpen(false)}
        />

        {/* Interactive Toast Notifications */}
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage('')}
        />
      </div>
    </BrowserRouter>
  );
}
