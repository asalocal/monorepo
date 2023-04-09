import NextAuth, { Awaitable } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import BuildYourTrip from 'auth/BuildYourTrip';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return await NextAuth(req, res, {
    providers: [
      BuildYourTrip(async (credentials) => {
        try {
          const data = await fetch('http://localhost:3333/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });

          const user = await data.json();

          if (data.ok) {
            return user;
          }
        } catch (err) {
          console.error(err);
        }

        return null;
      }),
      GitHubProvider({
        clientId: process.env.NEXTAUTH_GITHUB_CLIENT_ID,
        clientSecret: process.env.NEXTAUTH_GITHUB_CLIENT_SECRET,
      }),
    ],

    secret: '9909a8c25150df1947166b5aa5d1e8bd409a06af5354b6bd2b803394cb94f16c',

    jwt: {
      encode: ({ secret, token }): Awaitable<string> => {
        if (token?.token) return token?.token as string;

        return req.cookies['next-auth.session-token'] as Awaitable<string>;
      },
      decode: async ({ token, secret }) => {
        if (!token) {
          return null;
        }

        return verify(token, secret) as JwtPayload;
      },
    },

    callbacks: {
      async jwt({ token, user, account }: any) {
        return { ...token, ...user, ...account };
      },

      async session({ session, token }: any) {
        if (!session.user) return token;

        session = { ...session, ...token };

        return session;
      },
    },
  });
};
