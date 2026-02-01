// app/(meta)/codex/page.tsx

'use client'; // This page requires client-side interactivity

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CodexEntry } from '@/game/types'; // Import the CodexEntry type
// import CodexBrowser from '@/components/game/CodexBrowser'; // Assuming a component for displaying entries

/**
 * Page to browse the in-game Codex.
 * Fetches and displays information about ethical concepts, etc.
 */
const CodexPage: React.FC = () => {
  const [codexEntries, setCodexEntries] = useState<CodexEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for search functionality
  const [filteredEntries, setFilteredEntries] = useState<CodexEntry[]>([]);


  useEffect(() => {
    const fetchCodexEntries = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Assuming an API endpoint for fetching all codex entries
        // We will need to create this API route later (e.g., /api/game/codex)
        const response = await fetch('/api/game/codex');

        if (!response.ok) {
          throw new Error(`Failed to fetch codex entries: ${response.statusText}`);
        }

        const data: CodexEntry[] = await response.json();
        setCodexEntries(data);
        setFilteredEntries(data); // Initialize filtered entries with all entries
      } catch (err: any) {
        console.error("Error fetching codex entries:", err);
        setError(err.message || "An error occurred while fetching codex entries.");
        setCodexEntries([]);
        setFilteredEntries([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCodexEntries();
  }, []); // Effect runs once on mount to fetch the codex data

  // Effect to filter entries based on search term
  useEffect(() => {
      if (searchTerm === '') {
          setFilteredEntries(codexEntries);
      } else {
          setFilteredEntries(
              codexEntries.filter(entry =>
                  entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  entry.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   entry.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) // Filter by tags
              )
          );
      }
  }, [searchTerm, codexEntries]);


  if (isLoading) {
    return <div className="text-center text-xl text-mindscape-fg/80">Loading Codex...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-300">Error loading Codex: {error}</div>;
  }

   if (codexEntries.length === 0 && !isLoading) {
        return (
            <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12 text-center">
              <p className="text-xl text-mindscape-fg/80">No codex entries available yet.</p>
              <div className="mt-8">
                <Link href="/" className="hover:text-portal-gold transition-colors">
                  Back to Home
                </Link>
              </div>
            </div>
        );
    }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-portal-gold">Codex</h1>
        <p className="mt-3 text-mindscape-fg/80">Reference concepts and ethical tools you encounter.</p>
      </div>

       {/* Search Input */}
        <input
            type="text"
            placeholder="Search codex entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-8 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-mindscape-fg placeholder:text-mindscape-fg/50 focus:outline-none focus:ring-2 focus:ring-portal-gold/40"
        />


      {/* Display Codex Entries */}
        <div className="mt-8 w-full space-y-6 text-left">
          {filteredEntries.length === 0 && searchTerm !== '' ? (
            <p className="text-mindscape-fg/70">No entries found matching your search.</p>
          ) : (
              filteredEntries.map((entry) => (
            <div key={entry.slug} className="rounded-2xl bg-debate-panel/60 border border-white/10 p-6">
              <h2 className="text-xl font-bold text-portal-gold">{entry.title}</h2>
                  {/* Render content. Use a library like 'marked' or 'dompurify' if content is Markdown/HTML */}
              <div className="mt-3 text-mindscape-fg/90" dangerouslySetInnerHTML={{ __html: entry.content }}></div> {/* Basic HTML rendering */}
                  {entry.tags && entry.tags.length > 0 && (
                <div className="mt-4 text-sm text-mindscape-fg/70">
                          Tags: {entry.tags.join(', ')}
                      </div>
                  )}
                   {/* Optional: Link to related entries */}
                   {/* {entry.relatedEntries && entry.relatedEntries.length > 0 && (
                       <div className="mt-2 text-sm text-blue-500">
                            Related: {entry.relatedEntries.map(relatedSlug => (
                                <Link key={relatedSlug} href={`/codex/${relatedSlug}`} className="hover:underline mr-1">
                                     {relatedSlug}
                                </Link>
                            ))}
                       </div>
                   )} */}
                </div>
              ))
          )}
      </div>

       {/* Back to home link */}
      <div className="mt-10 text-center">
        <Link href="/" className="hover:text-portal-gold transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CodexPage;
