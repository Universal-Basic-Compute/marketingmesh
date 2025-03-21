import { findUserByEmail, createUser } from '../../../lib/airtable';
import { hashPassword } from '../../../lib/auth';

export default async function handler(req, res) {
  // Set proper content type header
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Check if Airtable environment variables are set
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      console.error('Missing Airtable environment variables');
      return res.status(500).json({ message: 'Server configuration error' });
    }

    // Check if user already exists
    try {
      const existingUser = await findUserByEmail(email);
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
    } catch (error) {
      console.error('Error checking existing user:', error);
      return res.status(500).json({ message: 'Error checking user existence' });
    }

    // Hash password
    let passwordData;
    try {
      passwordData = await hashPassword(password);
    } catch (error) {
      console.error('Error hashing password:', error);
      return res.status(500).json({ message: 'Error processing password' });
    }

    // Create user
    try {
      const newUser = await createUser({
        email,
        passwordHash: passwordData.hash,
        passwordSalt: passwordData.salt || ''
      });

      return res.status(201).json({
        message: 'User created successfully',
        user: {
          id: newUser.id,
          email: newUser.email
        }
      });
    } catch (error) {
      console.error('Error creating user in Airtable:', error);
      return res.status(500).json({ message: 'Error creating user account' });
    }
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
