import Hero from "@/components/Hero"
import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { FaqSection } from "@/components/sections/faq-section"
import { FeatureBlock } from "@/components/blocks/feature-block";
import { FeatureBlockEditor } from "@/components/blocks/feauture-block-editor";
import { FeatureBlockTemplates } from "@/components/blocks/feauture-block-templates";
import { FeatureBlockProjects } from "@/components/blocks/feature-block-projects";
import { FeatureBlockLibrary } from "@/components/blocks/feauture-block-library";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSectionWithHoverEffects />
      <FeatureBlock />
      <FeatureBlockProjects />
      <FeatureBlockEditor />
      <FeatureBlockLibrary />
      <FeatureBlockTemplates />
      <FaqSection />
      
    
    </main>
  )
}
