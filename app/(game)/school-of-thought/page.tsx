// app/(game)/school-of-thought/page.tsx

'use client'; // This page requires client-side interactivity

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState';
import { SchoolOfThought } from '@/game/types'; // Import the SchoolOfThought type

/**
 * Page for selecting a school of thought.
 * Fetches schools from the API and allows the player to choose one.
 */
const SchoolOfThoughtSelectionPage: React.FC = () => {
  const [schools, setSchools] = useState<SchoolOfThought[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { setSchoolOfThought } = useGameState(); // Action to set the chosen school in state

  useEffect(() => {
    const fetchSchools = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch data from our planned API endpoint for schools of thought
        // We will create this API route later (e.g., /api/game/schools-of-thought)
        const response = await fetch('/api/game/schools-of-thought');

        if (!response.ok) {
          throw new Error(`Failed to fetch schools of thought: ${response.statusText}`);
        }

        const data: SchoolOfThought[] = await response.json();
        setSchools(data);
      } catch (err: any) {
        console.error("Error fetching schools of thought:", err);
        setError(err.message || "An error occurred while fetching schools of thought.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSchools();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleSelectSchool = (schoolSlug: string) => {
    setSchoolOfThought(schoolSlug); // Update game state
    router.push(`/character-selection/${schoolSlug}`); // Navigate to character selection for this school
  };

  if (isLoading) {
    return <div className="text-center text-xl text-mindscape-fg/80">Loading schools of thought...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-300">Error: {error}</div>;
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">Select Your School of Thought</h1>
        <p className="mt-3 text-mindscape-fg/80">Choose a framework to guide your arguments.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map((school) => (
          <div
            key={school.slug}
            className="cursor-pointer rounded-xl bg-debate-panel/60 border border-white/10 p-6 hover:border-portal-gold/40 hover:bg-debate-panel/70 transition"
            onClick={() => handleSelectSchool(school.slug)}
          >
            <h2 className="text-xl font-bold text-portal-gold">{school.name}</h2>
            <p className="mt-2 text-sm text-mindscape-fg/80">{school.description}</p>
             {/* Optional: Display school image */}
            {/* {school.image && <img src={school.image} alt={school.name} className="mt-4 w-full h-32 object-cover rounded" />} */}
          </div>
        ))}
      </div>

      {/* Optional: Back button or link */}
      <div className="mt-10 text-center">
        <Link href="/" className="hover:text-portal-gold transition-colors">
          Back to Start
        </Link>
      </div>
    </div>
  );
};

export default SchoolOfThoughtSelectionPage;