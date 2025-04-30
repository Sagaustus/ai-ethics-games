// components/game/ScenarioCard.tsx

import React from 'react';
import { Scenario } from '@/game/types'; // Import the Scenario type

// Define the props for the ScenarioCard component
interface ScenarioCardProps {
  scenario: Scenario; // The scenario object to display
  onClick: (scenarioSlug: string) => void; // Function to call when the card is clicked
  isSelected?: boolean; // Optional prop to indicate if this scenario is selected
}

/**
 * Component to display a scenario in a card format.
 */
const ScenarioCard: React.FC<ScenarioCardProps> = ({
  scenario,
  onClick,
  isSelected = false,
}) => {
  const handleClick = () => {
    onClick(scenario.slug);
  };

  return (
    <div
      className={`cursor-pointer bg-white rounded-lg shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow duration-300 ${
        isSelected ? 'border-4 border-blue-500' : '' // Highlight if selected
      }`}
      onClick={handleClick}
    >
      {/* Scenario Image */}
      {scenario.image && (
        <img
          src={scenario.image}
          alt={scenario.title}
          className="w-full h-40 object-cover rounded mb-4"
        />
      )}

      {/* Scenario Title */}
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{scenario.title}</h2>

      {/* Scenario Description */}
      <p className="text-gray-600 text-sm flex-grow">{scenario.description}</p>

      {/* Optional: Display tags */}
       {scenario.tags && scenario.tags.length > 0 && (
           <div className="mt-4 text-xs text-gray-500">
               Tags: {scenario.tags.join(', ')}
           </div>
       )}

      {/* Add other scenario details as needed */}
    </div>
  );
};

export default ScenarioCard;