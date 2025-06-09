// app/(game)/layout.tsx
'use client';

import React from 'react';
import ClientLayout from '@/components/layout/ClientLayout';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface GameLayoutProps {
  children: React.ReactNode;
}

/**
 * Layout component for the main game pages.
 * Includes Navbar, Footer, and wraps content with ClientLayout.
 */
const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
  return (
    <ClientLayout>
      {/* Uncomment if you want a navbar across all game pages */}
      {/* <Navbar /> */}

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        {children}
      </main>

      {/* Uncomment if you want a footer across all game pages */}
      {/* <Footer /> */}
    </ClientLayout>
  );
};

export default GameLayout;
