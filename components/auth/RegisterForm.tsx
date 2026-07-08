"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function RegisterForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess(
      "Account created successfully! Please check your email to verify your account."
    );

    setLoading(false);

    setTimeout(() => {
      router.push("/login");
    }, 2500);
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h1 className="mb-2 text-4xl font-black text-white">
        Create Account
      </h1>

      <p className="mb-8 text-slate-400">
        Join Novara and start building your digital library.
      </p>

      <form
        onSubmit={handleRegister}
        className="space-y-6"
      >

        <div>

          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-teal-400"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-teal-400"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Minimum 6 characters"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-teal-400"
          />

        </div>

        {error && (
          <div className="rounded-xl border border-red-500 bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-xl border border-green-500 bg-green-500/10 p-3 text-sm text-green-400">
            {success}
          </div>
        )}

        <button
          disabled={loading}
          className="w-full rounded-xl bg-teal-500 py-4 text-lg font-bold text-black transition hover:bg-teal-400 disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

      </form>

      <p className="mt-8 text-center text-slate-400">

        Already have an account?{" "}

        <Link
          href="/login"
          className="font-semibold text-teal-400 hover:text-teal-300"
        >
          Sign In
        </Link>

      </p>

    </div>
  );
}