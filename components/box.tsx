import React from 'react';
import Card from '@/components/card';
import { Sticker } from '@/types';
import LocalData from '@/data/dataset.json';

const Box: React.FC<{ featuredStickers: Sticker[] }> = ({ featuredStickers }) => {
  return (
    <div className='border-2 border-cyan-800 flex flex-row p-4 rounded-md m-2 overflow-x-auto'>
      <div className='flex flex-row'>
        {featuredStickers.map((sticker) => (
          <Card key={sticker.sticker_id} sticker={sticker} />
        ))}
      </div>
    </div>
  );
};

export default Box;
