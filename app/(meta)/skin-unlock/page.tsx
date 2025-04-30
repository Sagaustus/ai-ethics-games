// app/(meta)/skin-unlock/page.tsx

'use client'; // This page requires client-side interactivity

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState'; // Access player's unlocked skins
// import { Skin } from '@/game/types'; // Assuming a Skin type will be defined

// Define a type for a Skin (illustrative)
interface Skin {
    slug: string;
    name: string;
    description: string;
    imageUrl: string; // Image of the skin
    unlockedCriteria?: string; // Description of how to unlock
    // Add other skin attributes
}

/**
 * Page to display and manage unlockable character skins.
 * Fetches available skins and shows which ones the player has unlocked.
 */
const SkinUnlockPage: React.FC = () => {
  const [availableSkins, setAvailableSkins] = useState<Skin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Access the current player's unlocked skins from game state
  const { player, setCharacter /* Assuming an action to change equipped skin */ } = useGameState();
  const unlockedSkinSlugs = player.inventory || []; // Assuming inventory stores unlocked skin slugs

  useEffect(() => {
    const fetchSkins = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Assuming an API endpoint that returns a list of all available skins
        // We will need to create this API route later (e.g., /api/game/skins)
        const response = await fetch('/api/game/skins');

        if (!response.ok) {
          throw new Error(`Failed to fetch skins: ${response.statusText}`);
        }

        const data: Skin[] = await response.json();
        setAvailableSkins(data);
      } catch (err: any) {
        console.error("Error fetching skins:", err);
        setError(err.message || "An error occurred while fetching skins.");
        setAvailableSkins([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkins();
  }, []); // Effect runs once on mount to fetch skin data


  const isSkinUnlocked = (skinSlug: string): boolean => {
    return unlockedSkinSlugs.includes(skinSlug);
  };

  const handleEquipSkin = (skinSlug: string) => {
      if (isSkinUnlocked(skinSlug)) {
          console.log("Equipping skin:", skinSlug);
           // TODO: Implement logic to change the player's equipped skin
           // This might involve updating player state in Zustand and/or updating the backend
           // setCharacter(player.character, skinSlug); // Example: if setCharacter handled equipping skin
      } else {
          console.log("Skin not unlocked:", skinSlug);
          // Optionally show a message or guide user to unlock criteria
      }
  };


  if (isLoading) {
    return <div className="text-center text-xl text-gray-700">Loading skins...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error loading skins: {error}</div>;
  }

   if (availableSkins.length === 0 && !isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
                <p className="text-xl text-gray-700">No skins available yet.</p>
                 <div className="mt-8">
                    <Link href="/" className="text-blue-500 hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }


  return (
    <div className="flex flex-col items-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">Unlock & Manage Skins</h1>

      <div className="mb-8 text-lg text-gray-800">
        <p>Personalize your character with different skins!</p>
      </div>

      {/* Display Available Skins */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableSkins.map((skin) => (
          <div key={skin.slug} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
             {/* Optional: Display skin image */}
             {skin.imageUrl && (
                 <img src={skin.imageUrl} alt={skin.name} className="w-full h-40 object-cover rounded mb-4"/>
             )}
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">{skin.name}</h2>
            <p className="text-gray-700 text-sm">{skin.description}</p>

            <div className="mt-4 w-full">
              {isSkinUnlocked(skin.slug) ? (
                <button
                  onClick={() => handleEquipSkin(skin.slug)}
                  className="px-6 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors duration-300 w-full"
                >
                  Equip Skin
                </button>
              ) : (
                <div className="text-gray-600 text-sm italic">
                  Unlock Criteria: {skin.unlockedCriteria || 'Complete a specific challenge/achievement'}
                   {/* Optional: Add button linking to challenge/achievement */}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>


       {/* Back to home link */}
       <div className="mt-8">
            <Link href="/" className="text-blue-500 hover:underline">
                Back to Home
            </Link>
        </div>
    </div>
  );
};

export default SkinUnlockPage;