// app/(multiplayer)/invite/page.tsx

'use client'; // This page requires client-side interactivity

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState'; // Access player state, potential current lobby ID

/**
 * Page to invite friends to a multiplayer lobby.
 * Displays lobby information and provides invite options.
 */
const InviteFriendPage: React.FC = () => {
  const params = useParams();
  // Assuming the lobby ID is accessible, either from URL params or global state
   const lobbyIdFromParams = Array.isArray(params.slug) ? params.slug[0] : params.slug; // If lobby ID is in URL
  // const { player } = useGameState(); // If lobby ID is in player state: player.currentLobbyId
  const currentLobbyId = lobbyIdFromParams; // Use param for now, adjust based on how lobby ID is passed

  const [inviteLink, setInviteLink] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (!currentLobbyId) {
      setError("No active lobby found to invite friends to.");
      setIsLoading(false);
      return;
    }

    // Generate the invite link. This might be a direct link to join the lobby page with the ID.
    const origin = window.location.origin; // Get the base URL of the application
    const link = `${origin}/multiplayer/lobby/${currentLobbyId}`;
    setInviteLink(link);
    setIsLoading(false);

    // Optional: You might want to fetch more details about the lobby here
    // (e.g., how many players are in it) from your backend.

  }, [currentLobbyId]); // Regenerate link if lobby ID changes


  const handleCopyToClipboard = () => {
    if (inviteLink) {
      navigator.clipboard.writeText(inviteLink).then(() => {
        setIsCopied(true);
        // Reset the "Copied!" message after a few seconds
        const timer = setTimeout(() => {
          setIsCopied(false);
        }, 2000);
        return () => clearTimeout(timer); // Cleanup the timer
      }).catch(err => {
        console.error('Failed to copy invite link: ', err);
        // Optionally show an error message
      });
    }
  };

  if (isLoading) {
    return <div className="text-center text-xl text-gray-700">Loading invite options...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error: {error}</div>;
  }

  if (!currentLobbyId || !inviteLink) {
       return (
           <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
               <p className="text-xl text-gray-700">You need to be in a lobby to invite friends.</p>
                <div className="mt-8">
                   <Link href="/multiplayer/lobby" className="text-blue-500 hover:underline">
                       Go to Lobby
                   </Link>
               </div>
           </div>
       );
   }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">Invite Friends</h1>

      <div className="mb-6 text-lg text-gray-800 max-w-prose">
        <p>Share this link with your friends to invite them to your lobby:</p>
      </div>

      {/* Display the invite link */}
      <div className="bg-gray-200 rounded-md p-4 break-all w-full max-w-md mb-4">
        <p className="text-gray-800 font-mono">{inviteLink}</p>
      </div>

      {/* Button to copy the link */}
      <button
        onClick={handleCopyToClipboard}
        className="px-8 py-4 bg-blue-600 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        {isCopied ? 'Copied!' : 'Copy Link'}
      </button>

       {/* Optional: Link back to the lobby */}
       <div className="mt-8">
            <Link href={`/multiplayer/lobby/${currentLobbyId}`} className="text-blue-500 hover:underline">
                Back to Lobby
            </Link>
        </div>

        {/* TODO: Optional - Implement searching for friends or in-game invites */}
        {/* <div className="mt-8">
             <h2 className="text-2xl font-semibold mb-4">Invite from Friend List</h2>
             // Friend search input and results
             // Invite buttons
        </div> */}
    </div>
  );
};

export default InviteFriendPage;
