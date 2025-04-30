'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface UnlockOverlayProps {
  open: boolean;
  scenarioName: string;
  onContinue: () => void;
}

export default function UnlockOverlay({
  open,
  scenarioName,
  onContinue,
}: UnlockOverlayProps) {
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
            className="bg-debate-panel p-8 rounded-3xl text-center relative"
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.8, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <h3 className="text-4xl font-bold text-portal-gold mb-4">
              New Scenario Unlocked!
            </h3>
            <p className="text-lg mb-6">{scenarioName}</p>
            <button
              onClick={onContinue}
              className="px-6 py-3 bg-portal-gold text-mindscape-bg rounded-full font-semibold hover:opacity-90 transition"
            >
              Continue
            </button>
            {/* Optional sparkles */}
            <span className="absolute top-3 left-3 w-4 h-4 bg-portal-gold rounded-full animate-ping" />
            <span className="absolute bottom-3 right-3 w-3 h-3 bg-portal-gold rounded-full animate-ping delay-150" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
