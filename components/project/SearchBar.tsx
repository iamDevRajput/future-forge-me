"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center w-full max-w-2xl gap-2 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-xs focus-within:border-blue-500 focus-within:shadow-md transition-all duration-300"
    >
      <div className="flex items-center flex-1 min-w-0 pl-3">
        <Search className="w-5 h-5 text-slate-400 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects by title, skill or keyword..."
          className="w-full px-3 py-2 text-sm text-slate-800 placeholder-slate-400 bg-transparent outline-hidden font-medium"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-95 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-sm cursor-pointer shrink-0"
      >
        Search
      </button>
    </form>
  );
}
