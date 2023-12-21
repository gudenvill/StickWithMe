// pages/api/sticker/[sticker_id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { sticker_id } = req.query;

  try {
    // Use the correct unique identifier as per your Prisma schema
    const sticker = await prisma.sticker.findUnique({
      where: { sticker_id: Number(sticker_id) }, // Assuming 'sticker_id' is the unique field
    });

    if (sticker) {
      res.status(200).json(sticker);
    } else {
      res.status(404).json({ message: 'Sticker not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch sticker', error });
  }
}
