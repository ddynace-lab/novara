import Container from "../layout/Container";
import SearchBar from "../ui/SearchBar";

type Props = {
  setSearch: (value: string) => void;
};

export default function Hero({ setSearch }: Props) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <Container>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-teal-400">
            Welcome to Novara
          </p>

          <h1 className="mb-8 text-5xl font-black leading-tight md:text-7xl">

            Discover Your

            <span className="block bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Next Favorite Book
            </span>

          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-400">
            Explore thousands of books, discover new authors,
            save your favorites, build your personal library,
            and enjoy a premium reading experience.
          </p>

          <div className="mx-auto mb-16 max-w-2xl">
            <SearchBar onSearch={setSearch} />
          </div>

          <div className="flex flex-wrap justify-center gap-5">

            <button className="rounded-xl bg-teal-500 px-8 py-4 font-semibold transition hover:bg-teal-400">
              Explore Library
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-teal-400 hover:text-teal-400">
              Become Premium
            </button>

          </div>

          {/* Statistics */}

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">

            <div>
              <h2 className="text-4xl font-black text-teal-400">
                50K+
              </h2>

              <p className="mt-2 text-slate-400">
                Books
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-teal-400">
                10K+
              </h2>

              <p className="mt-2 text-slate-400">
                Authors
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-teal-400">
                1M+
              </h2>

              <p className="mt-2 text-slate-400">
                Readers
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-teal-400">
                99%
              </h2>

              <p className="mt-2 text-slate-400">
                Satisfaction
              </p>
            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}