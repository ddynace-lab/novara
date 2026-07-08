"use client";

import { useState } from "react";
import Container from "../layout/Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  }

  return (
    <section className="bg-slate-900 py-24">
      <Container>

        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-950 p-10 shadow-2xl">

          <p className="text-center text-sm font-bold uppercase tracking-[0.35em] text-teal-400">
            Stay Updated
          </p>

          <h2 className="mt-4 text-center text-4xl font-black text-white">
            Join the Novara Community
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-center leading-8 text-slate-400">
            Get new releases, exclusive offers, reading recommendations,
            and Novara news delivered to your inbox.
          </p>

          {subscribed ? (
            <div className="mt-10 rounded-xl bg-teal-500/20 p-5 text-center text-teal-300">
              🎉 Welcome to Novara! You're subscribed.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-4 md:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-teal-400"
              />

              <button
                type="submit"
                className="rounded-xl bg-teal-500 px-8 py-4 font-bold text-black transition hover:bg-teal-400"
              >
                Subscribe
              </button>
            </form>
          )}

        </div>

      </Container>
    </section>
  );
}