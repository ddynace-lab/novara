"use client";

import Link from "next/link";
import type { Book } from "../../data/books";
import { useFavorites } from "@/app/context/FavoritesContext";

type Props = {
  book: Book;
};

export default function BookCard({ book }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const favorite = isFavorite(book.id);

  return (
    <Link href={`/book/${book.id}`}>
      <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-500 hover:-translate-y-1 hover:border-teal-500 hover:shadow-2xl">

        <div className="relative overflow-hidden">

          <img
            src={book.cover}
            alt={book.title}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(book.id);
            }}
            className="absolute right-3 top-3 rounded-full bg-slate-900/80 p-2 text-xl transition hover:scale-110"
          >
            {favorite ? "❤️" : "🤍"}
          </button>

        </div>

        <div className="space-y-3 p-5">

          <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-400">
            {book.genre}
          </span>

          <h3 className="text-xl font-bold text-white">
            {book.title}
          </h3>

          <p className="text-sm text-slate-400">
            {book.author}
          </p>

          <div className="flex items-center justify-between">

            <span className="text-amber-400">
              ⭐ {book.rating}
            </span>

            <span className="font-bold text-teal-400">
              ${book.price.toFixed(2)}
            </span>

          </div>

          <button className="mt-2 w-full rounded-xl bg-teal-500 py-3 font-semibold text-white transition hover:bg-teal-400">
            View Details
          </button>

        </div>

      </article>
    </Link>
  );
}