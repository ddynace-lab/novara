"use client";

import Container from "@/components/layout/Container";
import BookCard from "@/components/books/BookCard";
import { books } from "@/data/books";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-16 text-white">
      <Container>

        <h1 className="mb-2 text-5xl font-black">
          Library
        </h1>

        <p className="mb-12 text-slate-400">
          Browse the complete Novara collection.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}
        </div>

      </Container>
    </main>
  );
}