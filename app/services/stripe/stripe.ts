import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defind");
}
const stripePromise = loadStripe(
  "sk_test_51Qck6OIXREHgOpf76B56H71FqNLdkfA3ozsNWTI92rueGfUu0YddO1jOBOeXULfqudZPZHtrvwJ2C2fb0QTd23FF00D4On83H9",
);
export default stripePromise;
