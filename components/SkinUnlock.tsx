'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SkinUnlockProps {
  skinName: string;
  imageSrc: string;
  onActivate: () => void;
}

export default function SkinUnlock({
  skinName,
  imageSrc,
  onActivate,
}: SkinUnlockProps) {
  return (
    <div className="bg-debate-panel p-8 rounded-2xl max-w-xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-portal-gold mb-4">
        NEW SKIN UNLOCKED
      </h2>
      <motion.div
        className="mx-auto w-48 h-48 relative mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Image
          src={imageSrc}
          alt={skinName}
          fill
          className="object-cover rounded-full border-4 border-portal-gold"
        />
      </motion.div>
      <p className="text-xl mb-6">{skinName}</p>
      <button
        onClick={onActivate}
        className="px-6 py-3 bg-portal-gold text-mindscape-bg rounded-full font-semibold hover:opacity-90 transition"
      >
        Set as Active Philosopher
      </button>
    </div>
  );
}
