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
      session.user.id = token.id;
      return session;
    }
  },
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
});
