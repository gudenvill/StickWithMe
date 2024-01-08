import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Stripe, StripeCardElement, StripeElements } from '@stripe/stripe-js';

const CheckoutForm: React.FC = () => {
    const stripe: Stripe | null = useStripe();
    const elements: StripeElements | null = useElements();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement: StripeCardElement | null = elements.getElement(CardElement);
        if (!cardElement) {
            return;
        }

        // Example: Sending a request to your backend to create a payment intent
        const response = await fetch('/api/payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 1000 }) // Example amount in cents
        });
        const paymentIntentRes = await response.json();

        // Confirming the card payment
        const result = await stripe.confirmCardPayment(paymentIntentRes.clientSecret, {
            payment_method: {
                card: cardElement,
                // Add additional payment method details if necessary
            }
        });

        if (result.error) {
            // Handle errors
            console.log('[error]', result.error.message);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                // Payment succeeded, handle accordingly
                console.log('Payment successful!');
                // You can redirect to a success page or update the UI accordingly
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>Pay</button>
        </form>
    );
};

export default CheckoutForm;
