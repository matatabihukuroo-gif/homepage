/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Strengths from "./components/Strengths";
import Services from "./components/Services";
import Staff from "./components/Staff";
import ServiceFlow from "./components/ServiceFlow";
import CostInfo from "./components/CostInfo";
import StationOverview from "./components/StationOverview";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import StickyContactBar from "./components/StickyContactBar";
import DesignCustomizer, { themes, VisualTheme } from "./components/DesignCustomizer";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<VisualTheme>(themes[6]);
  const [radiusStyle, setRadiusStyle] = useState<string>("rounded-3xl");
  const [fontStyle, setFontStyle] = useState<string>("font-sans");

  const themeStyles = {
    "--color-warm-cream": currentTheme.cream,
    "--color-warm-sand": currentTheme.sand,
    "--color-warm-peach": currentTheme.peach,
    "--color-soft-orange": currentTheme.orange,
    "--color-forest-light": currentTheme.forestLight,
    "--color-forest-medium": currentTheme.forestMedium,
    "--color-forest-dark": currentTheme.forestDark,
    "--card-radius": radiusStyle === "rounded-3xl" ? "24px" : radiusStyle === "rounded-[2rem]" ? "32px" : radiusStyle === "rounded-2xl" ? "16px" : radiusStyle === "rounded-xl" ? "12px" : "0px",
  } as React.CSSProperties;

  return (
    <div
      style={themeStyles}
      className={`min-h-screen bg-warm-cream ${fontStyle} flex flex-col selection:bg-forest-light/10 selection:text-forest-dark pb-[68px] lg:pb-0 transition-all duration-300`}
    >
      {/* Dynamic Style Injection to warp the border roundings globally based on customizer choices */}
      <style>{`
        .rounded-3xl { border-radius: var(--card-radius, 24px) !important; }
        .rounded-2xl { border-radius: calc(var(--card-radius, 24px) * 0.75) !important; }
        .rounded-\\[2rem\\] { border-radius: calc(var(--card-radius, 24px) * 1.33) !important; }
        .rounded-xl { border-radius: calc(var(--card-radius, 24px) * 0.5) !important; }
      `}</style>

      {/* Floating Interactive Design Studio Selection panel */}
      <DesignCustomizer
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
        radiusStyle={radiusStyle}
        onRadiusStyleChange={setRadiusStyle}
        fontStyle={fontStyle}
        onFontStyleChange={setFontStyle}
      />

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

