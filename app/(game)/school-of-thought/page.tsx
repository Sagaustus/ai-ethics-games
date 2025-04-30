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
    return <div className="text-center text-xl text-gray-700">Loading schools of thought...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">Select Your School of Thought</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map((school) => (
          <div
            key={school.slug}
            className="cursor-pointer bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleSelectSchool(school.slug)}
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">{school.name}</h2>
            <p className="text-gray-700">{school.description}</p>
             {/* Optional: Display school image */}
            {/* {school.image && <img src={school.image} alt={school.name} className="mt-4 w-full h-32 object-cover rounded" />} */}
          </div>
        ))}
      </div>

      {/* Optional: Back button or link */}
       <div className="mt-8">
            <Link href="/" className="text-blue-500 hover:underline">
                Back to Start
            </Link>
        </div>
    </div>
  );
};

export default SchoolOfThoughtSelectionPage;