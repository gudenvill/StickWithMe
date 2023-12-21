import React, { createContext, useState, useContext } from 'react';
import { CartItem, Sticker } from '@/types';

interface CartContextProps {
    items: CartItem[];
    addToCart: (sticker: Sticker, size: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        return { items: [], addToCart: () => {} };
    }
    return context;
};

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const addToCart = (sticker: Sticker, size: string) => {
    };

    return (
        <CartContext.Provider value={{ items, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};