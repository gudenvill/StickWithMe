import React, { createContext, useState, useContext, useEffect } from 'react';
import { CartItem, Sticker, StickerSize } from '@/types';

interface CartContextProps {
    items: CartItem[];
    addToCart: (sticker: Sticker, size: StickerSize, price: number) => void;
    removeFromCart: (stickerId: number, size: StickerSize) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setItems(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    const addToCart = (sticker: Sticker, size: StickerSize, price: number) => {
        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.sticker.sticker_id === sticker.sticker_id && item.selectedSize === size);
            
            if (existingItem) {
                return prevItems.map(item => 
                    item.sticker.sticker_id === sticker.sticker_id && item.selectedSize === size
                    ? { ...item, quantity: item.quantity + 1, price }
                    : item
                );
            } else {
                return [...prevItems, { sticker, selectedSize: size, quantity: 1, price }];
            }
        });
    };

    const removeFromCart = (stickerId: number, size: StickerSize) => {
        setItems(prevItems => prevItems.filter(item => item.sticker.sticker_id !== stickerId || item.selectedSize !== size));
    };

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
