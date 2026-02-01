'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function InviteFriendPage() {
  const params = useParams();
  const lobbyId = useMemo(() => {
    const raw = (params as any)?.lobbyId;
    return Array.isArray(raw) ? raw[0] : raw;
  }, [params]);

  const [inviteLink, setInviteLink] = useState<string>('');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!lobbyId) return;
    const origin = window.location.origin;
    setInviteLink(`${origin}/lobby/${lobbyId}`);
  }, [lobbyId]);

  const handleCopyToClipboard = async () => {
    if (!inviteLink) return;
    try {
      await navigator.clipboard.writeText(inviteLink);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  if (!lobbyId) {
    return <div className="text-center text-mindscape-fg/80">Missing lobby id.</div>;
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">Invite Friends</h1>
        <p className="mt-3 text-mindscape-fg/80">Share this link to invite friends into your lobby.</p>
      </div>

      <div className="mt-8 rounded-2xl bg-debate-panel/60 border border-white/10 p-6">
        <div className="text-sm text-mindscape-fg/70">Invite link</div>
        <div className="mt-2 rounded-md bg-black/30 border border-white/10 p-4 break-all font-mono text-mindscape-fg">
          {inviteLink}
        </div>

        <button
          onClick={handleCopyToClipboard}
          className="mt-4 w-full rounded-md bg-portal-gold px-6 py-3 font-semibold text-black hover:opacity-90 transition"
        >
          {isCopied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>

      <div className="mt-10 text-center">
        <Link href={`/lobby/${lobbyId}`} className="hover:text-portal-gold transition-colors">
          Back to Lobby
        </Link>
      </div>
    </div>
  );
}
