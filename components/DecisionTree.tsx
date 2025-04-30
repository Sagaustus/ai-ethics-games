'use client';

interface DecisionTreeProps {
  onSelect: (principle: string) => void;
}

const principles = [
  'Appeal to Consequence',
  'Challenge Premise',
  'Use Philosophical Quote',
  'Invoke Categorical Imperative',
  'Maximize Utility',
];

export default function DecisionTree({ onSelect }: DecisionTreeProps) {
  return (
    <div className="bg-debate-panel p-4 rounded-2xl space-y-4">
      <h3 className="text-xl font-semibold mb-2">Your Response</h3>
      {principles.map((p) => (
        <button
          key={p}
          onClick={() => onSelect(p)}
          className="w-full text-left px-4 py-2 bg-mindscape-bg hover:bg-mindscape-bg/50 rounded-lg transition"
        >
          {p}
        </button>
      ))}
    </div>
  );
}
