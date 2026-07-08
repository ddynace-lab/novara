"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);

    await supabase.auth.signOut();

    router.push("/");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="w-full rounded-2xl border border-red-500 px-6 py-4 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white disabled:opacity-50"
    >
      {loading ? "Signing Out..." : "🚪 Sign Out"}
    </button>
  );
}