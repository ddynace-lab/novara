import Link from "next/link";
import Container from "../layout/Container";
import { books } from "../../data/books";

export default function TrendingBooks() {
  const trending = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>

        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-teal-400">
              Trending
            </p>

            <h2 className="mt-2 text-4xl font-black">
              Trending This Week
            </h2>

            <p className="mt-3 text-slate-400">
              The highest-rated books readers are loving right now.
            </p>
          </div>

          <Link
            href="/"
            className="font-semibold text-teal-400 transition hover:text-teal-300"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {trending.map((book) => (
            <Link
              key={book.id}
              href={`/book/${book.id}`}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-2 hover:border-teal-400"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-teal-400">
                  {book.genre}
                </p>

                <h3 className="mt-2 line-clamp-2 text-lg font-bold">
                  {book.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {book.author}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-teal-400">
                    ${book.price.toFixed(2)}
                  </span>

                  <span className="text-sm text-yellow-400">
                    ⭐ {book.rating}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
}