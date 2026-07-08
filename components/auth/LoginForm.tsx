"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/profile");
    router.refresh();
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h1 className="mb-2 text-4xl font-black text-white">
        Welcome Back
      </h1>

      <p className="mb-8 text-slate-400">
        Sign in to continue using Novara.
      </p>

      <form
        onSubmit={handleLogin}
        className="space-y-6"
      >
        <div>

          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-teal-400"
            placeholder="your@email.com"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-teal-400"
            placeholder="••••••••"
          />

        </div>

        {error && (
          <div className="rounded-xl border border-red-500 bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <button
          disabled={loading}
          className="w-full rounded-xl bg-teal-500 py-4 text-lg font-bold text-black transition hover:bg-teal-400 disabled:opacity-50"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

      </form>

      <p className="mt-8 text-center text-slate-400">

        Don't have an account?{" "}

        <Link
          href="/register"
          className="font-semibold text-teal-400 hover:text-teal-300"
        >
          Create one
        </Link>

      </p>

    </div>
  );
}
