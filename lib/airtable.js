import Airtable from 'airtable';

// Check if environment variables are set
if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
  console.error('Missing Airtable environment variables');
}

const base = new Airtable({ 
  apiKey: process.env.AIRTABLE_API_KEY 
}).base(process.env.AIRTABLE_BASE_ID);

export const usersTable = base('USERS');

export async function findUserByEmail(email) {
  try {
    if (!email) {
      return null;
    }
    
    const records = await usersTable.select({
      filterByFormula: `{Email} = '${email}'`,
      maxRecords: 1
    }).firstPage();
    
    if (records.length === 0) {
      return null;
    }
    
    const record = records[0];
    return {
      id: record.id,
      email: record.fields.Email,
      passwordHash: record.fields.PasswordHash,
      passwordSalt: record.fields.PasswordSalt,
      createdAt: record.fields.CreatedAt
    };
  } catch (error) {
    console.error('Error finding user:', error);
    throw error;
  }
}

export async function createUser(userData) {
  try {
    if (!userData || !userData.email || !userData.passwordHash) {
      throw new Error('Invalid user data');
    }
    
    const records = await usersTable.create([
      {
        fields: {
          Email: userData.email,
          PasswordHash: userData.passwordHash,
          PasswordSalt: userData.passwordSalt || '',
          CreatedAt: new Date().toISOString()
        }
      }
    ]);
    
    const record = records[0];
    return {
      id: record.id,
      email: record.fields.Email,
      createdAt: record.fields.CreatedAt
    };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}
