import React, { useState, useEffect } from 'react';
import Card2 from '@/components/card2'; // Import the Card component
import { Category, Subcategory } from '@/types'; // Import your types

const CategoryProducts = ({ category }: { category: Category }) => {
    // Initialize subcategory visibility state using subcategory_id
    const [visibleSubcategories, setVisibleSubcategories] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        // Set all subcategories to be visible by default, using subcategory_id
        const initialVisibility: { [key: number]: boolean } = {};
        category.subcategories?.forEach((subcategory) => {
            initialVisibility[subcategory.subcategory_id] = true;
        });
        setVisibleSubcategories(initialVisibility);
    }, [category.subcategories]);

    // Correctly type the parameter for toggleSubcategory and use subcategory_id
    const toggleSubcategory = (subcategory_id: number) => {
        setVisibleSubcategories(prev => ({
            ...prev,
            [subcategory_id]: !prev[subcategory_id]
        }));
    };

    return (
        <div className='w-full'>
            {/* Conditional rendering for buttons if subcategories exist */}
            {category.subcategories && category.subcategories.length > 0 && (
                <div className='flex justify-center space-x-2 mb-4'>
                    {category.subcategories.map((subcategory: Subcategory) => (
                        <button
                            key={subcategory.subcategory_id}
                            onClick={() => toggleSubcategory(subcategory.subcategory_id)}
                            className={`p-2 rounded mt-4 ${visibleSubcategories[subcategory.subcategory_id] ? 'bg-black text-white' : 'bg-gray-200'}`}
                        >
                            {subcategory.name}
                        </button>
                    ))}
                </div>
            )}

            <div className='w-full grid grid-cols-3 gap-2'>
                {category.subcategories?.map((subcategory: Subcategory) => 
                    visibleSubcategories[subcategory.subcategory_id] && subcategory.stickers?.map(sticker => 
                        <Card2 key={sticker.sticker_id} sticker={sticker} />
                    )
                )}
            </div>
        </div>
    );
};

export default CategoryProducts;
