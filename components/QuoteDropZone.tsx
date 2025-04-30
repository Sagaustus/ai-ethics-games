// components/QuoteDropZone.tsx
'use client';

import { useDrop } from 'react-dnd';
import { QuoteCardData } from './QuoteCard';

interface QuoteDropZoneProps {
  onDrop: (card: QuoteCardData) => void;
}

export default function QuoteDropZone({ onDrop }: QuoteDropZoneProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'QUOTE',
    drop: (item: QuoteCardData) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }), [onDrop]);

  return (
    <div
      ref={drop}
      className={`h-40 border-2 border-dashed rounded-lg p-4 flex items-center justify-center
        ${isOver ? 'border-portal-gold bg-portal-gold/10' : 'border-mindscape-fg/50'}`}
    >
      {isOver ? (
        <span className="text-portal-gold font-semibold">Release to Cast Quote</span>
      ) : (
        <span className="text-mindscape-fg/80">Drag quote here</span>
      )}
    </div>
  );
}
