import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useCart } from '@/contexts/cart-context';
import DropdownMenu from "@/components/dropdown-menu";
import styles from "./nav-bar.module.css";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    const { items } = useCart();

    const totalItems = items.reduce((total, item) => total + item.quantity, 0);



    return (
        <nav className={`${styles.navText} max-h-64 flex items-center justify-center bg-white px-4 py-2 shadow-md relative z-10`}>
            {/* Left buttons */}
            <div className="flex-1 flex justify-end">
                <Link href="/collections/page" passHref>
                    <button className="mx-2">Collections</button>
                </Link>
                <button className="mx-2 hidden">Left Button 2</button>
            </div>

            {/* Centered logo */}
            <div className='object-contain lg:object-scale-down'>
                <Image 
                    src="/images/logo.png"
                    width={150}
                    height={150}
                    alt="logo"
                    className="z-10"
                />
            </div>

            {/* Right buttons and dropdown container */}
            <div className="flex-1 flex justify-start relative">
                <div className="relative">
                    {/* Cart Button */}
                    <button className='mx-2'>
                        {totalItems}
                        <FaShoppingCart />
                    </button>
                </div>
                <button className="mx-2 ">About us</button>
            </div>
        </nav>
    );
};

export default Navbar;
