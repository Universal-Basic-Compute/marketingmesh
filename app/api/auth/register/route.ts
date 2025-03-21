import { NextResponse } from 'next/server';
import { findUserByEmail, createUser } from '../../../../lib/airtable';
import { hashPassword } from '../../../../lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Check if Airtable environment variables are set
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      console.error('Missing Airtable environment variables');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Check if user already exists
    try {
      const existingUser = await findUserByEmail(email);
      if (existingUser) {
        return NextResponse.json(
          { message: 'User already exists' },
          { status: 409 }
        );
      }
    } catch (error) {
      console.error('Error checking existing user:', error);
      return NextResponse.json(
        { message: 'Error checking user existence' },
        { status: 500 }
      );
    }

    // Hash password
    let passwordData;
    try {
      passwordData = await hashPassword(password);
    } catch (error) {
      console.error('Error hashing password:', error);
      return NextResponse.json(
        { message: 'Error processing password' },
        { status: 500 }
      );
    }

    // Create user
    try {
      const newUser = await createUser({
        email,
        passwordHash: passwordData.hash,
        passwordSalt: passwordData.salt || ''
      });

      return NextResponse.json(
        {
          message: 'User created successfully',
          user: {
            id: newUser.id,
            email: newUser.email
          }
        },
        { status: 201 }
      );
    } catch (error) {
      console.error('Error creating user in Airtable:', error);
      return NextResponse.json(
        { message: 'Error creating user account' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
