// components/layout/ClientLayout.tsx

'use client'; // This component must be a client component

import React from 'react';

interface ClientLayoutProps {
  children: React.ReactNode; // The content this layout wraps
}

/**
 * Main client-side layout wrapper.
 * Use to provide client-side context or features to wrapped components.
 */
const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  // You can include client-side context providers here if needed,
  // e.g., for authentication, themes, or other client-specific state not in Zustand.
  // Example: <AuthProvider> or <ThemeProvider>

  return (
    <>
      {/* Any client-side wrappers or providers would go here */}
      {children}
      {/* Any elements that should be at the root of your client-side app */}
    </>
  );
};

export default ClientLayout;