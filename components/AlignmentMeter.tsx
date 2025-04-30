// components/AlignmentMeter.tsx
'use client';

import React from 'react';

interface AlignmentMeterProps {
  /** 0 (far left) → 1 (far right) */
  value: number;
  /** [leftLabel, rightLabel] */
  labels: [string, string];
}

export default function AlignmentMeter({ value, labels }: AlignmentMeterProps) {
  const radius = 80;
  const strokeWidth = 10;
  const center = radius + strokeWidth;
  const size = radius * 2 + strokeWidth * 2;

  // Map value [0,1] to angle [-90°, +90°]
  const angle = -90 + value * 180;
  const rad = (angle * Math.PI) / 180;
  const needleLength = radius - strokeWidth;

  const x2 = center + needleLength * Math.cos(rad);
  const y2 = center + needleLength * Math.sin(rad);

  return (
    <div className="flex flex-col items-center bg-debate-panel p-8 rounded-2xl max-w-xs mx-auto">
      <h2 className="text-2xl font-bold mb-4">Alignment Meter</h2>
      <svg width={size} height={size} className="mb-4">
        {/* Background semicircle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#374151"
          strokeWidth={strokeWidth}
        />
        {/* Needle */}
        <line
          x1={center}
          y1={center}
          x2={x2}
          y2={y2}
          stroke="#portal-gold"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </svg>
      <div className="flex justify-between w-full text-sm text-mindscape-fg">
        <span>{labels[0]}</span>
        <span>{labels[1]}</span>
      </div>
    </div>
  );
}
