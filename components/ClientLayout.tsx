// components/ClientLayout.tsx
'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Layout from './Layout';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const path = usePathname();
  const isHome = path === '/';

  // Home: render children (the full-screen hero) unwrapped
  // Otherwise: wrap in your normal Layout with Navbar/Footer
  return isHome ? <>{children}</> : <Layout>{children}</Layout>;
}
