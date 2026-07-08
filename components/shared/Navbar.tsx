"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const count = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-4 text-white">
      <Link href="/" className="text-2xl font-black text-teal-400">
        Novara
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-white text-slate-300">
          Home
        </Link>

        <Link href="/cart" className="relative">
          🛒 Cart

          {count > 0 && (
            <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-black">
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}