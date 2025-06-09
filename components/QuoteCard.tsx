// components/QuoteCard.tsx
'use client';

import { useDrag } from 'react-dnd';

export interface QuoteCardData {
  id: string;
  text: string;
}

interface QuoteCardProps {
  card: QuoteCardData;
}

export default function QuoteCard({ card }: QuoteCardProps) {
  // `useDrag` returns a drag ref compatible with the `ref` prop
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'QUOTE',
    item: card,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [card]);

  return (
    <div
      ref={dragRef}
      className={`p-4 bg-mindscape-fg/10 border border-mindscape-fg rounded-lg cursor-move select-none 
        ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <p className="text-sm">{card.text}</p>
    </div>
  );
}
