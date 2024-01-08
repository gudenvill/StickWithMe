import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { items } = req.body;

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
          allowed_countries: ['US', 'CA'], // Specify allowed countries here
        },
        line_items: [
          ...items.map(item => ({
            price_data: {
              currency: 'usd',
              product_data: {
                name: `${item.sticker.name} - ${item.selectedSize}`,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          })),
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Shipping Fee',
              },
              unit_amount: 300,
            },
            quantity: 1,
          }
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/`,
      });

      res.status(200).json({ sessionId: session.id });
    } catch (error) {
      console.error('Stripe API error:', error);
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
