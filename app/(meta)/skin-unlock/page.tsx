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
    return <div className="text-center text-xl text-mindscape-fg/80">Loading skins...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-300">Error loading skins: {error}</div>;
  }

   if (availableSkins.length === 0 && !isLoading) {
        return (
            <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12 text-center">
              <p className="text-xl text-mindscape-fg/80">No skins available yet.</p>
              <div className="mt-8">
                <Link href="/" className="hover:text-portal-gold transition-colors">
                  Back to Home
                </Link>
              </div>
            </div>
        );
    }


  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">Unlock & Manage Skins</h1>
        <p className="mt-3 text-mindscape-fg/80">Personalize your character with different looks.</p>
      </div>

      {/* Display Available Skins */}
      <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableSkins.map((skin) => (
          <div key={skin.slug} className="rounded-2xl bg-debate-panel/60 border border-white/10 p-4 flex flex-col items-center text-center">
             {/* Optional: Display skin image */}
             {skin.imageUrl && (
                 <img src={skin.imageUrl} alt={skin.name} className="w-full h-40 object-cover rounded mb-4"/>
             )}
            <h2 className="text-xl font-bold text-portal-gold">{skin.name}</h2>
            <p className="mt-2 text-mindscape-fg/80 text-sm">{skin.description}</p>

            <div className="mt-4 w-full">
              {isSkinUnlocked(skin.slug) ? (
                <button
                  onClick={() => handleEquipSkin(skin.slug)}
                  className="w-full rounded-md bg-portal-gold px-4 py-2 font-semibold text-black hover:opacity-90 transition"
                >
                  Equip Skin
                </button>
              ) : (
                <div className="text-mindscape-fg/70 text-sm italic">
                  Unlock Criteria: {skin.unlockedCriteria || 'Complete a specific challenge/achievement'}
                   {/* Optional: Add button linking to challenge/achievement */}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>


       {/* Back to home link */}
      <div className="mt-10 text-center">
        <Link href="/" className="hover:text-portal-gold transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SkinUnlockPage;
