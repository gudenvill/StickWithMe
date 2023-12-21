import { useState } from 'react';
import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Navbar from '@/components/nav-bar';
import Head from 'next/head';
import { Sticker } from '@/types';
import { MdAddShoppingCart } from "react-icons/md";
import styles from "./[product].module.css";



interface ProductPageProps {
  sticker: Sticker | null;
}

const ProductPage: React.FC<ProductPageProps> = ({ sticker }) => {

   const [selectedSize, setSelectedSize] = useState('M');
   const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
   };



  if (!sticker) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{sticker.name}</title>
      </Head>
      <Navbar />
      <main className={`flex flex-col md:flex-row px-16`}>
        <div className='w-full md:w-1/2 p-8 md:p-2'>
          <img src={sticker.image_url} alt={sticker.name} />
        </div>
        <div className='custom-font w-full md:w-1/2 p-5 flex flex-col justify-center items-left px-16'>
          <h2 className='text-3xl mb-4 font-medium'>{sticker.name}</h2>
          <h4 className='font-light text-xs'>Price</h4>
          <h3 className='text-xl mb-4 font-semibold'>${sticker.price}</h3>
          <p className='mb-4'>{sticker.description}</p>
          <div className='flex flex-row'>
            <button
              className={`m-1 rounded-full w-12 h-12 flex items-center justify-center border-black border-2 font-bold ${
                selectedSize === 'S' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
              }`}
              onClick={() => handleSizeSelect('S')}
            >
              S
            </button>
            <button
              className={`m-1 rounded-full w-12 h-12 flex items-center justify-center border-black border-2 font-bold ${
                selectedSize === 'M' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
              }`}
              onClick={() => handleSizeSelect('M')}
            >
              M
            </button>
            <button
              className={`m-1 rounded-full w-12 h-12 flex items-center justify-center border-black border-2 font-bold ${
                selectedSize === 'L' ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
              }`}
              onClick={() => handleSizeSelect('L')}
            >
              L
            </button>
            <button className=' text-black flex w-16 h-14 border-2 rounded-lg border-black text-sm p-1 ml-4 hover:text-white hover:bg-black'>
                <h4 className='font-light'>Size Guide</h4>
            </button>
          </div>
          <button className='mt-6 border-2 solid w-36 h-12 rounded-lg flex  items-center justify-center border-black hover:text-white hover:bg-black'>
            <MdAddShoppingCart className='text-3xl m-2'/>
            <span className='text-md '>ADD TO CART</span>
          </button>
          

          {/* Additional content or actions, like an "Add to Cart" button */}
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (
  context: GetServerSidePropsContext
) => {
  const productId = context.params?.product;

  if (!productId) {
    return { props: { sticker: null } };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sticker/${productId}`);
    if (!res.ok) {
      console.error('API request failed:', res.status, res.statusText);
      throw new Error('Failed to fetch');
    }
    const sticker: Sticker = await res.json();

    return { props: { sticker } };
  } catch (error) {
    console.error('API request error:', error);
    return { props: { sticker: null } };
  }
};

export default ProductPage;
