// components/InviteFriend.tsx
'use client';

import { useState } from 'react';
import { FaCopy, FaEnvelope, FaLink } from 'react-icons/fa';
import { useGame } from '@/context/GameContext';

export default function InviteFriend() {
  const { school, scenario } = useGame();
  const [copied, setCopied] = useState(false);

  const inviteCode = `${school}-${scenario}-${Math.floor(Math.random() * 10000)}`;
  const inviteLink = `${window.location.origin}/lobby?code=${inviteCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('Join me in Mindscape!');
    const body = encodeURIComponent(
      `Hey, join me in Mindscape: AI Ethics Game.\nUse invite code: ${inviteCode}\nor click: ${inviteLink}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-mindscape-bg flex items-center justify-center p-8">
      <div className="bg-debate-panel p-8 rounded-2xl max-w-md w-full text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-portal-gold">
          Invite a Friend
        </h2>
        <p className="text-mindscape-fg">
          Share this code or link to challenge a friend in your debate!
        </p>

        {/* Invite Code */}
        <div className="flex items-center justify-center space-x-2 bg-mindscape-bg/30 p-3 rounded-lg">
          <span className="font-mono text-xl">{inviteCode}</span>
          <button
            onClick={handleCopy}
            className="p-2 bg-portal-gold text-mindscape-bg rounded-full hover:opacity-90 transition"
          >
            <FaCopy />
          </button>
        </div>
        {copied && (
          <p className="text-green-400 text-sm">Code copied!</p>
        )}

        {/* Direct Link */}
        <div>
          <button
            onClick={() => navigator.clipboard.writeText(inviteLink)}
            className="flex items-center justify-center w-full px-4 py-2 bg-debate-panel rounded-lg hover:shadow-md transition"
          >
            <FaLink className="mr-2 text-portal-gold" />
            Copy Invite Link
          </button>
        </div>

        {/* Email Invite */}
        <div>
          <button
            onClick={handleEmail}
            className="flex items-center justify-center w-full px-4 py-2 bg-portal-gold text-mindscape-bg rounded-lg hover:opacity-90 transition"
          >
            <FaEnvelope className="mr-2" />
            Send via Email
          </button>
        </div>
      </div>
    </div>
  );
}
