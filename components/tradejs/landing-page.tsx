'use client';

import { Header } from './header';
import { Hero } from './hero';
import { TradingModels } from './trading-models';
import { StrategyAuthoring } from './strategy-authoring';
import { MarketplacePreview } from './marketplace-preview';
import { McpAccess } from './mcp-access';
import { Execution } from './execution';
import { DeveloperExperience } from './developer-experience';
import { FinalCta } from './final-cta';
import { Footer } from './footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TradingModels />
        <StrategyAuthoring />
        <MarketplacePreview />
        <DeveloperExperience />
        <McpAccess />
        <Execution />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
