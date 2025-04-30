// components/MultiplayerLobby.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PlayerSlot {
  id: string;
  name: string;
  avatar: string;
  philosophy: string;
  ready: boolean;
}

interface ChatMessage {
  id: string;
  from: string;
  message: string;
}

export default function MultiplayerLobby() {
  // Example players (you’d fetch/join a real session)
  const [players] = useState<PlayerSlot[]>([
    { id: 'p1', name: 'You', avatar: '/img/avatar1.png', philosophy: 'Mill', ready: true },
    { id: 'p2', name: 'Waiting...', avatar: '/img/avatar-placeholder.png', philosophy: '', ready: false },
    { id: 'p3', name: 'Waiting...', avatar: '/img/avatar-placeholder.png', philosophy: '', ready: false },
    { id: 'p4', name: 'Waiting...', avatar: '/img/avatar-placeholder.png', philosophy: '', ready: false },
  ]);

  // Lobby chat
  const [chat, setChat] = useState<ChatMessage[]>([
    { id: 'c1', from: 'Alice', message: 'Ready to debate?' },
    { id: 'c2', from: 'You', message: 'Absolutely!' },
  ]);
  const [newMsg, setNewMsg] = useState<string>('');

  // Countdown to start
  const [countdown, setCountdown] = useState<number>(15);
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleSend = () => {
    if (!newMsg) return;
    setChat((prev) => [
      ...prev,
      { id: `c${prev.length + 1}`, from: 'You', message: newMsg },
    ]);
    setNewMsg('');
  };

  return (
    <div className="min-h-screen bg-mindscape-bg flex">
      {/* Left: lobby slots */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-portal-gold mb-6 text-center">
          Waiting for Opponent
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {players.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center bg-debate-panel p-4 rounded-2xl"
            >
              <div className="relative w-24 h-24 mb-3">
                <Image
                  src={p.avatar}
                  alt={p.name}
                  fill
                  className="object-cover rounded-full border-2 border-portal-gold"
                />
              </div>
              <p className="font-semibold">{p.name}</p>
              {p.philosophy && (
                <span className="mt-1 text-sm px-3 py-1 bg-portal-gold text-mindscape-bg rounded-full">
                  {p.philosophy}
                </span>
              )}
              {!p.ready && (
                <span className="mt-2 text-xs text-mindscape-fg/70">Not Ready</span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <span className="text-xl font-mono">Game starts in {countdown}s</span>
        </div>
      </div>

      {/* Right: chat sidebar */}
      <div className="w-80 bg-debate-panel p-4 flex flex-col">
        <h3 className="text-xl font-semibold mb-4">Lobby Chat</h3>
        <div className="flex-1 space-y-2 overflow-y-auto mb-4">
          {chat.map((c) => (
            <div key={c.id} className="space-y-1">
              <p className="font-semibold text-sm">{c.from}:</p>
              <p className="text-sm text-mindscape-fg">{c.message}</p>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            placeholder="Type a message"
            className="flex-1 px-3 py-2 bg-mindscape-bg border border-gray-600 rounded-l-lg focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-portal-gold text-mindscape-bg rounded-r-lg hover:opacity-90 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
