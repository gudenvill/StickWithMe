import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { category_id } = req.query;
    if (typeof category_id !== 'string') {
        return res.status(400).json({ message: 'Invalid category ID' });
    }
    
    try {
        const category = await prisma.category.findUnique({
            where: { category_id: parseInt(category_id) },
            include: {
                subcategories: {
                    include: {
                        stickers: true,
                    },
                },
            },
        });

        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching category', error });
    }
}
