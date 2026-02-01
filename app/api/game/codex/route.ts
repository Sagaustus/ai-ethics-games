import { NextResponse } from 'next/server';
import { codexEntries } from '@/data/codex';

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

/**
 * Codex API.
 * - GET /api/game/codex
 */
export async function GET() {
  const mapped = codexEntries.map((e) => ({
    slug: e.id,
    title: e.title,
    content: `<p>${escapeHtml(e.description)}</p><p><em>Last used: ${escapeHtml(e.lastUsed)}</em></p>`,
    tags: [],
  }));

  return NextResponse.json(mapped, { status: 200 });
}
