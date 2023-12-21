// pages/_app.tsx
import type { AppProps } from 'next/app';
import { CartProvider } from '@/contexts/cart-context';
import '../app/globals.css'; // Adjust the path to your global CSS file
import '../public/fonts/inter.css'; // Adjust the path if necessary


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <Component {...pageProps} />;
        </CartProvider>
    
    )
}

export default MyApp;
