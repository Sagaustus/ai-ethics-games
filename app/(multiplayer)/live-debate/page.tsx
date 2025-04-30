// app/(multiplayer)/live-debate/page.tsx

'use client'; // This page requires client-side interactivity and real-time updates

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useGameState } from '@/hooks/useGameState'; // Access player info, potentially lobby state
import { Argument, Scenario } from '@/game/types'; // Import necessary types
// import { useRealtimeDebate } from '@/hooks/useRealtimeDebate'; // Placeholder for a custom hook for real-time debate data

// Define a type for the live debate state (this structure is illustrative)
interface LiveDebateState {
    id: string;
    scenarioSlug: string;
    players: { id: string; username: string; school: string; character: string; currentScore: number; }[]; // Info about players in the debate
    currentTurn: number;
    activePlayerId: string; // Who's turn it is
    debateLog: { playerId?: string; argumentText?: string; npcResponse?: string; feedback?: string; }[]; // History of debate actions
    availableArguments: Argument[]; // Arguments for the active player
    timer: number; // Turn timer
    status: 'waiting' | 'in-progress' | 'finished';
    // Add other state relevant to the live debate
}

/**
 * Page for a live multiplayer ethical debate.
 * Displays debate state, handles player turns and arguments.
 */
const LiveDebatePage: React.FC = () => {
  const params = useParams();
  // Assuming the debate ID is passed as a URL parameter
  const debateId = Array.isArray(params.slug) ? params.slug[0] : params.slug; // Or however you pass the debate ID
  const router = useRouter();

  // Access player information from global game state
  const { player } = useGameState(); // Assuming player.id, player.username, etc. are available

  // State to hold the live debate data (will be updated in real-time)
  const [debateState, setDebateState] = useState<LiveDebateState | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // TODO: Implement a custom hook (useRealtimeDebate) or use Supabase Realtime
  // to subscribe to the specific debate state based on debateId.
   useEffect(() => {
       if (!debateId) {
           setError("Debate ID not specified.");
           setIsLoading(false);
           return;
       }

       setIsLoading(true);
       setError(null);

       // Placeholder for fetching initial debate state and setting up realtime subscription
       const setupRealtimeDebate = async () => {
           try {
               // 1. Fetch initial debate state (e.g., from /api/multiplayer/debates/{debateId})
               const response = await fetch(`/api/multiplayer/debates/${debateId}`); // We will create this API route later
               if (!response.ok) throw new Error('Failed to fetch initial debate state');
               const initialDebateState: LiveDebateState = await response.json();
               setDebateState(initialDebateState);
               setIsLoading(false);

               // 2. Set up Supabase Realtime subscription to the 'debates' table, filtered by debateId
               // This part requires a Supabase client and the Realtime feature setup
               // const supabase = createClient(); // Assuming Supabase client is initialized
               // const debateSubscription = supabase
               //     .channel(`debate:${debateId}`) // Subscribe to a specific channel for this debate
               //     .on('postgres_changes', { event: '*', schema: 'public', table: 'debates', filter: `id=eq.${debateId}` }, payload => {
               //         console.log('Realtime debate update:', payload);
               //         // Update debateState based on the payload (e.g., new turn, argument played, timer update)
               //         // This logic can be complex depending on your debate state structure
               //          // A simple approach is to refetch the state after an update:
               //         fetch(`/api/multiplayer/debates/${debateId}`).then(res => res.json()).then(setDebateState);
               //     })
               //     .subscribe();

               // return () => {
               //      // Clean up the subscription on component unmount
               //     debateSubscription.unsubscribe();
               // };

           } catch (err: any) {
               console.error("Error setting up debate:", err);
               setError(err.message || "Failed to load debate.");
               setIsLoading(false);
               setDebateState(null);
           }
       };

       setupRealtimeDebate();

        // Cleanup function for the effect (important for subscriptions)
        // return () => { /* Unsubscribe from realtime if implemented */ };

   }, [debateId]); // Effect depends on the debateId


  // Determine if it's the current player's turn
  const isMyTurn = debateState?.activePlayerId === player.id;

  const handleChooseArgument = async (chosenArgument: Argument) => {
    if (!debateState || !isMyTurn || debateState.status !== 'in-progress') {
      console.log("Not your turn or debate not in progress.");
      return;
    }

    // TODO: Implement logic to submit the chosen argument to the backend
    console.log("Player chose argument:", chosenArgument.text);
    try {
        // Assuming an API endpoint to submit a move/argument in the debate
        const response = await fetch(`/api/multiplayer/debates/${debateId}/move`, { // We will create this API route later
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                playerId: player.id, // Assuming player.id is available
                argumentSlug: chosenArgument.text, // Or a unique identifier for the argument
                turn: debateState.currentTurn,
                // Include other relevant data
            }),
        });

        if (!response.ok) throw new Error('Failed to submit argument');

        // Backend will likely handle the evaluation and update the debate state via realtime

    } catch (err) {
        console.error("Error submitting argument:", err);
        setError("Failed to submit argument.");
    }
  };

   // TODO: Implement UI components for timer, player scores, debate log, etc.
   // Use components/game/DebateBox.tsx and others

  if (isLoading) {
    return <div className="text-center text-xl text-gray-700">Loading live debate...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error loading live debate: {error}</div>;
  }

  if (!debateState) {
      return (
          <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
              <p className="text-xl text-gray-700">Live debate not found or has ended.</p>
               <div className="mt-8">
                  <Link href="/multiplayer/lobby" className="text-blue-500 hover:underline">
                      Back to Lobby
                  </Link>
              </div>
          </div>
      );
  }

  // Basic UI structure for the live debate
  return (
    <div className="flex flex-col items-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Live Debate: {debateState.scenarioSlug}</h1>
      <h2 className="text-2xl mb-6">Turn {debateState.currentTurn + 1}</h2>

      {/* TODO: Display opponent(s) info and scores */}
       <div className="mb-6">
            {debateState.players.map(p => (
                <p key={p.id}>{p.username} ({p.school}) - Score: {p.currentScore}</p>
            ))}
       </div>


      {/* TODO: Display debate log/history */}
       <div className="mb-6 p-4 bg-gray-100 rounded-md w-full max-w-prose text-left max-h-60 overflow-y-auto">
           <h3 className="text-xl font-semibold mb-2">Debate Log</h3>
           {debateState.debateLog.map((log, index) => (
               <p key={index} className="text-sm text-gray-800 mb-1">
                   {log.playerId && `Player ${log.playerId}: `}
                   {log.argumentText && `Argued "${log.argumentText}"`}
                   {log.feedback && ` (${log.feedback})`}
                   {log.npcResponse && ` NPC Response: ${log.npcResponse}`}
               </p>
           ))}
            {debateState.debateLog.length === 0 && <p className="text-gray-600">No arguments made yet.</p>}
       </div>


      {/* Display active player / turn indicator */}
      <div className={`text-xl font-bold mb-6 ${isMyTurn ? 'text-green-600' : 'text-red-600'}`}>
        {isMyTurn ? "Your Turn!" : `Waiting for ${debateState.players.find(p => p.id === debateState.activePlayerId)?.username || 'opponent'}'s turn...`}
      </div>

      {/* Display available arguments if it's the player's turn */}
      {isMyTurn && debateState.status === 'in-progress' && debateState.availableArguments && (
        <div className="flex flex-col space-y-4 w-full max-w-md">
          <h3 className="text-xl font-semibold mb-2">Choose Your Argument</h3>
          {debateState.availableArguments.map((argument, index) => (
            <button
              key={index}
              onClick={() => handleChooseArgument(argument)}
              className="px-6 py-3 bg-yellow-500 text-white text-lg rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300"
              // Disable button if not turn or argument already chosen
              disabled={!isMyTurn || debateState.status !== 'in-progress'}
            >
              {argument.text}
            </button>
          ))}
        </div>
      )}

       {/* Display End Game/Debate Results when status is finished */}
       {debateState.status === 'finished' && (
           <div className="mt-8 text-2xl font-bold text-blue-600">
               Debate Finished!
               {/* TODO: Display winner/loser or final standings */}
                <div className="mt-4">
                   <Link href="/multiplayer/lobby" className="text-blue-500 hover:underline text-lg">
                       Back to Lobby
                   </Link>
               </div>
           </div>
       )}


       {/* Optional: Link back to lobby */}
       {!debateState || debateState.status === 'finished' && (
            <div className="mt-8">
                <Link href="/multiplayer/lobby" className="text-blue-500 hover:underline">
                    Back to Lobby
                </Link>
            </div>
       )}
    </div>
  );
};

export default LiveDebatePage;