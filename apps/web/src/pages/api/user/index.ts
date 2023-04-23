import api from 'api/api';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXT_PUBLIC_SECRET;

export default async function getUserData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req, secret, raw: true });

  if (req.method === 'GET') {
    const user = await api.get('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.status(200).json(user.data);
  }

  return res.status(400).json({
    error: 'METHOD NOT ALLOWED',
  });
}
