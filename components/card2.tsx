// Card.tsx
import defaultImage from '../public/images/logo.png'; // Import a default image
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sticker, StickerSize } from '@/types'; // Adjust the import path as needed
import { MdOutlineAddShoppingCart, MdOutlineZoomOutMap } from "react-icons/md";
import { useCart } from '@/contexts/cart-context';

const Card: React.FC<{ sticker: Sticker }> = ({ sticker }) => {
    const { addToCart } = useCart();
    const defaultSize: StickerSize = 'M';
    const handleAddToCart = () => {
        addToCart(sticker, defaultSize, price);
    };
    return (
        <div className="w-full flex-shrink-0 rounded-lg border-none hover:border-2 border-yellow-500 xs:p-1 xs:m-1 bg-gray-300 bg-opacity-50 shadow-2xl">
            {/* Use next/image for optimized image loading */}
            <div className='p-2 flex flex-col items-center'>
                <h3 className="text-3xl font-light sm:p-2">{sticker.name}</h3>
            </div>
            <div className="w-full p-2 ">
                <Image 
                    src={sticker.image_url || defaultImage} 
                    alt={sticker.name} 
                    width={320} // Adjust as needed
                    height={180} // Adjust for your aspect ratio
                    layout="responsive"
                    
                />
            </div>
            <div className="p- flex flex-col items-center">
                <p className="text-2xl font-bold py-3">${sticker.price}</p>
                {/* Include other sticker details here */}
            </div>
            <div className="flex flex-row justify-center text-white text-xs md:text-base lg:text-2xl mb-3">
                <button onClick={handleAddToCart} className="bg-black hover:bg-white hover:text-black rounded-full p-2 inline-flex items-center justify-center m-1">
                    <MdOutlineAddShoppingCart className="inline" />
                </button>
                <Link href={`/product/${sticker.sticker_id}`}>
                    <button className="bg-black hover:bg-white hover:text-black rounded-full p-2 inline-flex items-center justify-center m-1">
                        <MdOutlineZoomOutMap className="inline" />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Card;
