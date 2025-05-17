import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'feedback.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { text } = req.body;

    if (typeof text !== 'string' || !text.trim()) {
      return res.status(400).json({ message: 'Var god skriv något :)' });
    }

    let data: string[] = [];

    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      data = JSON.parse(fileData);
    }

    data.push(text);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return res.status(200).json({ message: 'Skickat och klart!' });
  }

  res.status(405).json({ message: 'Method not allowed' });
}