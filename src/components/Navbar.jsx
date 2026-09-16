import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenHireModal, onOpenDevModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <aside className="bg-gradient-to-r from-emerald-900 via-forest-800 to-emerald-950 text-white text-xs sm:text-sm py-2 px-4 relative z-50 border-b border-emerald-600/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mint-500"></span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-mint-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-mint-400/20">
              Live Pipeline Active
            </span>
            <span className="hidden md:inline text-emerald-100/90 font-medium">
              <strong className="text-white font-semibold">18 Senior Engineers</strong> ready for immediate 48h deployment across <strong className="text-mint-300">US (PST/EST)</strong> &amp; <strong className="text-mint-300">Dubai (GST)</strong>.
            </span>
          </div>
          <Link
            to="/#talent-roster"
            className="inline-flex items-center space-x-1 text-mint-300 hover:text-white font-medium transition-colors text-xs ml-auto sm:ml-0"
          >
            <span>Explore Vetted Roster</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </aside>

      {/* Main Luxury Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-[0_4px_25px_-5px_rgba(16,185,129,0.08)] py-3'
            : 'bg-white/70 backdrop-blur-md py-4 border-b border-emerald-500/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-mint-400 p-[1px] shadow-sm group-hover:shadow-green-glow transition-all duration-300">
              <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                <span className="text-emerald-600 text-lg font-black transition-transform duration-300 group-hover:scale-110">▲</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900">
                  TRIA<span className="text-gradient-emerald">TECH</span>
                </span>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-700 font-bold -mt-1">
                Network &bull; US &amp; Dubai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with React Router */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-1 relative transition-colors ${
                    isActive ? 'text-emerald-600 font-bold' : 'hover:text-emerald-600'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-emerald-500 transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenDevModal}
              className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100/90 border border-emerald-200 rounded-lg transition-all"
            >
              Join as Dev
            </button>
            <button
              onClick={() => onOpenHireModal()}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-lg shadow-sm hover:shadow-green-glow transition-all duration-300 flex items-center space-x-1.5"
            >
              <span>Hire Top 1% in 48h</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer with React Router Links */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-emerald-500/20 px-4 pt-3 pb-6 space-y-3 transition-all">
            <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-md transition-colors ${
                      isActive ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-emerald-50 hover:text-emerald-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireModal();
                }}
                className="w-full py-2.5 text-center font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg text-sm"
              >
                Deploy Engineers (48h Match)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDevModal();
                }}
                className="w-full py-2.5 text-center font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg text-sm"
              >
                Apply as Engineer
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
