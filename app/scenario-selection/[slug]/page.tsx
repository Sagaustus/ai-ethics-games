// app/scenario-selection/[slug]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter, notFound } from 'next/navigation';
import ScenarioFlipCard from '@/components/ScenarioFlipCard';
import UnlockOverlay from '@/components/UnlockOverlay';
import { scenarios, Scenario } from '@/data/scenarios';
import { useGame } from '@/context/GameContext';

interface ScenarioDetailPageProps {
  params: { slug: string };
}

export default function ScenarioDetailPage({ params }: ScenarioDetailPageProps) {
  const { slug } = params;
  const router = useRouter();
  const { setScenario } = useGame();
  const [unlocked, setUnlocked] = useState(false);

  // Store the chosen scenario in global context
  useEffect(() => {
    setScenario(slug);
  }, [slug, setScenario]);

  // Lookup scenario data
  const scenarioData = scenarios.find((s) => s.slug === slug);
  if (!scenarioData) {
    notFound();
  }

  // Ensure we have a description field
  const fullScenario: Scenario & { description: string } = {
    ...scenarioData!,
    description: scenarioData!.description || '',
  };

  const handleContinue = () => {
    setUnlocked(false);
    router.push(`/argument-phase/${slug}`);
  };

  return (
    <div className="px-4 py-8 lg:px-16 relative">
      <ScenarioFlipCard scenario={fullScenario} />

      <div className="mt-8 text-center">
        <button
          onClick={() => setUnlocked(true)}
          className="px-6 py-3 bg-portal-gold text-mindscape-bg rounded-full font-semibold hover:opacity-90 transition"
        >
          Unlock Scenario
        </button>
      </div>

      <UnlockOverlay
        open={unlocked}
        scenarioName={scenarioData!.name}
        onContinue={handleContinue}
      />
    </div>
  );
}
