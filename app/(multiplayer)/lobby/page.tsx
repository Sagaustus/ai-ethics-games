// app/(multiplayer)/lobby/page.tsx

'use client'; // This page requires client-side interactivity

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGameState } from '@/hooks/useGameState'; // Use to access/update game state, perhaps store current lobby ID

// Define a type for a lobby
interface Lobby {
  id: string;
  name: string;
  players: string[]; // Array of player usernames or IDs
  status: 'waiting' | 'in-game' | 'finished';
  scenarioSlug?: string; // Optional: scenario chosen for the lobby
  createdAt: string;
}

/**
 * Page for the multiplayer lobby.
 * Displays active lobbies, allows creating/joining lobbies.
 */
const MultiplayerLobbyPage: React.FC = () => {
  const [lobbies, setLobbies] = useState<Lobby[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newLobbyName, setNewLobbyName] = useState<string>('');

  const router = useRouter();
  // const { setPlayerLobby } = useGameState(); // Assuming an action to set the player's current lobby ID in state

  useEffect(() => {
    // Function to fetch active lobbies
    const fetchLobbies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Assuming an API endpoint to get a list of active lobbies
        // This would likely involve Supabase Realtime subscriptions for real-time updates
        const response = await fetch('/api/multiplayer/lobbies'); // We will create this API route later

        if (!response.ok) {
          throw new Error(`Failed to fetch lobbies: ${response.statusText}`);
        }

        const data: Lobby[] = await response.json();
        setLobbies(data);

        // TODO: Implement Supabase Realtime subscription here to listen for lobby changes
        // const supabase = createClient(); // Assuming you have a Supabase client instance
        // const lobbySubscription = supabase
        //   .from('lobbies') // Your lobbies table
        //   .on('*', payload => {
        //     // Handle real-time updates (new lobbies, players joining/leaving, status changes)
        //     console.log('Realtime lobby update:', payload);
        //     // You'll need logic here to update the 'lobbies' state based on the payload
        //     fetchLobbies(); // Simple approach: refetch all lobbies on any change
        //   })
        //   .subscribe();

        // return () => {
        //   // Clean up the subscription on component unmount
        //   lobbySubscription.unsubscribe();
        // };


      } catch (err: any) {
        console.error("Error fetching lobbies:", err);
        setError(err.message || "An error occurred while fetching lobbies.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLobbies();
     // Cleanup function for the effect (important for subscriptions)
     // return () => { /* Unsubscribe from realtime if implemented */ };
  }, []); // Empty dependency array for now, effect runs on mount


  const handleCreateLobby = async () => {
    if (!newLobbyName.trim()) {
      alert('Please enter a lobby name.');
      return;
    }
     // TODO: Add user authentication check here - only logged-in users can create lobbies

    try {
      // Assuming an API endpoint to create a new lobby
      const response = await fetch('/api/multiplayer/lobbies', { // We will create this API route later
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newLobbyName }),
      });

      if (!response.ok) {
        throw new Error(`Failed to create lobby: ${response.statusText}`);
      }

      const newLobby: Lobby = await response.json();
      // setPlayerLobby(newLobby.id); // Update game state with the lobby the player joined
      router.push(`/multiplayer/lobby/${newLobby.id}`); // Navigate to the specific lobby page (assuming a dynamic route)

    } catch (err: any) {
      console.error("Error creating lobby:", err);
      setError(err.message || "An error occurred while creating the lobby.");
    }
  };

  const handleJoinLobby = (lobbyId: string) => {
     // TODO: Add user authentication check here

     // Assuming an API endpoint to join an existing lobby
     // const response = await fetch(`/api/multiplayer/lobbies/${lobbyId}/join`, { method: 'POST' }); // We will create this API route later
     // if (response.ok) {
        // setPlayerLobby(lobbyId); // Update game state
         router.push(`/multiplayer/lobby/${lobbyId}`); // Navigate to the specific lobby page
     // } else {
        // Handle error joining lobby
     // }
  };


  if (isLoading) {
    return <div className="text-center text-xl text-gray-700">Loading lobbies...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error loading lobbies: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">Multiplayer Lobby</h1>

      {/* Create New Lobby Section */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Create New Lobby</h2>
        <input
          type="text"
          placeholder="Enter lobby name"
          value={newLobbyName}
          onChange={(e) => setNewLobbyName(e.target.value)}
          className="border p-2 rounded mr-2 text-gray-800 w-full mb-4"
        />
        <button
          onClick={handleCreateLobby}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors duration-300 w-full"
        >
          Create Lobby
        </button>
      </div>

      {/* Available Lobbies List */}
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Available Lobbies</h2>
        {lobbies.length === 0 ? (
          <p className="text-gray-600">No active lobbies found. Create one!</p>
        ) : (
          <ul className="space-y-4">
            {lobbies.map((lobby) => (
              <li key={lobby.id} className="flex justify-between items-center bg-white rounded-lg shadow-md p-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{lobby.name}</h3>
                  <p className="text-sm text-gray-600">{lobby.players.length} player(s)</p>
                   <p className="text-sm text-gray-600">Status: {lobby.status}</p>
                </div>
                {lobby.status === 'waiting' && (
                     <button
                        onClick={() => handleJoinLobby(lobby.id)}
                        className="px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors duration-300"
                     >
                        Join
                     </button>
                )}
                {/* Optional: Button to view ongoing game if status is 'in-game' */}
              </li>
            ))}
          </ul>
        )}
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

export default MultiplayerLobbyPage;
