// components/QuoteDropZone.tsx
'use client';

import { useDrop } from 'react-dnd';
import { QuoteCardData } from './QuoteCard';

interface QuoteDropZoneProps {
  onDrop: (item: QuoteCardData) => void;
}

export default function QuoteDropZone({ onDrop }: QuoteDropZoneProps) {
  const [{ isOver }, drop] = useDrop<QuoteCardData, void, { isOver: boolean }>(
    () => ({
      accept: 'QUOTE',
      drop: (item) => onDrop(item),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [onDrop]
  );

  return (
    <div
      ref={(node: HTMLDivElement | null) => {
        if (node) {
          drop(node);
        }
      }}
      className={`h-40 border-2 border-dashed rounded-lg p-4 flex items-center justify-center 
        ${isOver ? 'border-portal-gold bg-portal-gold/10' : 'border-mindscape-fg/50'}`}
    >
      {isOver ? (
        <p className="text-portal-gold">Drop here!</p>
      ) : (
        <p className="text-mindscape-fg/70">Drag quote here</p>
      )}
    </div>
  );
}
