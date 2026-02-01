// app/(game)/layout.tsx

import React from 'react';

export default function GameLayout({ children }: { children: React.ReactNode }) {
  // Root layout already applies global chrome/styling.
  // Keep this layout minimal to avoid double-wrapping and conflicting min-height rules.
  return <>{children}</>;
}
