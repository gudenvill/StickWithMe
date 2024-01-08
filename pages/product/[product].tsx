import React, { useState } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Navbar from '@/components/nav-bar';
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from '@/contexts/cart-context';
import SizeGuideModal from '@/modals/size-modal';
import { Sticker, StickerSize } from '@/types';
import Footer from '@/components/footer';

const SIZE_PRICE_FACTORS: Record<StickerSize, number> = {
  S: 0.8,
  M: 1,
  L: 1.2
};

const calculatePrice = (basePrice: number, selectedSize: StickerSize): number => {
  const factor = SIZE_PRICE_FACTORS[selectedSize] || 1;
  return parseFloat((basePrice * factor).toFixed(2));
};

interface ProductPageProps {
  sticker: Sticker | null;
}

const ProductPage: React.FC<ProductPageProps> = ({ sticker }) => {

  const backgroundStyle = {
    backgroundImage: 'url(/images/wallpaper.jpg)', // Direct reference to the image in the public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // This ensures that the background covers at least the full height of the viewport
    width: '100%' // Ensures the background covers the full width
  };




  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<StickerSize>('M');
  const [isSizeGuideOpen, setSizeGuideOpen] = useState(false);

  const handleSizeSelect = (size: StickerSize) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (sticker) {
      const finalPrice = calculatePrice(sticker.price, selectedSize);
      addToCart(sticker, selectedSize, finalPrice);
    }
  };

  const toggleSizeGuide = () => {
    setSizeGuideOpen(!isSizeGuideOpen);
  };

  if (!sticker) {
    return <div>Loading...</div>;
  }

  return (
    <div style={backgroundStyle}>
      <Head>
        <title>{sticker.name}</title>
      </Head>
      <Navbar />
      <main className="flex flex-col md:flex-row px-4 lg:px-16 bg-gray-300 bg-opacity-50">
        <div className='w-full md:w-1/2 p-2 md:p-2'>
          <img src={sticker.image_url} alt={sticker.name} />
        </div>

        <div className='custom-font w-full md:w-1/2 p-2 md:p-5 flex flex-col justify-center items-left px-2 md:px-16'>
          <h2 className='text-2xl md:text-3xl mb-4 font-medium'>{sticker.name}</h2>
          <h4 className='font-light text-xs'>Price</h4>
          <h3 className='text-lg md:text-xl mb-4 font-semibold'>
            ${sticker ? calculatePrice(sticker.price, selectedSize) : 'Loading...'}
          </h3>
          <p className='mb-4 text-sm lg:text-base'>{sticker.description}</p>

          <div className='flex flex-row'>
            {['S', 'M', 'L'].map(size => (
              <button
                key={size}
                className={`m-1 rounded-full w-12 h-12 flex items-center justify-center border-black border-2 font-bold ${
                  selectedSize === size ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
                }`}
                onClick={() => handleSizeSelect(size as StickerSize)}
              >
                {size}
              </button>
            ))}
            <button className='text-black flex w-16 h-14 border-2 rounded-lg border-black text-sm p-1 ml-4 hover:text-white hover:bg-black' onClick={toggleSizeGuide}>
              <h4 className='font-light'>Size Guide</h4>
            </button>
          </div>

          <button onClick={handleAddToCart} className='mt-6 border-2 solid w-36 h-12 rounded-lg flex items-center justify-center border-black hover:text-white hover:bg-black'>
            <MdAddShoppingCart className='text-3xl m-2'/>
            <span className='text-md '>ADD TO CART</span>
          </button>
        </div>
      </main>

      {isSizeGuideOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <SizeGuideModal isOpen={isSizeGuideOpen} onClose={toggleSizeGuide} />
        </div>
      )}

      <Footer />
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
