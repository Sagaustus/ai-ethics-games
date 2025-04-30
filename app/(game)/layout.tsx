// app/(game)/layout.tsx

import ClientLayout from '@/components/layout/ClientLayout'; // Assuming you'll keep a ClientLayout for context/providers
import Navbar from '@/components/layout/Navbar'; // Import your Navbar component
import Footer from '@/components/layout/Footer'; // Import your Footer component

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
      {/* You can include the Navbar here if it should appear on all game pages */}
      {/* <Navbar /> */}

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        {children} {/* The content of the specific game page */}
      </main>

      {/* You can include the Footer here if it should appear on all game pages */}
      {/* <Footer /> */}
    </ClientLayout>
  );
};

export default GameLayout;