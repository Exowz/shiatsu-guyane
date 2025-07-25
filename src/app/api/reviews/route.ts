// src/app/api/reviews/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // 1. Read the 'lang' parameter from the incoming request URL (e.g., /api/reviews?lang=fr)
  const lang = request.nextUrl.searchParams.get('lang') || 'fr'; // Default to French if not provided

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "Google API credentials are not configured." },
      { status: 500 }
    );
  }

  // 2. Add the language parameter to the Google API URL
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

    return NextResponse.json(data.result);

  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}