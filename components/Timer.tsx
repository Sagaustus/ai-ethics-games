'use client';

import { useEffect, useState } from 'react';

export default function Timer({ initialSeconds = 60 }: { initialSeconds?: number }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [seconds]);

  return (
    <div className="px-4 py-2 bg-debate-panel rounded-full text-center w-24 mx-auto">
      <span className="font-mono text-xl">{seconds}s</span>
    </div>
  );
}
