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
    
    // Send the text to be converted to speech
    const audioBlob = await textToSpeech(text, {
      voiceId,
      model
    });
    
    // Create a response with the audio blob
    const response = new NextResponse(audioBlob);
    response.headers.set('Content-Type', 'audio/mpeg');
    
    return response;
  } catch (error) {
    console.error('Error in TTS API:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
