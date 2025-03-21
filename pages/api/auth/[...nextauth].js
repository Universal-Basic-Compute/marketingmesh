import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { findUserByEmail } from '../../../lib/airtable';
import { verifyPassword } from '../../../lib/auth';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          // Check if credentials are provided
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const user = await findUserByEmail(credentials.email);
          
          if (!user) {
            return null;
          }
          
          const isValid = await verifyPassword(credentials.password, user.passwordHash);
          
          if (!isValid) {
            return null;
          }
          
          return {
            id: user.id,
            email: user.email
          };
        } catch (error) {
          console.error('Error in authorize:', error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
  },
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET || 'your-fallback-secret-key-for-development',
});
