// components/VotingOverlay.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export interface Vote {
  slug: string;
  name: string;
  avatar: string;
  percent: number;
}

interface VotingOverlayProps {
  open: boolean;
  votes: Vote[];
  onContinue: () => void;
}

export default function VotingOverlay({ open, votes, onContinue }: VotingOverlayProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-debate-panel p-6 rounded-2xl max-w-lg w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <h3 className="text-2xl font-bold text-portal-gold mb-4">
              Observers’ Vote
            </h3>
            <div className="space-y-4">
              {votes.map((vote) => (
                <div key={vote.slug} className="flex items-center space-x-4">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={vote.avatar}
                      alt={vote.name}
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{vote.name}</span>
                      <span className="font-medium">{vote.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="bg-portal-gold h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${vote.percent}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                  <motion.span
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: -10, opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="text-2xl"
                  >
                    👏
                  </motion.span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={onContinue}
                className="px-6 py-3 bg-portal-gold text-mindscape-bg rounded-full font-semibold hover:opacity-90 transition"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
