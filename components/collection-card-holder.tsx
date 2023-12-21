// CollectionCardHolder.tsx
import React, { useEffect, useState } from 'react';
import CollectionCard from "./collection-card";
import { Category } from '@/types'; // Import your Category type

const CollectionCardHolder = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('/api/getCategory'); // Adjust the endpoint as necessary
            if (!response.ok) {
                console.error('Failed to fetch categories');
                return;
            }
            const data = await response.json();
            setCategories(data);
        };

        fetchCategories();
    }, []);

    return ( 
        <div className="flex flex-row overflow-x-auto gap-4 p-4 w-full">
            {categories.map(category => (
                <CollectionCard key={category.category_id} category={category} />
            ))}
        </div>
    );
};

export default CollectionCardHolder;
