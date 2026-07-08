import Container from "../layout/Container";
import { categories } from "../../data/categories";

type Props = {
  category: string | null;
  setCategory: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function Categories({
  category,
  setCategory,
}: Props) {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <Container>

        <div className="mb-10">

          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-teal-400">
            Explore
          </p>

          <h2 className="text-4xl font-black">
            Browse Categories
          </h2>

          <p className="mt-3 max-w-2xl text-slate-400">
            Find books by your favorite genre and discover something new.
          </p>

        </div>

        <div className="flex flex-wrap gap-4">

          <button
            onClick={() => setCategory(null)}
            className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
              category === null
                ? "border-teal-400 bg-teal-500 text-white"
                : "border-slate-700 bg-slate-900 text-slate-300 hover:border-teal-400 hover:text-white"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                category === cat
                  ? "border-teal-400 bg-teal-500 text-white"
                  : "border-slate-700 bg-slate-900 text-slate-300 hover:border-teal-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

      </Container>
    </section>
  );
}