// app/lobby/page.tsx
import MultiplayerLobby from '@/components/MultiplayerLobby';

export const metadata = {
  title: 'Multiplayer Lobby • Mindscape',
  description: 'Wait for other players and chat before the debate begins.',
};

export default function LobbyPage() {
  return <MultiplayerLobby />;
}
