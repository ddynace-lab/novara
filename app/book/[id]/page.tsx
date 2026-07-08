import Link from "next/link";
import { books } from "../../../data/books";

import AddToCartButton from "@/components/shared/AddToCartButton";
import FavoriteButton from "@/components/shared/FavoriteButton";

type Props = {
  params: {
    id: string;
  };
};

export default function BookPage({ params }: Props) {
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-black">
            Book Not Found
          </h1>

          <Link
            href="/"
            className="rounded-xl bg-teal-500 px-6 py-3 font-semibold hover:bg-teal-400"
          >
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedBooks = books
    .filter(
      (b) =>
        b.genre === book.genre &&
        b.id !== book.id
    )
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-950 py-16 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <Link
          href="/"
          className="mb-10 inline-block text-teal-400 hover:text-teal-300"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <img
              src={book.cover}
              alt={book.title}
              className="w-full max-w-md rounded-3xl shadow-2xl"
            />
          </div>

          <div>

            <span className="rounded-full bg-teal-500/20 px-4 py-2 text-sm text-teal-300">
              {book.genre}
            </span>

            <h1 className="mt-6 text-5xl font-black">
              {book.title}
            </h1>

            <p className="mt-2 text-xl text-slate-400">
              by {book.author}
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-300">
              <span>⭐ {book.rating} / 5</span>
              <span>{book.reviews.toLocaleString()} reviews</span>
              <span>{book.pages} pages</span>
              <span>{book.language}</span>
              <span>{book.published}</span>
            </div>

            <p className="mt-8 leading-8 text-slate-300">
              {book.description}
            </p>

            <div className="mt-10">
              <p className="text-sm text-slate-400">
                Price
              </p>

              <p className="text-4xl font-black text-teal-400">
                ${book.price.toFixed(2)}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <AddToCartButton id={book.id} />

              <FavoriteButton id={book.id} />

              <button className="rounded-xl border border-slate-700 px-8 py-4 transition hover:border-teal-400">
                📚 Add to Library
              </button>

            </div>

          </div>

        </div>

        {relatedBooks.length > 0 && (
          <section className="mt-24">

            <h2 className="mb-8 text-3xl font-bold">
              Related Books
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {relatedBooks.map((related) => (
                <Link
                  key={related.id}
                  href={`/book/${related.id}`}
                  className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-teal-400"
                >
                  <img
                    src={related.cover}
                    alt={related.title}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-4">

                    <h3 className="font-semibold">
                      {related.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {related.author}
                    </p>

                  </div>

                </Link>
              ))}

            </div>

          </section>
        )}

      </div>

    </main>
  );
}