// components/ComboMeter.tsx
'use client';

interface ComboMeterProps {
  chain: string[];  // sequence of ethical principles applied
}

export default function ComboMeter({ chain }: ComboMeterProps) {
  return (
    <div className="flex items-center justify-center space-x-4 p-4 bg-debate-panel rounded-2xl">
      {chain.map((link, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-portal-gold text-mindscape-bg rounded-full text-sm font-medium"
        >
          {link}
        </span>
      ))}
      {chain.length > 1 && (
        <span className="ml-6 text-xl font-bold text-portal-gold">
          COMBO +{chain.length - 1}
        </span>
      )}
    </div>
  );
}