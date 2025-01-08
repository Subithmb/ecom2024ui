/* eslint-disable */

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
const publicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "";
import stripePromise from "./stripe";
// const stripePromise = loadStripe(publicKey);

export default function PaymentPage() {
  const [amount, setAmount] = useState(1000); // example amount in cents
  const [clientSecret, setClientSecret] = useState(
    "sk_test_51Qck6OIXREHgOpf76B56H71FqNLdkfA3ozsNWTI92rueGfUu0YddO1jOBOeXULfqudZPZHtrvwJ2C2fb0QTd23FF00D4On83H9",
  );

  //   const handlePayment = async () => {
  //     const stripe = await stripePromise;

  //     const response = await fetch('/api/payments/create-intent', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ amount, currency: 'usd' }),
  //     });

  //     const { clientSecret } = await response.json();
  //     const result = await stripe?.confirmCardPayment(clientSecret);

  //     if (result?.error) {
  //       console.error(result.error.message);
  //     } else if (result?.paymentIntent.status === 'succeeded') {
  //       console.log('Payment successful!');
  //     }
  //   };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <Elements options={options as any} stripe={stripePromise}>
        <h1>Make a Payment</h1>
        <PaymentElement id="12" />
      </Elements>
    </div>
  );
}
/* eslint-enable */
