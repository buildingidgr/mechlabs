import React from "react";
import { FeatureBlock } from "@/components/blocks/feature-block";
import { FeatureBlockEditor } from "@/components/blocks/feauture-block-editor";
import { FeatureBlockLibrary } from "@/components/blocks/feauture-block-library";
import { FeatureBlockProjects } from "@/components/blocks/feature-block-projects";
import { FeatureBlockTemplates } from "@/components/blocks/feauture-block-templates";
import { FeatureList } from "@/components/blocks/feature-list";
import Hero from "@/components/Hero";
import { FaqSection } from "@/components/sections/faq-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureBlock id="opportunities" />
      <FeatureBlockProjects id="projects" />
      <FeatureBlockEditor id="pages" />
      <FeatureBlockLibrary id="knowledge-base" />
      <FeatureBlockTemplates id="templates" />
      <FeatureList id="features" />
      <FaqSection id="faq" />
    </main>
  )
}
