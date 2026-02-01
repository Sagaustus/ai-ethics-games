/* components/ScenarioExplorer.tsx */

'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export interface ScenarioExplorerProps {
  scenario: {
    title: string;
    description: string;
    link: string;
    image: string;
    tags: string[];
    exploration: {
      text: string;
      choices: { text: string; outcome: string }[];
      outcome?: string;
    }[];
    endMessage: string;
  };
  character: string;
}

const ScenarioExplorer: React.FC<ScenarioExplorerProps> = ({ scenario, character }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const hasSteps = scenario.exploration.length > 0;
  const currentStep = hasSteps ? scenario.exploration[currentStepIndex] : null;

  const handleChoiceClick = (outcome: string) => {
    if (!hasSteps) return;

    // Find the next step based on the selected choice outcome
    const nextStepIndex = scenario.exploration.findIndex(
      (step) => step.outcome === outcome
    );

    if (nextStepIndex !== -1) {
      setCurrentStepIndex(nextStepIndex);
    } else {
      setCurrentStepIndex(scenario.exploration.length - 1); // Go to the end if no match
    }
  };

  const isEnd = hasSteps && currentStepIndex === scenario.exploration.length - 1;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">{scenario.title}</h1>
        <p className="mt-3 text-mindscape-fg/80 italic">{scenario.description}</p>
        <p className="mt-2 text-mindscape-fg/80">
          <span className="font-semibold text-mindscape-fg">Character:</span> {character}
        </p>
      </div>

      {scenario.image && (
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-debate-panel/40">
          <Image
            src={scenario.image}
            alt={scenario.title}
            width={1000}
            height={560}
            className="w-full h-auto object-cover"
            unoptimized={scenario.image.startsWith('http')}
          />
        </div>
      )}

      <div className="mt-8 rounded-2xl bg-debate-panel/60 border border-white/10 p-6 text-left">
        {!currentStep && (
          <p className="text-mindscape-fg/80">No exploration steps available for this scenario yet.</p>
        )}
        {currentStep && (
          <p className="text-mindscape-fg/90 leading-relaxed">{currentStep.text}</p>
        )}
      </div>

      {currentStep?.choices?.length ? (
        <div className="mt-6 flex flex-col gap-3">
          {currentStep.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoiceClick(choice.outcome)}
              className="rounded-xl border border-portal-gold/25 bg-black/30 px-4 py-3 text-left text-portal-gold transition hover:border-portal-gold/60 hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portal-gold/60"
            >
              {choice.text}
            </button>
          ))}
        </div>
      ) : null}

      {isEnd && scenario.endMessage && (
        <div className="mt-10 text-center text-portal-gold">
          <p className="text-lg font-semibold">{scenario.endMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ScenarioExplorer;

