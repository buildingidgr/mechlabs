import React from "react";

import { FeatureBlock } from "@/components/blocks/feature-block";
import { FeatureBlockProjects } from "@/components/blocks/feature-block-projects";
import { FeatureList } from "@/components/blocks/feature-list";
import { FeatureBlockEditor } from "@/components/blocks/feauture-block-editor";
import { FeatureBlockLibrary } from "@/components/blocks/feauture-block-library";
import { FeatureBlockTemplates } from "@/components/blocks/feauture-block-templates";
import Hero from "@/components/Hero";
import { FaqSection } from "@/components/sections/faq-section";


export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureBlock id="projects" />
      <FeatureBlockProjects id="pages" />
      <FeatureBlockEditor id="knowledge-base" />
      <FeatureBlockLibrary id="library" />
      <FeatureBlockTemplates id="templates" />
      <FeatureList id="features" />
      <FaqSection id="faq" />
    </main>
  )
}
