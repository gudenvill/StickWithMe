import productData from '@/data/dataset.json';

export const getStickerData = (productId: string) => {
    // Loop through each category and search for the product in its stickers array
    for (const category of productData.categories) {
        const foundProduct = category.stickers.find(sticker => sticker.id === productId);
        if (foundProduct) {
            return foundProduct;
        }
    }

    // Return null or undefined if the product is not found
    return null;
}
