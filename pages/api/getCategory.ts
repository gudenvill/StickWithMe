import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
    req: any,
    res: any
) {
    const categories = await prisma.category.findMany()
    res.status(200).json(categories)
}