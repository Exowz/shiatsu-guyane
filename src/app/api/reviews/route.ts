// src/app/api/reviews/route.ts
import { NextRequest, NextResponse } from "next/server";

const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours
const cache = new Map<string, { data: unknown; timestamp: number }>();

export async function GET(request: NextRequest) {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  const lang = request.nextUrl.searchParams.get('lang') || 'fr';

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "Google API credentials are not configured." },
      { status: 500 }
    );
  }

  // Return cached response if still valid
  const cached = cache.get(lang);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION_MS) {
    return NextResponse.json(cached.data, {
      headers: { "X-Cache": "HIT" },
    });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=${lang}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok || data.status !== 'OK') {
      console.error("Google Places API Error:", data);
      return NextResponse.json(
        { error: "Failed to fetch reviews from Google.", details: data.error_message || data.status },
        { status: 500 }
      );
    }

    // Cache the successful response
    cache.set(lang, { data: data.result, timestamp: Date.now() });

    return NextResponse.json(data.result, {
      headers: { "X-Cache": "MISS" },
    });

  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}