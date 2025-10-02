import { useRouter } from "next/router";

export default function PurchasePage() {
  const router = useRouter();
  const { courseId } = router.query;

  async function handlePurchase() {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({ courseId }),
      headers: { "Content-Type": "application/json" },
    });
    const { url } = await res.json();
    window.location = url; // Redirect to Stripe Checkout
  }

  return (
    <div className="container mx-auto p-4">
      <h1>Purchase Course</h1>
      <button
        onClick={handlePurchase}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Buy Now
      </button>
    </div>
  );
}
