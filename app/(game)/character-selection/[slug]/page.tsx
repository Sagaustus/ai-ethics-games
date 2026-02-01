// app/(game)/character-selection/[slug]/page.tsx

'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation'; // Use from next/navigation
import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState';
import { Character } from '@/game/types'; // Import the Character type

interface CharacterSelectionPageProps {
  // Next.js App Router passes route parameters in `params`
  params: {
    slug: string; // The school of thought slug
  };
}

/**
 * Page for selecting a character based on the chosen school of thought.
 * Fetches characters from the API for the given school slug.
 */
const CharacterSelectionPage: React.FC<CharacterSelectionPageProps> = () => {
  const { slug: schoolSlug } = useParams(); // Get the school slug from the URL
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { setCharacter } = useGameState(); // Action to set the chosen character in state

  useEffect(() => {
    const fetchCharacters = async () => {
      if (!schoolSlug) {
        setError("School of thought not specified.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      setCharacters([]); // Clear previous characters

      try {
        // Assuming an API endpoint for fetching characters by school slug
        // We will need to create this API route later (e.g., /api/game/characters?schoolSlug=...)
        const response = await fetch(`/api/game/characters?schoolSlug=${schoolSlug}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch characters: ${response.statusText}`);
        }

        const data: Character[] = await response.json();
        setCharacters(data);
      } catch (err: any) {
        console.error("Error fetching characters:", err);
        setError(err.message || "An error occurred while fetching characters.");
        setCharacters([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [schoolSlug]); // Re-run effect if schoolSlug changes

  const handleSelectCharacter = (characterSlug: string) => {
    setCharacter(characterSlug); // Update game state
    router.push('/scenario-selection'); // Navigate to scenario selection page
  };

  if (isLoading) {
    return <div className="text-center text-xl text-mindscape-fg/80">Loading characters...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-300">Error: {error}</div>;
  }

  if (characters.length === 0) {
      return (
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12 text-center">
            <p className="text-xl text-mindscape-fg/80">No characters found for this school of thought.</p>
            <div className="mt-8">
              <Link href="/school-of-thought" className="hover:text-portal-gold transition-colors">
                Back to School Selection
              </Link>
            </div>
          </div>
      );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">Select Your Character</h1>
        <p className="mt-3 text-mindscape-fg/80">Pick who will represent your arguments.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <div
            key={character.slug}
            className="cursor-pointer rounded-xl bg-debate-panel/60 border border-white/10 p-6 hover:border-portal-gold/40 hover:bg-debate-panel/70 transition"
            onClick={() => handleSelectCharacter(character.slug)}
          >
            <h2 className="text-xl font-bold text-portal-gold">{character.name}</h2>
            <p className="mt-2 text-sm text-mindscape-fg/80">{character.description}</p>
            {/* Optional: Display character avatar */}
            {/* {character.avatar && <img src={character.avatar} alt={character.name} className="mt-4 w-full h-32 object-cover rounded" />} */}
          </div>
        ))}
      </div>

      {/* Back button */}
      <div className="mt-10 text-center">
        <Link href="/school-of-thought" className="hover:text-portal-gold transition-colors">
          Back to School Selection
        </Link>
      </div>
    </div>
  );
};

export default CharacterSelectionPage;