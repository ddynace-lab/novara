"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";

import Container from "@/components/layout/Container";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    loadUser();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 py-16 text-white">
      <Container>

        <h1 className="mb-10 text-5xl font-black">
          My Profile
        </h1>

        {user ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="mb-6 text-2xl font-bold">
              Account Information
            </h2>

            <div className="space-y-4 text-slate-300">
              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>User ID:</strong> {user.id}
              </p>
            </div>

            <button
              onClick={() => supabase.auth.signOut()}
              className="mt-10 rounded-xl bg-red-500 px-6 py-3 font-semibold hover:bg-red-400"
            >
              Sign Out
            </button>

          </div>
        ) : (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">

            <h2 className="mb-4 text-2xl font-bold">
              You're not logged in
            </h2>

            <Link
              href="/login"
              className="rounded-xl bg-teal-500 px-6 py-3 font-semibold hover:bg-teal-400"
            >
              Login
            </Link>

          </div>
        )}

      </Container>
    </main>
  );
}