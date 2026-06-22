/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Strengths from "./components/Strengths";
import Services from "./components/Services";
import Staff from "./components/Staff";
import ServiceFlow from "./components/ServiceFlow";
import CostInfo from "./components/CostInfo";
import StationOverview from "./components/StationOverview";
import GoogleDriveHub from "./components/GoogleDriveHub";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import StickyContactBar from "./components/StickyContactBar";

export default function App() {
  return (
    <div className="min-h-screen bg-warm-cream font-sans flex flex-col selection:bg-forest-light/10 selection:text-forest-dark pb-[68px] lg:pb-0">
      {/* Sticky Top Headers & Emergency Ribbon */}
      <Header />

      <main className="flex-grow">
        {/* Hero Segment */}
        <Hero />

        {/* Core Strengths (24/7/365, Hospital Backgrounds, 30s/40s Genders) */}
        <Strengths />

        {/* Detailed Psychiatric Services Info */}
        <Services />

        {/* Human-Centered Personal Staff Profiles */}
        <Staff />

        {/* Step-by-Step Pathway to Onboard */}
        <ServiceFlow />

        {/* Detailed Insurance & Autonomy Subsidies Fees guide */}
        <CostInfo />

        {/* Physical Base details, Business specifications & Google Map iframe */}
        <StationOverview />

        {/* Cloud data synchronization station */}
        <GoogleDriveHub />

        {/* Psychiatric Speciality Accordion FAQs */}
        <FAQ />

        {/* Interactive Consultation Form with high-fidelity validation & Success State */}
        <ContactForm />
      </main>

      {/* Reassuring Footer */}
      <Footer />

      {/* Bottom Sticky Action strip for Mobile quick dialing */}
      <StickyContactBar />
    </div>
  );
}

