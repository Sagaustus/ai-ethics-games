// components/game/DebateBox.tsx

import React from 'react';
// import { DebateLogEntry } from '@/game/types'; // Assuming a type for debate log entries

// Define props for the DebateBox component
interface DebateBoxProps {
  opponentStatement: string; // The current statement or argument from the opponent/scenario
  feedback?: string | null; // Feedback on the player's last action
  npcResponse?: string | null; // Response from the NPC after player's turn
  // debateLog?: DebateLogEntry[]; // Optional: Array of past debate actions for a log
  currentTurn?: number; // Optional: Current turn number
  totalTurns?: number; // Optional: Total number of turns
}

/**
 * Component to display the current state and flow of the debate.
 */
const DebateBox: React.FC<DebateBoxProps> = ({
  opponentStatement,
  feedback,
  npcResponse,
  // debateLog,
  currentTurn,
  totalTurns,
}) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 w-full max-w-prose text-left">
      {/* Opponent's Statement */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Opponent:</h2>
        <p className="text-gray-700 italic">{opponentStatement}</p>
      </div>

      {/* Feedback on Player's last move */}
      {feedback && (
        <div className="mb-4 text-blue-700 font-medium">
          Feedback: {feedback}
        </div>
      )}

      {/* NPC Response */}
      {npcResponse && (
        <div className="mb-4 text-gray-600 italic">
          Opponent responds: "{npcResponse}"
        </div>
      )}

      {/* Optional: Debate Log */}
      {/* {debateLog && debateLog.length > 0 && (
                <div className="mt-6 border-t pt-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Debate Log:</h3>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                         {debateLog.map((entry, index) => (
                             <p key={index} className="text-sm text-gray-600">
                                 Turn {entry.turn}: Player {entry.playerId} chose "{entry.argumentText}" - {entry.feedback}
                             </p>
                         ))}
                    </div>
                </div>
            )} */}

      {/* Optional: Turn Indicator */}
      {currentTurn !== undefined && totalTurns !== undefined && (
        <div className="mt-4 text-sm text-gray-600">
          Turn {currentTurn + 1} / {totalTurns}
        </div>
      )}
    </div>
  );
};

export default DebateBox;