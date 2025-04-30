// components/ArgumentPhaseWrapper.tsx
'use client';

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import DebateBox from './DebateBox';
import DecisionTree from './DecisionTree';
import Timer from './Timer';
import ComboMeter from './ComboMeter';
import InterveneButton from './InterveneButton';
import MutationModal from './MutationModal';
import VotingOverlay, { Vote } from './VotingOverlay';
import PlotTwistOverlay from './PlotTwistOverlay';
import QuoteCard, { QuoteCardData } from './QuoteCard';
import QuoteDropZone from './QuoteDropZone';

interface ArgumentPhaseWrapperProps {
  scenarioSlug: string;
}

export default function ArgumentPhaseWrapper({ scenarioSlug }: ArgumentPhaseWrapperProps) {
  // Combo chain state
  const [comboChain, setComboChain] = useState<string[]>([]);

  // Intervene/twist state
  const [twistOpen, setTwistOpen] = useState(false);
  const [twists, setTwists] = useState<string[]>([]);

  // Voting overlay state
  const [votingOpen, setVotingOpen] = useState(false);

  // Plot twist overlay state
  const [plotTwistOpen, setPlotTwistOpen] = useState(false);

  // Quote drag-and-drop deck
  const quoteDeck: QuoteCardData[] = [
    { id: 'kant-maxim', text: '“Act only according to that maxim…” – Kant' },
    { id: 'utility-quote', text: '“The greatest happiness for the greatest number.” – Mill' },
    // add more cards as desired
  ];

  // Sample vote data (replace with real data)
  const sampleVotes: Vote[] = [
    { slug: 'kantian', name: 'Kantian', avatar: '/img/kantian.png', percent: 60 },
    { slug: 'utilitarianism', name: 'Utilitarianism', avatar: '/img/utilitarianism.png', percent: 40 },
  ];

  const handleSelectPrinciple = (principle: string) => {
    setComboChain(prev => [...prev, principle]);
  };

  const handleApplyTwist = (text: string) => {
    setTwists(prev => [...prev, text]);
    // TODO: integrate twist into argument logic
  };

  const handleDropQuote = (card: QuoteCardData) => {
    console.log('Dropped quote:', card);
    // TODO: integrate quote effect into argument logic
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="relative">
          {/* Pulsing Intervene Button */}
          <InterveneButton onClick={() => setTwistOpen(true)} />

          {/* Voting Overlay Trigger */}
          <button
            onClick={() => setVotingOpen(true)}
            className="fixed bottom-4 right-4 px-4 py-2 bg-portal-gold text-mindscape-bg rounded-full shadow-lg z-40"
          >
            Show Vote
          </button>

          {/* Main Debate Grid */}
          <div className="min-h-[80vh] p-8 grid grid-rows-[auto_1fr_auto] lg:grid-cols-3 lg:grid-rows-none gap-6">
            {/* Timer */}
            <div className="lg:col-span-3 flex justify-center mb-4">
              <Timer />
            </div>

            {/* Debate Box */}
            <div className="lg:col-span-2">
              <DebateBox scenarioSlug={scenarioSlug} />
            </div>

            {/* Decision Tree */}
            <div className="lg:col-span-1">
              <DecisionTree onSelect={handleSelectPrinciple} />
            </div>

            {/* Combo Meter */}
            <div className="lg:col-span-3">
              <ComboMeter chain={comboChain} />
            </div>
          </div>

          {/* Quote Deck */}
          <div className="mt-8 grid grid-cols-3 gap-4 px-8">
            {quoteDeck.map(card => (
              <QuoteCard key={card.id} card={card} />
            ))}
          </div>

          {/* Drop Zone */}
          <div className="mt-4 px-8">
            <QuoteDropZone onDrop={handleDropQuote} />
          </div>

          {/* Mutation (Twist) Modal */}
          <MutationModal
            open={twistOpen}
            onApply={handleApplyTwist}
            onClose={() => setTwistOpen(false)}
          />

          {/* Voting Overlay */}
          <VotingOverlay
            open={votingOpen}
            votes={sampleVotes}
            onContinue={() => setVotingOpen(false)}
          />
        </div>
      </DndProvider>

      {/* Plot Twist Interrupt */}
      <PlotTwistOverlay
        open={plotTwistOpen}
        message="BREAKING: The AI Judge Is Biased."
        onContinue={() => setPlotTwistOpen(false)}
      />
    </>
  );
}
