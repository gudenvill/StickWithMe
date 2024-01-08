import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '@/contexts/cart-context';
import { CartItem } from '@/types';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

const CartDisplay: React.FC = () => {
    const { items, removeFromCart } = useCart();

    const initiateCheckout = async () => {
        // Existing checkout initiation logic
        try {
            const response = await fetch('/api/stripe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ items })
            });

            const { sessionId } = await response.json();
            const stripe = await stripePromise;

            if (stripe) {
                const result = await stripe.redirectToCheckout({ sessionId });
                if (result.error) {
                    console.error('Stripe error:', result.error.message);
                }
            } else {
                console.error('Stripe not loaded');
            }
        } catch (error) {
            console.error('Checkout error:', error);
        }
    };

    return (
        <div className="absolute right-0 top-full w-72 bg-white shadow-md z-50 p-4 rounded-lg overflow-y-auto max-h-[80vh]">
            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div>
                        {items.map((item) => (
                            <div key={`${item.sticker.sticker_id}-${item.selectedSize}`} 
                                 className={`flex items-center ${items.indexOf(item) < items.length - 1 ? 'border-b border-gray-200' : ''} py-2`}>
                                <img src={item.sticker.image_url} alt={item.sticker.name} className="w-10 h-10 mr-4 rounded" />
                                <div>
                                    <p className="m-1 text-sm font-bold text-gray-800">{item.sticker.name}</p>
                                    <p className="m-0 text-xs text-gray-800">Size: {item.selectedSize}</p>
                                    <p className="m-0 text-xs text-gray-800">Quantity: {item.quantity}</p>
                                    <p className="m-0 text-xs text-gray-800">Price: ${item.price}</p>
                                </div>
                                <button onClick={() => removeFromCart(item.sticker.sticker_id, item.selectedSize)}
                                        className="ml-auto py-1 px-2 bg-red-500 text-white rounded cursor-pointer hover:bg-red-700">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="text-right mt-4">
                        <button onClick={initiateCheckout} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartDisplay;
