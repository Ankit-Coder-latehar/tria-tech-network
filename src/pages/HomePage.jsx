import React from 'react';
import Hero from '../components/Hero';
import PartnerMarquee from '../components/PartnerMarquee';
import DualHubs from '../components/DualHubs';
import VettingEngine from '../components/VettingEngine';
import TalentRoster from '../components/TalentRoster';
import RoiCalculator from '../components/RoiCalculator';
import CaseStudies from '../components/CaseStudies';
import FaqSection from '../components/FaqSection';
import FinalCta from '../components/FinalCta';

export default function HomePage({ onOpenHireModal }) {
  return (
    <>
      {/* Hero Section with Left-Aligned Text & Right-Side Picture */}
      <Hero onOpenHireModal={onOpenHireModal} />

      {/* Recognition Marquee */}
      <PartnerMarquee />

      {/* Dual Hubs: US & Dubai Specialization with Real Skylines & Overlap Simulator */}
      <DualHubs onOpenHireModal={onOpenHireModal} />

      {/* The 5-Stage Vetting Engine */}
      <VettingEngine />

      {/* Live Talent Roster with Real Photos, Search, and Audit Dossiers */}
      <TalentRoster onOpenHireModal={onOpenHireModal} />

      {/* ROI & Velocity Savings Calculator with Multi-Currency Converter */}
      <RoiCalculator onOpenHireModal={onOpenHireModal} />

      {/* Case Studies & Testimonials with Real Executive Photos */}
      <CaseStudies />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* High-Impact Final CTA */}
      <FinalCta onOpenHireModal={onOpenHireModal} />
    </>
  );
}
