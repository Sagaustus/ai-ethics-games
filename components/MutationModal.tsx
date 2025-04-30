// components/MutationModal.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface MutationModalProps {
  open: boolean;
  onApply: (text: string) => void;
  onClose: () => void;
}

export default function MutationModal({ open, onApply, onClose }: MutationModalProps) {
  const [text, setText] = useState('What if the subject was a child?');

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
            className="bg-debate-panel p-6 rounded-2xl max-w-md w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <h3 className="text-xl font-bold mb-4">Twist the Scenario</h3>
            <textarea
              className="w-full h-24 p-2 rounded-lg bg-mindscape-bg border border-gray-600 text-mindscape-fg"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="mt-4 flex justify-end space-x-4">
              <button onClick={onClose} className="px-4 py-2">
                Cancel
              </button>
              <button
                onClick={() => {
                  onApply(text);
                  onClose();
                }}
                className="px-4 py-2 bg-portal-gold text-mindscape-bg rounded-lg"
              >
                Apply
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
