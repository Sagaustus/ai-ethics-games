// components/SchoolPicker.tsx
'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { schoolsOfThought } from '@/data/schoolsOfThought';
import { useGame } from '@/context/GameContext';

export default function SchoolPicker() {
  const router = useRouter();
  const { setSchool } = useGame();

  const handleSelect = (slug: string) => {
    setSchool(slug);
    router.push(`/character-selection/${slug}`);
  };

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {schoolsOfThought.map((school) => (
        <button
          key={school.slug}
          onClick={() => handleSelect(school.slug)}
          className="flex flex-col items-center bg-debate-panel p-6 rounded-2xl hover:shadow-lg transition cursor-pointer"
        >
          <Image
            src={school.image}
            alt={school.name}
            width={120}
            height={120}
            className="rounded-full mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">{school.name}</h3>
          <p className="text-sm text-mindscape-fg/80 text-center">
            {school.description}
          </p>
        </button>
      ))}
    </div>
  );
}
