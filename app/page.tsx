import React from "react";
import { FeatureBlock } from "@/components/blocks/feature-block";
import { FeatureBlockProjects } from "@/components/blocks/feature-block-projects";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { FeatureBlockEditor } from "@/components/blocks/feauture-block-editor";
import { FeatureBlockLibrary } from "@/components/blocks/feauture-block-library";
import { FeatureBlockTemplates } from "@/components/blocks/feauture-block-templates";
import Hero from "@/components/Hero"
import { FaqSection } from "@/components/sections/faq-section"

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
