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
    return <div className="text-center text-xl text-gray-700">Loading Codex...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error loading Codex: {error}</div>;
  }

   if (codexEntries.length === 0 && !isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
                <p className="text-xl text-gray-700">No codex entries available yet.</p>
                 <div className="mt-8">
                    <Link href="/" className="text-blue-500 hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

  return (
    <div className="flex flex-col items-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-8">Codex</h1>

       {/* Search Input */}
        <input
            type="text"
            placeholder="Search codex entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded mb-6 text-gray-800 w-full max-w-md"
        />


      {/* Display Codex Entries */}
      <div className="w-full max-w-2xl space-y-6 text-left">
          {filteredEntries.length === 0 && searchTerm !== '' ? (
              <p className="text-gray-600">No entries found matching your search.</p>
          ) : (
              filteredEntries.map((entry) => (
                <div key={entry.slug} className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-blue-700">{entry.title}</h2>
                  {/* Render content. Use a library like 'marked' or 'dompurify' if content is Markdown/HTML */}
                  <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: entry.content }}></div> {/* Basic HTML rendering */}
                  {entry.tags && entry.tags.length > 0 && (
                      <div className="mt-4 text-sm text-gray-600">
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
       <div className="mt-8">
            <Link href="/" className="text-blue-500 hover:underline">
                Back to Home
            </Link>
        </div>
    </div>
  );
};

export default CodexPage;