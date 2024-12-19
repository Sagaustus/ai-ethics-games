import React from "react";
import "./globals.css"; // Include global styles
import Layout from "../components/Layout"; // Import your Layout component
import { GameProgressProvider } from "./context/GameProgressContext";
 // Import your GameProgressProvider

export const metadata = {
  title: "AI Ethics Game",
  description: "Explore the ethics of AI through interactive scenarios",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {/* Wrap the entire app in GameProgressProvider */}
        <GameProgressProvider>
          <Layout>{children}</Layout>
        </GameProgressProvider>
      </body>
    </html>
  );
}
