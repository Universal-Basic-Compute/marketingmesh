import { NextResponse } from 'next/server';
import { textToSpeech } from '../../../../lib/kinos-api';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { text, voiceId, model } = body;
    
    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }
    
    // Check if API key is set
    if (!process.env.KINOS_API_KEY && !process.env.NEXT_PUBLIC_KINOS_API_KEY) {
      console.error('Missing Kinos API key');
      return NextResponse.json(
        { error: 'Server configuration error: Missing API key' },
        { status: 500 }
      );
    }
    
    // Limit text length to prevent large requests
    const truncatedText = text.length > 1000 ? text.substring(0, 1000) + '...' : text;
      
    // Add a timeout to the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout
      
    try {
      // Send the text to be converted to speech
      const audioBlob = await textToSpeech(truncatedText, {
        voiceId,
        model
      });
      
      clearTimeout(timeoutId);
      
      // Create a response with the audio blob
      const response = new NextResponse(audioBlob);
      response.headers.set('Content-Type', 'audio/mpeg');
      
      return response;
    } catch (ttsError) {
      console.error('Error from TTS service:', ttsError);
      
      // Return a more specific error
      let errorMessage = 'Failed to convert text to speech';
      
      if (ttsError.message && ttsError.message.includes('Failed to fetch')) {
        errorMessage = 'Could not connect to the text-to-speech service. Please check your network connection.';
      } else if (ttsError.message) {
        errorMessage = ttsError.message;
      }
      
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in TTS API:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
