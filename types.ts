export interface Sticker {
  sticker_id: number;
  name: string;
  description?: string;
  price: number;
  subcategoryId?: number; // Reflects the relation to Subcategory
  featured: number; // Or boolean, depending on how you handle it in your app
  inStock: number; // Or boolean
  handle?: string;
  image_url?: string;
}

export interface Subcategory {
  subcategory_id: number;
  name: string;
  categoryId: number; // Reflects the relation to Category
  stickers?: Sticker[]; // Array of Sticker objects
}

export interface Category {
  category_id: number;
  name: string;
  bg_url?: string;
  fg_url?: string;
  subcategories?: Subcategory[]; // Array of Subcategory objects
}

export const STICKER_SIZES = ['S', 'M', 'L'] as const;

export type StickerSize = typeof STICKER_SIZES[number];

export interface CartItem {
  sticker: Sticker;
  quantity: number;
  selectedSize: StickerSize;
  price: number;

}