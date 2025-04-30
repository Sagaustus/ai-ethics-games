'use client';

import Image from 'next/image';

interface DebateBoxProps {
  scenarioSlug: string;
}

export default function DebateBox({ scenarioSlug }: DebateBoxProps) {
  // TODO: fetch or compute current arguments and health values
  const aiHealth = 75;        // out of 100
  const playerHealth = 90;    // out of 100
  const aiArgument = "AI Judge: “Your reliance on subjective virtue lacks universal enforceability.”";

  return (
    <div className="space-y-6">
      {/* Health Bars */}
      <div className="flex justify-between items-center">
        <div className="w-1/2 mr-2">
          <div className="text-sm mb-1">Ethical Integrity</div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div
              className="bg-portal-gold h-4 rounded-full"
              style={{ width: `${playerHealth}%` }}
            />
          </div>
        </div>
        <div className="w-1/2 ml-2">
          <div className="text-sm mb-1 text-right">Public Persuasion</div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div
              className="bg-red-500 h-4 rounded-full"
              style={{ width: `${100 - aiHealth}%` }}
            />
          </div>
        </div>
      </div>

      {/* AI Argument */}
      <div className="bg-debate-panel p-6 rounded-2xl relative">
        <div className="absolute -top-6 left-6 w-12 h-12">
          <Image
            src={`/img/ai-avatar.png`}
            alt="AI Judge"
            width={48}
            height={48}
            className="rounded-full border-2 border-portal-gold"
          />
        </div>
        <p className="ml-16 text-mindscape-fg/90 italic">{aiArgument}</p>
      </div>
    </div>
);
}
