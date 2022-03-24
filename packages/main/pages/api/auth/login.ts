import { dbGet } from 'utils/sqlite';
import HmacSHA512 from 'crypto-js/hmac-sha512';
import aes from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8';
import { NextApiRequest, NextApiResponse } from 'next';
import Jwt from 'jsonwebtoken';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      body: { formData },
    } = req;
    const bytes = aes.decrypt(formData, process.env.SECRET_KEY);
    const { id, password } = JSON.parse(bytes.toString(enc));
    const hash = HmacSHA512(password, process.env.SECRET_KEY).toString();
    if (id && password) {
      try {
        const data = await dbGet(`SELECT id
                                          FROM member
                                          where id = '${id}'
                                            and pass = '${hash}'`);
        const token = Jwt.sign(
          {
            data,
            iat: Date.now() * 1,
            exp: Date.now() * 1 + 600000,
          },
          process.env.SECRET_KEY,
        );
        const result = aes
          .encrypt(JSON.stringify(token), process.env.SECRET_KEY)
          .toString();
        res.setHeader;
        if (result) res.status(200).json({ result });
        else res.status(400).json({ result: 'ID OR PASSWORD ERROR' });
      } catch (e) {
        res.status(400).json({ result: 'ID OR PASSWORD ERROR' });
      }
    } else {
      res.status(400).json({ result: 'ID OR PASSWORD ERROR' });
    }
  }
}
