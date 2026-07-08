"use client";

import { useRouter } from "next/navigation";

import { useCart } from "@/app/context/CartContext";

export default function AddToCartButton({
  id,
}: {
  id: string;
}) {
  const { addToCart } = useCart();
  const router = useRouter();

  function handleBuyNow() {
    addToCart(id);
    router.push("/checkout");
  }

  return (
    <button
      onClick={handleBuyNow}
      className="rounded-xl bg-teal-500 px-8 py-4 font-bold transition hover:bg-teal-400"
    >
      Buy Now
    </button>
  );
}