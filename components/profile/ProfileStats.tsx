type Props = {
  favoriteBooks?: number;
  libraryBooks?: number;
  booksPurchased?: number;
  booksRead?: number;
};

export default function ProfileStats({
  favoriteBooks = 0,
  libraryBooks = 0,
  booksPurchased = 0,
  booksRead = 0,
}: Props) {
  const stats = [
    {
      title: "Favorites",
      value: favoriteBooks,
      icon: "❤️",
    },
    {
      title: "Library",
      value: libraryBooks,
      icon: "📚",
    },
    {
      title: "Purchased",
      value: booksPurchased,
      icon: "🛒",
    },
    {
      title: "Books Read",
      value: booksRead,
      icon: "📖",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-teal-400"
        >
          <div className="text-4xl">
            {stat.icon}
          </div>

          <h2 className="mt-4 text-4xl font-black text-teal-400">
            {stat.value}
          </h2>

          <p className="mt-2 text-slate-400">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
}