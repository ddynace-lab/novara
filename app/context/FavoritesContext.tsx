"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type FavoritesContextType = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext =
  createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(
      "novara-favorites"
    );

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "novara-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  function toggleFavorite(id: string) {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((book) => book !== id)
        : [...prev, id]
    );
  }

  function isFavorite(id: string) {
    return favorites.includes(id);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites must be used inside FavoritesProvider"
    );
  }

  return context;
}