"use client";

import { useFavorites } from "@/app/context/FavoritesContext";

type Props = {
  id: string;
};

export default function FavoriteButton({
  id,
}: Props) {
  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const active = isFavorite(id);

  return (
    <button
      onClick={() => toggleFavorite(id)}
      className={`rounded-xl px-8 py-4 font-semibold transition ${
        active
          ? "bg-red-500 text-white"
          : "border border-slate-700 hover:border-red-400"
      }`}
    >
      {active
        ? "❤️ Favorited"
        : "🤍 Add to Favorites"}
    </button>
  );
}