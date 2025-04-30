// components/ScenarioCard.tsx
import Image from 'next/image'
import { Scenario } from '@/data/scenarios'

interface ScenarioCardProps {
  scenario: Scenario
}

export default function ScenarioCard({ scenario }: ScenarioCardProps) {
  return (
    <div className="max-w-xl mx-auto bg-debate-panel p-6 rounded-2xl shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 relative mr-4">
          <Image
            src={scenario.icon || '/img/scenario-placeholder.png'}
            alt={scenario.name}
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold">{scenario.name}</h2>
      </div>
      <p className="text-mindscape-fg/80 mb-6">
        {scenario.description ||
          'Engage with this ethical dilemma and prepare your arguments.'}
      </p>
      <button className="px-6 py-3 bg-portal-gold text-mindscape-bg rounded-full font-semibold hover:opacity-90 transition">
        Unlock Scenario
      </button>
    </div>
  )
}
