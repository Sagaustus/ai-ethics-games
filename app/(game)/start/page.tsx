// app/(game)/start/page.tsx

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';

/**
 * Optional alternative landing/start page for the game flow.
 * The canonical landing page is `app/page.tsx` (Hero).
 */
const GameStartPage: React.FC = () => {
  const router = useRouter();
  const { resetGame } = useGameState();

  const handleStartGame = () => {
    // If you want a clean start for every run, uncomment:
    // resetGame();
    router.push('/school-of-thought');
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-portal-gold">MindScape: AI Ethics Game</h1>
      <p className="mt-4 text-lg text-mindscape-fg/80">
        Explore the complex ethical dilemmas of Artificial Intelligence. Choose your school of thought and debate your
        way through challenging scenarios.
      </p>

      <button
        onClick={handleStartGame}
        className="mt-8 inline-flex items-center justify-center rounded-md bg-portal-gold px-8 py-4 text-lg font-bold text-black hover:opacity-90 transition"
      >
        Start Your Ethical Journey
      </button>

      <div className="mt-8 flex items-center justify-center gap-6">
        <Link href="/codex" className="hover:text-portal-gold transition-colors">
          Explore the Codex
        </Link>
        <Link href="/public-debates" className="hover:text-portal-gold transition-colors">
          View Public Debates
        </Link>
      </div>
    </div>
  );
};

export default GameStartPage;
