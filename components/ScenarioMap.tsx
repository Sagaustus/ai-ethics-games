// components/ScenarioMap.tsx
'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { scenarios } from '@/data/scenarios'; // adjust path if needed

export default function ScenarioMap() {
  const router = useRouter();

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Choose a Scenario</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {scenarios.map((sc) => (
          <button
            key={sc.slug}
            onClick={() => router.push(`/scenario-selection/${sc.slug}`)}
            className="group relative flex flex-col items-center bg-debate-panel p-4 rounded-2xl hover:shadow-xl transition cursor-pointer"
          >
            <div className="w-24 h-24 mb-4 relative">
              <Image
                src={sc.icon || '/img/scenario-placeholder.png'}
                alt={sc.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-semibold group-hover:text-portal-gold transition">
              {sc.name}
            </span>
          </button>
        ))}
      </div>
    </div>
);
}
