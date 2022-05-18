import api from 'api/api';
import NextAuth, { Awaitable, User } from 'next-auth';
import { decode, JwtPayload, sign, verify } from 'jsonwebtoken';
import { JWT, JWTDecodeParams } from 'next-auth/jwt';

export default NextAuth({
  providers: [
    {
      id: 'default',
      name: 'Default',
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },

      async authorize(credentials): Promise<Omit<User, 'id'> | null> {
        const res = await api.post('/users/login', credentials);

        if (res.status === 200) {
          const { user } = res.data;

          return user;
        }

        return null;
      },
    },
  ],

  secret: '9909a8c25150df1947166b5aa5d1e8bd409a06af5354b6bd2b803394cb94f16c',

  jwt: {
    encode: async ({ secret, token }) => {
      const tokenEncoded = sign(token || '', secret, {
        algorithm: 'HS256',
      });

      return tokenEncoded;
    },
    decode: async ({ token, secret }) => {
      return verify(token as string, secret, {
        algorithms: ['HS256'],
      }) as JWT;
    },
  },

  callbacks: {
    async jwt({ token, user, account }: any) {
      return { ...token, ...user };
    },

    async session({ session, token }: any) {
      if (!session.user) return session;

      return {
        session,
        token,
      };
    },
  },
});
