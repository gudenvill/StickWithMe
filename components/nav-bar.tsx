import React, { useState} from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useCart } from '@/contexts/cart-context';
import DropdownMenu from "@/components/dropdown-menu";
import styles from "./nav-bar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartDisplay from './cart-display';


const Navbar = () => {
    const { items } = useCart();
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);

    const [isCartVisible, setIsCartVisible] = useState(false);
    const toggleCartDisplay = () => {
        setIsCartVisible(!isCartVisible);
    }

    




    return (
        <nav className={`${styles.navText} max-h-64 flex items-center justify-center bg-white px-4 py-2 shadow-md relative z-10 text-xs md:text-sm lg:text-lg`}>
            {/* Left buttons */}
            <div className="flex-1 flex justify-end">
                <Link href="/collections/page" passHref>
                    <button className="mx-2">Collections</button>
                </Link>
                <button className="mx-0 md:mx-2 hidden">Left Button 2</button>
            </div>

            {/* Centered logo */}
            <div className='object-contain'>
                <Link href="/" passHref>
                    <Image 
                        src="/images/logo.png"
                        width={150}
                        height={150}
                        alt="logo"
                        className="z-10"
                    />
                </Link>
            </div>

            {/* Right buttons and dropdown container */}
            <div className="flex-1 flex justify-between relative">
                <button className="mx-0 md:mx-2 ">About us</button>
                <div className="relative">
                </div>
                <div className='flex justify-end'>
                    {/* Cart Button */}
                    <button className='flex items-center mx-2' onClick={toggleCartDisplay}>
                        <span className="bg-black text-white rounded-full px-1 py-0 sm:px-3 sm:py-1 text-xs flex items-center justify-center m-2">{totalItems}</span>
                        <FaShoppingCart/>
                    </button>
                    {isCartVisible && <CartDisplay />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
