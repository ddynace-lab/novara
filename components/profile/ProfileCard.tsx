"use client";

import { User } from "@supabase/supabase-js";

type Props = {
  user: User;
};

export default function ProfileCard({ user }: Props) {
  const fullName =
    user.user_metadata?.full_name ||
    "Novara Reader";

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex items-center gap-6">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-teal-500 text-4xl font-black text-black">
          {fullName.charAt(0).toUpperCase()}
        </div>

        <div>

          <h1 className="text-3xl font-black">
            {fullName}
          </h1>

          <p className="mt-2 text-slate-400">
            {user.email}
          </p>

          <span className="mt-4 inline-block rounded-full bg-teal-500/20 px-4 py-2 text-sm font-semibold text-teal-300">
            Free Member
          </span>

        </div>

      </div>

    </div>
  );
}