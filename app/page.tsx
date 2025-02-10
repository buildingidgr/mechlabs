import Hero from "@/components/Hero"
import { Navbar } from "@/components/Navbar"  
import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { Feature13 } from "@/components/feauture1";
import { FaqSection } from "@/components/sections/faq-section"
import { Feature17 } from "@/components/blocks/feauture17";
import { FeatureBlock } from "@/components/blocks/feature-block";
import { FeatureBlockEditor } from "@/components/blocks/feauture-block-editor";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSectionWithHoverEffects />
      <FeatureBlock />
      <FeatureBlockEditor />
    <Feature13 />
    <Feature17 />
      <FaqSection />
      
    
    </main>
  )
}
