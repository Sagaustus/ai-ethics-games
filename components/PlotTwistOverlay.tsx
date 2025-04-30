// components/PlotTwistOverlay.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';

interface PlotTwistOverlayProps {
  open: boolean;
  message: string;
  onContinue: () => void;
}

export default function PlotTwistOverlay({
  open,
  message,
  onContinue,
}: PlotTwistOverlayProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-debate-panel p-8 rounded-3xl text-center relative overflow-hidden"
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* Glitch effect */}
            <div className="absolute inset-0 mix-blend-screen opacity-20 animate-pulse bg-gradient-to-r from-red-500 via-transparent to-blue-500" />

            <h3 className="relative text-5xl font-extrabold text-red-500 mb-4">
              PLOT TWIST
            </h3>
            <p className="relative text-lg text-mindscape-fg mb-6">{message}</p>
            <button
              onClick={onContinue}
              className="relative px-6 py-3 bg-portal-gold text-mindscape-bg rounded-full font-semibold hover:opacity-90 transition"
            >
              Continue
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
