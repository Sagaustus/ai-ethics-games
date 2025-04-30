// components/CharacterCreator.tsx
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useGame } from '@/context/GameContext';

const avatarOptions = [
  '/img/avatar1.png',
  '/img/avatar2.png',
  '/img/avatar3.png',
];
const genderOptions = ['Male', 'Female', 'Non-binary'];
const outfitOptions = ['Robe', 'Armor', 'Suit'];
const classOptions = ['Utilitarian', 'Deontologist', 'Virtue Ethicist'];

export default function CharacterCreator() {
  const {
    avatar, setAvatar,
    gender, setGender,
    outfit, setOutfit,
    ethicsClass, setEthicsClass,
    setSchool,
  } = useGame();

  const router = useRouter();

  const handleSave = () => {
    // Persist chosen ethics class as the “school” before moving on
    setSchool(ethicsClass);
    router.push('/school-of-thought');
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 space-y-8 lg:space-y-0 lg:space-x-16">
      {/* Controls */}
      <div className="space-y-6 max-w-md">
        <h2 className="text-3xl font-bold">Customize Your Philosopher</h2>

        {/* Avatar picker */}
        <div>
          <h3 className="font-semibold mb-2">Avatar</h3>
          <div className="flex space-x-4">
            {avatarOptions.map((src) => (
              <button
                key={src}
                onClick={() => setAvatar(src)}
                className={`p-1 border-2 rounded-lg ${
                  avatar === src ? 'border-portal-gold' : 'border-transparent'
                }`}
              >
                <Image
                  src={src}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Gender picker */}
        <div>
          <h3 className="font-semibold mb-2">Gender</h3>
          <div className="flex space-x-4">
            {genderOptions.map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`px-4 py-2 rounded-lg ${
                  gender === g
                    ? 'bg-portal-gold text-mindscape-bg'
                    : 'bg-debate-panel text-mindscape-fg'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Outfit picker */}
        <div>
          <h3 className="font-semibold mb-2">Outfit</h3>
          <div className="flex space-x-4">
            {outfitOptions.map((o) => (
              <button
                key={o}
                onClick={() => setOutfit(o)}
                className={`px-4 py-2 rounded-lg ${
                  outfit === o
                    ? 'bg-portal-gold text-mindscape-bg'
                    : 'bg-debate-panel text-mindscape-fg'
                }`}
              >
                {o}
              </button>
            ))}
          </div>
        </div>

        {/* Ethical class picker */}
        <div>
          <h3 className="font-semibold mb-2">Ethical Class</h3>
          <div className="flex space-x-4">
            {classOptions.map((c) => (
              <button
                key={c}
                onClick={() => setEthicsClass(c)}
                className={`px-4 py-2 rounded-lg ${
                  ethicsClass === c
                    ? 'bg-portal-gold text-mindscape-bg'
                    : 'bg-debate-panel text-mindscape-fg'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleSave}
          className="mt-6 px-6 py-3 bg-portal-gold text-mindscape-bg rounded-full font-semibold hover:opacity-90 transition"
        >
          Save Philosopher
        </button>
      </div>

      {/* Preview pane */}
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4">Preview</h3>
        <div className="relative w-48 h-48 bg-debate-panel rounded-lg p-4">
          <Image
            src={avatar}
            alt="Preview Avatar"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="mt-4 text-center space-y-1">
          <p className="font-medium">{gender}</p>
          <p className="font-medium">{outfit}</p>
          <p className="font-medium">{ethicsClass}</p>
        </div>
      </div>
    </div>
);
}
