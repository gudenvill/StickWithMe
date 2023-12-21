import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Card from '@/components/card'; // Import the Card component
import { Sticker } from '@/types'; // Import your Sticker type
import styles from './featured.module.css';


const FeaturedProducts = () => {
    const [featuredStickers, setFeaturedStickers] = useState<Sticker[]>([]);

    useEffect(() => {
        async function fetchFeaturedStickers() {
            try {
              const response = await fetch('/api/getSticker');
              if (!response.ok) {
                throw new Error('Failed to fetch');
              }
              const stickers = await response.json();
              const featured = stickers.filter((sticker: Sticker) => sticker.featured === 1);
              setFeaturedStickers(featured);
            } catch (error) {
              console.error('Error fetching stickers:', error);
            }
          }
          

    fetchFeaturedStickers();
  }, []);
    return ( 
        <div className='w-full'>
            <div className={styles.textBorder}>
              <div className='font-bold text-2xl my-3 text-border'>Featured Products:</div>
            </div>
            <div className='w-full gap-4 flex flex-row overflow-x-auto'>
                {featuredStickers.map(sticker => (
                    <Card key={sticker.sticker_id} sticker={sticker} />
                ))}
            </div>
        </div>
     );
}
 
export default FeaturedProducts;