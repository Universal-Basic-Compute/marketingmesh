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
    
    // Send the message to Kinos with the mode parameter
    const response = await sendMessageToKinos(email, content, {
      mode, // Pass the mode parameter
      attachments,
      images,
      model,
      historyLength
    });
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in Kinos message API:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
