import { dbRun } from 'sqlite';
import HmacSHA512 from 'crypto-js/hmac-sha512';
import aes from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      body: { joinData },
    } = req;
    const bytes = aes.decrypt(joinData, process.env.SECRET_KEY);
    const { id, password } = JSON.parse(bytes.toString(enc));
    const hash = HmacSHA512(password, process.env.SECRET_KEY).toString();
    if (id && password) {
      try {
        const data = await dbRun(
          `INSERT INTO member(id, pass) VALUES('${id}', '${hash}')`,
        );
        res.status(200).json({ message: data });
      } catch (e) {
        res.status(400).json({ message: 'ID OR PASSWORD ERROR' });
      }
    } else {
      res.status(400).json({ message: 'ID OR PASSWORD ERROR' });
    }
  }
}
