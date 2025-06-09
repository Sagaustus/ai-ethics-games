'use client';

import Image from 'next/image';
import React from 'react';

export interface PublicDebate {
  id: string;
  title: string;
  avatar: string;
  replayTime: string;
}

interface PublicDebateListProps {
  debates: PublicDebate[];
}

export default function PublicDebateList({ debates }: PublicDebateListProps) {
  return (
    <div className="bg-debate-panel p-6 rounded-2xl space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Public Debates</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {debates.map((d) => (
          <div
            key={d.id}
            className="flex items-center bg-mindscape-bg/30 p-4 rounded-lg"
          >
            <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
              <Image
                src={d.avatar}
                alt={d.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-mindscape-fg">{d.title}</h3>
              <p className="text-sm text-mindscape-fg/70">{d.replayTime}</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-portal-gold text-mindscape-bg rounded-md text-sm">
                Watch
              </button>
              <button className="px-3 py-1 bg-gray-600 text-mindscape-fg rounded-md text-sm">
                Upvote
              </button>
              <button className="px-3 py-1 bg-gray-600 text-mindscape-fg rounded-md text-sm">
                Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
