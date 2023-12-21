import React from 'react';
import Layout from './layout';
import { useEffect, useState } from 'react';
import { Category } from '@/types';
import Navbar from '@/components/nav-bar';
import Image from 'next/image';
import Link from 'next/link';


export default function CollectionsPage() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch('/api/getCategory');
            const data = await response.json();
            console.log("Fetched Categories:", data); // Check what is being returned
            setCategories(data);
        }

        fetchCategories();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='flex flex-col items-center border-black'>
                {categories.map((category) => (
                    <div key={category.category_id} className='relative w-full border-black' style={{ maxWidth: '1300px', minWidth: '370px', margin: 'auto' }}>
                        {/* Background Image */}
                        <div className='relative mb-4' style={{ width: '100%', height: '0', paddingBottom: '19.25%' /* 732/3800 * 100 */ }}>
                            {category.bg_url && (
                                <Image
                                    src={category.bg_url}
                                    alt={`${category.name} background`}
                                    layout='fill'
                                    objectFit='contain'
                                    quality={100}
                                />
                            )}
                            <Link href={`/category/${category.category_id}`}>
                                <div className='absolute bottom-5 left-5 bg-white py-2 px-4 text-black rounded'>
                                    View {category.name}
                                </div>
                            </Link>
                            {/* Foreground Image */}
                            {category.fg_url && (
                                <div className='absolute' style={{ width: '34.53%' /* 1312/3800 * 100 */, height: '100%', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                                    <Image
                                        src={category.fg_url}
                                        alt={`${category.name} foreground`}
                                        layout='fill'
                                        objectFit='contain'
                                        quality={100}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}