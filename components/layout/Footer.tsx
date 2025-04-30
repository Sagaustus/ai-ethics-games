// components/layout/Footer.tsx

import React from 'react';
import Link from 'next/link';

/**
 * The main footer for the application.
 * Displays copyright information and optional links.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} MindScape: AI Ethics Game. All rights reserved.</p>
        {/* Optional: Add footer links */}
        {/* <div className="mt-2">
          <Link href="/privacy" className="text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-white mx-2">
            Terms of Service
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;