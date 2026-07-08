"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

type Props = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState("");

  function handleSearch() {
    onSearch(value.trim());
  }

  function clearSearch() {
    setValue("");
    onSearch("");
  }

  return (
    <div className="flex w-full items-center rounded-2xl border border-slate-700 bg-slate-900 p-2 shadow-lg transition-all duration-300 focus-within:border-teal-400">

      <Search className="ml-3 h-5 w-5 text-slate-500" />

      <input
        type="text"
        value={value}
        placeholder="Search books, authors, or genres..."
        onChange={(e) => {
          setValue(e.target.value);
          onSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500"
      />

      {value && (
        <button
          onClick={clearSearch}
          className="rounded-full p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          aria-label="Clear search"
        >
          <X className="h-5 w-5" />
        </button>
      )}

      <button
        onClick={handleSearch}
        className="ml-2 rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-400"
      >
        Search
      </button>

    </div>
  );
}