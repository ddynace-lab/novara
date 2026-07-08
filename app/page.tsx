
"use client";

import { useMemo, useState } from "react";

import Hero from "@/components/home/Hero";
import TrendingBooks from "@/components/home/TrendingBooks";
import Categories from "@/components/home/Categories";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import FeaturedAuthors from "@/components/home/FeaturedAuthors";
import Newsletter from "@/components/home/Newsletter";

import { books as initialBooks } from "@/data/books";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filteredBooks = useMemo(() => {
    return initialBooks.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === null || book.genre === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-slate-950">

      <Hero setSearch={setSearch} />

      <TrendingBooks />

      <Categories
        category={category}
        setCategory={setCategory}
      />

      <FeaturedBooks
        books={filteredBooks}
      />

      <FeaturedAuthors />

      <Newsletter />

    </main>
  );
}
