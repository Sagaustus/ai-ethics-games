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
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">MindScape: AI Ethics Game</h1>
      <p className="text-xl text-gray-700 mb-8">
        Explore the complex ethical dilemmas of Artificial Intelligence. Choose your school of thought and debate your
        way through challenging scenarios.
      </p>

      <button
        onClick={handleStartGame}
        className="px-8 py-4 bg-yellow-500 text-white text-2xl font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
      >
        Start Your Ethical Journey
      </button>

      <div className="mt-8">
        <Link href="/codex" className="text-blue-500 hover:underline mx-2">
          Explore the Codex
        </Link>
        <Link href="/public-debates" className="text-blue-500 hover:underline mx-2">
          View Public Debates
        </Link>
      </div>
    </div>
  );
};

export default GameStartPage;
