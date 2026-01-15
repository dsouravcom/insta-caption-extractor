import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/caption
 * Proxy endpoint to hide the actual backend API URL from the client
 */
export async function POST(request: NextRequest) {
    try {
        // Parse the incoming request body
        const body = await request.json();
        const { url, token } = body;

        // Validate required fields
        if (!url || !token) {
            return NextResponse.json(
                { error: "URL and token are required" },
                { status: 400 }
            );
        }

        // Get the backend API URL from environment variables (server-side only)
        const backendApiUrl = process.env.BACKEND_API_URL;

        if (!backendApiUrl) {
            console.error("BACKEND_API_URL is not configured");
            return NextResponse.json(
                { error: "Server configuration error" },
                { status: 500 }
            );
        }

        // Forward the request to the actual backend API
        const response = await fetch(backendApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url, token }),
        });

        // Get the response data
        const data = await response.json();

        // Return the response with the same status code
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.error("API proxy error:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred. Please try again later." },
            { status: 500 }
        );
    }
}
