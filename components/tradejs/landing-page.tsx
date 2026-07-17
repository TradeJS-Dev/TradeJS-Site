'use client';

import { LocaleProvider } from './locale-provider';
import { Header } from './header';
import { Hero } from './hero';
import { TradingModels } from './trading-models';
import { StrategyAuthoring } from './strategy-authoring';
import { Execution } from './execution';
import { DeveloperExperience } from './developer-experience';
import { FinalCta } from './final-cta';
import { Footer } from './footer';

export function LandingPage() {
  return (
    <LocaleProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <TradingModels />
          <StrategyAuthoring />
          <DeveloperExperience />
          <Execution />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
