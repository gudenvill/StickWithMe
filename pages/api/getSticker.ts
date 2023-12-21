// pages/api/getStickers.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  // Assuming you're fetching all stickers or you can implement query parameters to fetch specific stickers
  try {
    const stickers = await prisma.sticker.findMany();
    res.status(200).json(stickers);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch stickers" });
  }
}
