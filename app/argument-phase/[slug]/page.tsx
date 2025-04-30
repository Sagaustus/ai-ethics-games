// app/argument-phase/[slug]/page.tsx
'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import ArgumentPhaseWrapper from '@/components/ArgumentPhaseWrapper';
import { scenarios } from '@/data/scenarios';
import { useGame } from '@/context/GameContext';

interface Params {
  slug: string;
}

export default function ArgumentPhasePage({ params }: { params: Params }) {
  const { slug } = params;
  const { setScenario } = useGame();

  // Sync the scenario slug into global context
  useEffect(() => {
    setScenario(slug);
  }, [slug, setScenario]);

  // Verify the slug corresponds to a real scenario
  const exists = scenarios.some((s) => s.slug === slug);
  if (!exists) {
    notFound();
  }

  return <ArgumentPhaseWrapper scenarioSlug={slug} />;
}
