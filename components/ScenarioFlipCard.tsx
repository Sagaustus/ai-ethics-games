'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Scenario } from '@/data/scenarios';

interface ScenarioFlipCardProps {
  scenario: Scenario & { description: string };
}

const cardVariants = {
  hidden: { rotateY: 0 },
  flipped: { rotateY: 180 },
};

export default function ScenarioFlipCard({ scenario }: ScenarioFlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-full max-w-md mx-auto">
      <motion.div
        className="relative w-full h-64"
        variants={cardVariants}
        animate={flipped ? 'flipped' : 'hidden'}
        transition={{ duration: 0.8 }}
        style={{ transformStyle: 'preserve-3d' }}
        onClick={() => setFlipped((p) => !p)}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 bg-debate-panel rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-20 h-20 mb-4 relative">
            <Image
              src={scenario.icon || '/img/scenario-placeholder.png'}
              alt={scenario.name}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold">{scenario.name}</h3>
          <p className="mt-2 text-sm text-mindscape-fg/80">Click to reveal</p>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 bg-mindscape-bg rounded-2xl p-6 overflow-auto"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3 className="text-2xl font-bold mb-2">{scenario.name}</h3>
          <p className="text-mindscape-fg/90">{scenario.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
