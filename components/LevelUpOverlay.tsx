// components/LevelUpOverlay.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface LevelUpOverlayProps {
  open: boolean;
  newRank: string;
  avatarSrc: string;
  onClose: () => void;
}

export default function LevelUpOverlay({
  open,
  newRank,
  avatarSrc,
  onClose,
}: LevelUpOverlayProps) {
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
            className="relative bg-debate-panel p-8 rounded-3xl text-center overflow-hidden"
            initial={{ scale: 0.5, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, rotate: 15 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            {/* Glowing streaks */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
            >
              <div className="w-full h-full bg-gradient-to-tr from-portal-gold/30 via-transparent to-portal-gold/10 mix-blend-screen animate-pulse" />
            </motion.div>

            <motion.h2
              className="relative text-6xl font-extrabold text-portal-gold mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              LEVEL UP!
            </motion.h2>
            <motion.div
              className="relative mx-auto mb-4 w-32 h-32"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
            >
              <Image
                src={avatarSrc}
                alt="Avatar"
                fill
                className="object-cover rounded-full border-4 border-portal-gold"
              />
            </motion.div>
            <motion.p
              className="relative text-xl text-mindscape-fg mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              You’ve reached <span className="font-semibold">{newRank}</span>
            </motion.p>
            <motion.button
              className="relative px-8 py-3 bg-portal-gold text-mindscape-bg rounded-full font-semibold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              onClick={onClose}
            >
              Continue
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
