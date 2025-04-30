// app/skin-unlock/page.tsx
'use client';

import { useState } from 'react';
import SkinUnlock from '@/components/SkinUnlock';

export const metadata = {
  title: 'Skin Unlock • Mindscape',
};

export default function SkinUnlockPage() {
  const [active, setActive] = useState(false);

  const handleActivate = () => {
    setActive(true);
    // TODO: persist skin selection (e.g. context, localStorage)
  };

  return (
    <div className="min-h-screen bg-mindscape-bg flex items-center justify-center p-8">
      {!active ? (
        <SkinUnlock
          skinName="Cyberpunk Aristotle"
          imageSrc="/img/cyberpunk-aristotle.png"
          onActivate={handleActivate}
        />
      ) : (
        <p className="text-2xl text-mindscape-fg">
          Skin applied! Enjoy your new look.
        </p>
      )}
    </div>
  );
}
