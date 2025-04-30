'use client';

import { useEffect, useState } from 'react';

interface EthicalThreatMeterProps {
  /** 0 (Low) → 1 (Extreme) */
  level: number;
  tags: string[];
}

export default function EthicalThreatMeter({ level, tags }: EthicalThreatMeterProps) {
  const radius = 80;
  const stroke = 16;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const dashOffset = circumference * (1 - level);
    setOffset(dashOffset);
  }, [circumference, level]);

  const label =
    level < 0.33 ? 'Low'
      : level < 0.66 ? 'Medium'
      : 'Extreme';

  return (
    <div className="flex flex-col items-center space-y-6 p-8 bg-debate-panel rounded-2xl max-w-sm mx-auto">
      <h2 className="text-2xl font-bold">Ethical Threat Meter</h2>
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        <defs>
          <linearGradient id="threatGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />     {/* green */}
            <stop offset="50%" stopColor="#eab308" />    {/* yellow */}
            <stop offset="100%" stopColor="#dc2626" />   {/* red */}
          </linearGradient>
        </defs>
        {/* Background circle */}
        <circle
          stroke="#374151"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Foreground arc */}
        <circle
          stroke="url(#threatGradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: 'stroke-dashoffset 0.8s ease-in-out' }}
        />
      </svg>
      <div className="text-xl font-semibold">{label}</div>
      <div className="flex space-x-2">
        {tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-mindscape-fg/10 text-mindscape-fg rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex justify-between w-full text-sm text-mindscape-fg/60">
        <span>Low</span>
        <span>Extreme</span>
      </div>
    </div>
  );
}
