import { dbAll } from 'utils/sqlite';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await dbAll('SELECT rowid AS id, info FROM lorem');
  res.status(200).json(data);
};
