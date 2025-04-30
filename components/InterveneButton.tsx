// components/InterveneButton.tsx
'use client';

import { motion } from 'framer-motion';

export default function InterveneButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
      className="fixed top-4 right-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg z-50"
    >
      INTERVENE
    </motion.button>
  );
}
