// components/LiveDebateViewer.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';

interface ChatMessage {
  id: string;
  user: string;
  text: string;
}

export default function LiveDebateViewer() {
  const [chat, setChat] = useState<ChatMessage[]>([
    { id: 'c1', user: 'Viewer1', text: 'Great point by Mill!' },
    { id: 'c2', user: 'Viewer2', text: 'Kantian logic is solid.' },
  ]);
  const [newMsg, setNewMsg] = useState<string>('');
  const [votes, setVotes] = useState<{ best: number; reasonable: number }>({
    best: 5,
    reasonable: 3,
  });

  const handleSend = () => {
    if (!newMsg) return;
    setChat((prev) => [...prev, { id: `c${prev.length + 1}`, user: 'You', text: newMsg }]);
    setNewMsg('');
  };

  const handleVote = (type: 'best' | 'reasonable') => {
    setVotes((v) => ({ ...v, [type]: v[type] + 1 }));
  };

  return (
    <div className="flex h-screen bg-mindscape-bg">
      {/* Main video & scoreboard */}
      <div className="flex-1 flex flex-col">
        {/* Scoreboard */}
        <div className="flex items-center justify-between bg-debate-panel p-4 border-b border-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaCircle className="text-red-500 animate-pulse" /> <span>LIVE</span>
            </div>
            <span className="font-semibold">Debate: Mill vs. Kant</span>
          </div>
          <div className="flex space-x-8">
            <div>
              <span className="text-sm">Mill</span>
              <div className="font-bold">12</div>
            </div>
            <div>
              <span className="text-sm">Kant</span>
              <div className="font-bold">10</div>
            </div>
          </div>
        </div>

        {/* Video / Debate Canvas */}
        <div className="flex-1 bg-black flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gray-900 rounded-lg flex items-center justify-center text-mindscape-fg/50">
            Debate Video Feed
          </div>
        </div>

        {/* Voting buttons */}
        <div className="flex justify-center gap-6 bg-debate-panel p-4">
          <button
            onClick={() => handleVote('best')}
            className="px-6 py-2 bg-portal-gold text-mindscape-bg rounded-full font-semibold hover:opacity-90 transition"
          >
            Best Point ({votes.best})
          </button>
          <button
            onClick={() => handleVote('reasonable')}
            className="px-6 py-2 bg-debate-panel border border-portal-gold text-portal-gold rounded-full font-semibold hover:bg-portal-gold hover:text-mindscape-bg transition"
          >
            Most Reasonable ({votes.reasonable})
          </button>
        </div>
      </div>

      {/* Chat sidebar */}
      <div className="w-80 bg-debate-panel p-4 flex flex-col">
        <h3 className="text-xl font-semibold mb-4">Live Chat</h3>
        <div className="flex-1 overflow-y-auto space-y-2 mb-4">
          {chat.map((c) => (
            <div key={c.id} className="space-y-1">
              <p className="text-sm font-semibold">{c.user}:</p>
              <p className="text-sm text-mindscape-fg">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
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
