import { NextResponse } from 'next/server';
import { sendMessageToKinos, formatEmailForProjectId } from '../../../../lib/kinos-api';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function POST(request: Request) {
  try {
    // Get the session to verify the user is authenticated
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Get the user's email from the session
    const email = session.user.email;
    
    // Parse the request body
    const body = await request.json();
    const { content, mode, attachments, images, model, historyLength } = body;
    
    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
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
    
    // Send the message to Kinos with the mode parameter
    try {
      const response = await sendMessageToKinos(email, content, {
        mode, // Pass the mode parameter
        attachments,
        images,
        model,
        historyLength
      });
      
      return NextResponse.json(response);
    } catch (kinosError) {
      console.error('Error from Kinos API:', kinosError);
      
      // Create a more user-friendly error message
      let errorMessage = 'Failed to process your message';
      
      if (kinosError.message && kinosError.message.includes('Failed to fetch')) {
        errorMessage = 'Could not connect to the AI service. Please check your network connection.';
      } else if (kinosError.message) {
        errorMessage = kinosError.message;
      }
      
      return NextResponse.json(
        { error: errorMessage, response: 'I apologize, but I encountered an error processing your request. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in Kinos message API:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error', response: 'Sorry, something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
