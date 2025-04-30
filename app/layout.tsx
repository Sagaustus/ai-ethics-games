import '@/styles/globals.css';
import { ReactNode } from 'react';
import { GameProvider } from '@/context/GameContext';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: 'Mindscape: AI Ethics Game',
  description: 'Explore the ethics of AI through interactive scenarios',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-mindscape-bg text-mindscape-fg font-sans">
        <GameProvider>
          <ClientLayout>{children}</ClientLayout>
        </GameProvider>
      </body>
    </html>
  );
}
