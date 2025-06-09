// app/(game)/page.tsx

'use client'; // This page will have client-side interactivity (e.g., button click)

import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Use from next/navigation in App Router
import { useGameState } from '@/hooks/useGameState'; // Import our custom hook for state

/**
 * The main landing/start page for the game.
 * Provides an introduction and a button to begin the game.
 */
const GameStartPage: React.FC = () => {
  const router = useRouter();
  const { resetGame } = useGameState(); // Get the resetGame action from our store (will be added later)

  const handleStartGame = () => {
    // resetGame(); // Reset game state when starting a new game (uncomment when resetGame action is added to store)
    router.push('/school-of-thought'); // Navigate to the school selection page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gray-100"> {/* Added a background color for visibility */}
      {/* Replace with your actual game title and hero section if available */}
      {/* Example using a simple h1 and p */}
      <h1 className="text-5xl font-bold text-blue-600 mb-4">MindScape: AI Ethics Game</h1>
      <p className="text-xl text-gray-700 mb-8">
        Explore the complex ethical dilemmas of Artificial Intelligence.
        Choose your school of thought and debate your way through challenging scenarios.
      </p>

      {/* Button to start the game */}
      <button
        onClick={handleStartGame}
        className="px-8 py-4 bg-yellow-500 text-white text-2xl font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
      >
        Start Your Ethical Journey
      </button>

       {/* Optional: Link to other sections like Codex or Public Debates */}
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
