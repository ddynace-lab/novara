import Container from "../layout/Container";
import BookCard from "../books/BookCard";
import type { Book } from "../../data/books";

type Props = {
  books: Book[];
};

export default function FeaturedBooks({
  books,
}: Props) {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <Container>

        <div className="mb-12 flex items-center justify-between">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-teal-400">
              Library
            </p>

            <h2 className="text-4xl font-black">
              Featured Books
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              Browse our hand-picked collection of popular books from different
              genres. Discover your next favorite read.
            </p>
          </div>

        </div>

        {books.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center">

            <h3 className="mb-3 text-2xl font-bold">
              No books found
            </h3>

            <p className="text-slate-400">
              Try searching with another title or choose a different category.
            </p>

          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}

          </div>
        )}

      </Container>
    </section>
  );
}
