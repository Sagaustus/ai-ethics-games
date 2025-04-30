// components/game/CharacterDisplay.tsx

import React from 'react';
import { Character } from '@/game/types'; // Import the Character type

// Define the props for the CharacterDisplay component
interface CharacterDisplayProps {
  character: Character; // The character object to display
  // Add optional props for interactive elements if needed (e.g., onClick for selection)
  onClick?: (characterSlug: string) => void;
  isSelected?: boolean; // Optional prop to indicate if this character is selected
}

/**
 * Component to display information about a single character.
 */
const CharacterDisplay: React.FC<CharacterDisplayProps> = ({
  character,
  onClick,
  isSelected = false,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(character.slug);
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-shadow duration-300 ${
        onClick ? 'cursor-pointer hover:shadow-xl' : '' // Add hover effect if clickable
      } ${isSelected ? 'border-4 border-blue-500' : ''}`} // Highlight if selected
      onClick={handleClick}
    >
      {/* Character Avatar/Image */}
      {character.avatar && (
        <img
          src={character.avatar}
          alt={character.name}
          className="w-32 h-32 object-cover rounded-full mb-4"
        />
      )}

      {/* Character Name */}
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{character.name}</h2>

      {/* Character Description */}
      <p className="text-gray-600 text-sm">{character.description}</p>

      {/* Optional: Display associated school of thought */}
       {character.schoolOfThoughtSlug && (
           <p className="mt-2 text-sm font-medium text-blue-600">
               School: {character.schoolOfThoughtSlug} {/* Display slug for now, can fetch name if needed */}
           </p>
       )}

      {/* Add other character details as needed */}
    </div>
  );
};

export default CharacterDisplay;