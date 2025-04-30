// components/AchievementModal.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';

interface AchievementModalProps {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

export default function AchievementModal({
  open,
  title,
  description,
  onClose,
}: AchievementModalProps) {
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
            className="bg-debate-panel p-8 rounded-3xl text-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <h3 className="text-3xl font-extrabold text-portal-gold mb-4">
              Achievement Unlocked!
            </h3>
            <p className="text-xl mb-6">{title}</p>
            <p className="text-mindscape-fg/80 mb-6">{description}</p>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-portal-gold text-mindscape-bg rounded-full font-semibold"
            >
              Claim Reward
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
