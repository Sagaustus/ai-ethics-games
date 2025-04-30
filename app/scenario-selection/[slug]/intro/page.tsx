// app/scenario-selection/[slug]/intro/page.tsx
'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import ComicFrame from '@/components/ComicFrame';
import { scenarios, Scenario } from '@/data/scenarios';
import { useGame } from '@/context/GameContext';

interface ScenarioIntroPageProps {
  params: { slug: string };
}

export const metadata = {
  title: 'Scenario Intro • Mindscape',
};

export default function ScenarioIntroPage({ params }: ScenarioIntroPageProps) {
  const { slug } = params;
  const { setScenario } = useGame();

  // Sync scenario into global context
  useEffect(() => {
    setScenario(slug);
  }, [slug, setScenario]);

  // Lookup scenario
  const scenarioData = scenarios.find((s) => s.slug === slug);
  if (!scenarioData) {
    notFound();
  }

  // Use scenario-specific fields or fallbacks
  const background =
    (scenarioData as Scenario & { backgroundImg?: string }).backgroundImg ||
    '/img/robot-judge.png';
  const caption =
    (scenarioData as Scenario & { introCaption?: string }).introCaption ||
    'Imagine a future where your fate is decided by code.';

  return (
    <div className="w-full h-screen">
      <ComicFrame background={background} caption={caption} />
    </div>
  );
}
