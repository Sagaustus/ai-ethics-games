// app/rewind/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import RewindScenario from '@/components/RewindScenario';

export const metadata = {
  title: 'Rewind Scenario • Mindscape',
};

export default function RewindPage() {
  const router = useRouter();

  const handleSelect = (philosopher: string) => {
    // e.g. navigate back into argument phase with query params
    router.push(`/argument-phase?replay=${philosopher}`);
  };

  return (
    <div className="min-h-screen bg-mindscape-bg flex items-center justify-center p-8">
      <RewindScenario onSelect={handleSelect} />
    </div>
  );
}
