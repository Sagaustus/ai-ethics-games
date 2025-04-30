// app/scenario-selection/[slug]/meter/page.tsx
'use client';

import { useEffect } from 'react';
import { useGame } from '@/context/GameContext';
import { notFound } from 'next/navigation';
import EthicalThreatMeter from '@/components/EthicalThreatMeter';
import { scenarios } from '@/data/scenarios';

interface Params { slug: string }

export const metadata = {
  title: 'Threat Meter • Mindscape',
}

export default function ScenarioMeterPage({ params }: { params: Params }) {
  const { slug } = params;
  const { setScenario } = useGame();

  // Sync selected scenario into global context
  useEffect(() => {
    setScenario(slug);
  }, [slug, setScenario]);

  // Verify the scenario exists
  const scenario = scenarios.find((s) => s.slug === slug);
  if (!scenario) {
    notFound();
  }

  // Demo threat levels per scenario (override with real logic/data)
  const demoLevels: Record<string, number> = {
    'the-watchful-eye':        0.4,
    'the-self-driving-dilemma':0.7,
    'the-censored-world':      0.5,
    // …other mappings…
  };
  const level = demoLevels[slug] ?? 0.6;

  // Example tags—you can pull these from your scenario data later
  const tags = ['Autonomy', 'Justice', 'Transparency'];

  return (
    <div className="min-h-screen bg-mindscape-bg flex items-center justify-center p-8">
      <EthicalThreatMeter level={level} tags={tags} />
    </div>
  );
}
