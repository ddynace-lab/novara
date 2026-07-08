import Link from "next/link";

const features = [
  "Unlimited access to all premium books",
  "Offline reading",
  "No advertisements",
  "Unlimited favorites",
  "Unlimited personal library",
  "Early access to new releases",
  "Priority customer support",
  "Exclusive author interviews",
];

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-semibold text-yellow-400">
            NOVARA PREMIUM
          </span>

          <h1 className="mt-6 text-5xl font-black">
            Unlock Your Full Reading Experience
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Upgrade to Premium and enjoy unlimited access to thousands of books,
            exclusive content, and the best reading experience Novara has to offer.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Free Plan */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Free</h2>

            <p className="mt-2 text-slate-400">
              Perfect for casual readers.
            </p>

            <p className="mt-8 text-5xl font-black">
              $0
            </p>

            <ul className="mt-10 space-y-4">
              <li>✅ Limited book collection</li>
              <li>✅ Basic favorites</li>
              <li>✅ Limited library</li>
              <li>❌ Offline reading</li>
              <li>❌ Premium books</li>
              <li>❌ Priority support</li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="rounded-3xl border-2 border-teal-500 bg-slate-900 p-8 shadow-xl shadow-teal-500/20">
            <div className="mb-4 inline-block rounded-full bg-teal-500 px-4 py-2 text-sm font-bold text-black">
              MOST POPULAR
            </div>

            <h2 className="text-3xl font-bold">
              Premium
            </h2>

            <p className="mt-2 text-slate-400">
              Everything Novara has to offer.
            </p>

            <p className="mt-8 text-5xl font-black text-teal-400">
              $9.99
              <span className="text-lg text-slate-400"> / month</span>
            </p>

            <ul className="mt-10 space-y-4">
              {features.map((feature) => (
                <li key={feature}>
                  ✅ {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/checkout"
              className="mt-10 block rounded-xl bg-teal-500 py-4 text-center text-lg font-bold text-black transition hover:bg-teal-400"
            >
              Upgrade Now
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}