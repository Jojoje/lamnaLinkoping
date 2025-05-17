import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'form.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, contact, misc } = req.body;

    if (!name || !contact) {
      return res.status(400).json({ message: 'Namn och något sätt att kontakta dig är obligatoriskt :)' });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let data: any[] = [];

    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      data = JSON.parse(fileData);
    }

    data.push({ name, contact, misc });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return res.status(200).json({ message: 'Anmäld!' });
  }

  res.status(405).json({ message: 'Method not allowed' });
}