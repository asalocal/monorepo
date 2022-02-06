import { NextApiRequest, NextApiResponse } from 'next';

import { trips } from 'mocks/trips';

export default function getTrips(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === 'GET') {
    return response.status(200).json(trips);
  }

  return response.status(400).json({
    error: 'METHOD NOT ALLOWED',
  });
}
