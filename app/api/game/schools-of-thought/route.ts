import { NextResponse } from 'next/server';
import { schoolsOfThought } from '@/data/schoolsOfThought';

/**
 * Schools of Thought API (App Router route handler).
 * - GET /api/game/schools-of-thought -> list schools
 */
export async function GET() {
  return NextResponse.json(schoolsOfThought, { status: 200 });
}
