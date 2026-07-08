"use client";

import Link from "next/link";

import Container from "@/components/layout/Container";
import BookCard from "@/components/books/BookCard";

import { books } from "@/data/books";
import { useFavorites } from "@/app/context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const favoriteBooks = books.filter((book) =>
    favorites.includes(book.id)
  );

  return (
    <main className="min-h-screen bg-slate-950 py-16 text-white">
      <Container>

        <h1 className="mb-2 text-5xl font-black">
          My Favorites
        </h1>

        <p className="mb-12 text-slate-400">
          Books you've marked as favorites.
        </p>

        {favoriteBooks.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center">

            <h2 className="mb-3 text-2xl font-bold">
              No favorite books yet
            </h2>

            <p className="mb-8 text-slate-400">
              Browse the library and tap the ❤️ button to save books.
            </p>

            <Link
              href="/"
              className="rounded-xl bg-teal-500 px-6 py-3 font-semibold hover:bg-teal-400"
            >
              Explore Books
            </Link>

          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {favoriteBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}

          </div>
        )}

      </Container>
    </main>
  );
}