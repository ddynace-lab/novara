"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

import { supabase } from "@/lib/supabase";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="text-3xl font-black tracking-tight text-teal-400"
        >
          Novara
        </Link>

        <nav className="hidden items-center gap-8 md:flex">

          <Link href="/">Home</Link>

          <Link href="/">Books</Link>

          <Link href="/premium">Premium</Link>

          <Link href="/favorites">Favorites</Link>

          <Link href="/library">Library</Link>

          <Link
            href="/cart"
            className="relative"
          >
            🛒 Cart

            {cartCount > 0 && (
              <span className="absolute -right-5 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-black">
                {cartCount}
              </span>
            )}

          </Link>

          {user ? (
            <Link href="/profile">
              Profile
            </Link>
          ) : (
            <Link href="/login">
              Login
            </Link>
          )}

        </nav>

      </div>
    </header>
  );
}