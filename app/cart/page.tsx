"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { books } from "../../data/books";

type CartItem = {
  id: string;
  quantity: number;
};

export default function CartPage() {
  // Demo cart (later we'll replace this with global state)
  const [cart, setCart] = useState<CartItem[]>([
    { id: "1", quantity: 1 },
    { id: "2", quantity: 2 },
  ]);

  const cartBooks = cart.map((item) => {
    const book = books.find((b) => b.id === item.id)!;

    return {
      ...book,
      quantity: item.quantity,
      total: book.price * item.quantity,
    };
  });

  const subtotal = useMemo(() => {
    return cartBooks.reduce((sum, item) => sum + item.total, 0);
  }, [cartBooks]);

  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal + shipping;

  function increase(id: string) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decrease(id: string) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.max(1, item.quantity - 1),
              }
            : item
        )
    );
  }

  function remove(id: string) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-12 text-5xl font-black">
          Shopping Cart
        </h1>

        {cartBooks.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">

            <h2 className="text-2xl font-bold">
              Your cart is empty
            </h2>

            <p className="mt-4 text-slate-400">
              Browse the library and add some books.
            </p>

            <Link
              href="/"
              className="mt-8 inline-block rounded-xl bg-teal-500 px-6 py-3 font-semibold hover:bg-teal-400"
            >
              Continue Shopping
            </Link>

          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

            {/* Items */}
            <div className="space-y-6">

              {cartBooks.map((book) => (
                <div
                  key={book.id}
                  className="flex gap-6 rounded-2xl border border-slate-800 bg-slate-900 p-5"
                >

                  <img
                    src={book.cover}
                    alt={book.title}
                    className="h-40 w-28 rounded-xl object-cover"
                  />

                  <div className="flex flex-1 flex-col justify-between">

                    <div>

                      <h2 className="text-2xl font-bold">
                        {book.title}
                      </h2>

                      <p className="text-slate-400">
                        {book.author}
                      </p>

                      <p className="mt-3 text-teal-400">
                        ${book.price.toFixed(2)}
                      </p>

                    </div>

                    <div className="flex flex-wrap items-center gap-4">

                      <div className="flex items-center rounded-xl border border-slate-700">

                        <button
                          onClick={() => decrease(book.id)}
                          className="px-4 py-2 hover:bg-slate-800"
                        >
                          -
                        </button>

                        <span className="px-5">
                          {book.quantity}
                        </span>

                        <button
                          onClick={() => increase(book.id)}
                          className="px-4 py-2 hover:bg-slate-800"
                        >
                          +
                        </button>

                      </div>

                      <button
                        onClick={() => remove(book.id)}
                        className="rounded-xl border border-red-500 px-4 py-2 text-red-400 hover:bg-red-500 hover:text-white"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* Summary */}
            <div className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <h2 className="mb-6 text-2xl font-bold">
                Order Summary
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <hr className="border-slate-700" />

                <div className="flex justify-between text-xl font-bold">

                  <span>Total</span>

                  <span className="text-teal-400">
                    ${total.toFixed(2)}
                  </span>

                </div>

              </div>

              <button className="mt-8 w-full rounded-xl bg-teal-500 py-4 font-bold transition hover:bg-teal-400">
                Proceed to Checkout
              </button>

            </div>

          </div>
        )}

      </div>

    </main>
  );
}