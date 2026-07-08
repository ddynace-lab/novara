import Container from "../layout/Container";

const authors = [
  {
    name: "Sarah Johnson",
    specialty: "Fantasy",
    books: 18,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    name: "Michael Chen",
    specialty: "Science Fiction",
    books: 24,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
  },
  {
    name: "Emma Williams",
    specialty: "Romance",
    books: 15,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
  {
    name: "David Carter",
    specialty: "Mystery",
    books: 31,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
  },
];

export default function FeaturedAuthors() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-teal-400">
            Meet the Authors
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Featured Authors
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Discover talented writers from around the world.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {authors.map((author) => (
            <div
              key={author.name}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-2 hover:border-teal-400"
            >
              <img
                src={author.image}
                alt={author.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {author.name}
                </h3>

                <p className="mt-2 text-teal-400">
                  {author.specialty}
                </p>

                <p className="mt-4 text-sm text-slate-400">
                  {author.books} Published Books
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}