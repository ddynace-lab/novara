import Link from "next/link";

const paymentMethods = [
  {
    name: "Credit / Debit Card",
    icon: "💳",
    description: "Visa, Mastercard, American Express",
  },
  {
    name: "PayPal",
    icon: "🅿️",
    description: "Fast and secure online payments",
  },
  {
    name: "Apple Pay",
    icon: "🍎",
    description: "Pay using Apple Pay",
  },
  {
    name: "Google Pay",
    icon: "🤖",
    description: "Quick checkout with Google Pay",
  },
  {
    name: "Flutterwave",
    icon: "🌍",
    description: "Perfect for African payments",
  },
];

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <span className="rounded-full bg-teal-500/20 px-4 py-2 text-sm font-semibold text-teal-300">
            SECURE CHECKOUT
          </span>

          <h1 className="mt-6 text-5xl font-black">
            Complete Your Purchase
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Choose your preferred payment method to continue your Novara
            Premium subscription or book purchase.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[2fr_1fr]">

          {/* Payment Methods */}
          <div className="space-y-5">

            {paymentMethods.map((method) => (
              <button
                key={method.name}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left transition hover:border-teal-400"
              >
                <div className="flex items-center gap-5">

                  <span className="text-4xl">
                    {method.icon}
                  </span>

                  <div>
                    <h2 className="text-xl font-bold">
                      {method.name}
                    </h2>

                    <p className="mt-1 text-slate-400">
                      {method.description}
                    </p>
                  </div>

                </div>

                <span className="text-teal-400">
                  →
                </span>
              </button>
            ))}

          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <h2 className="text-2xl font-bold">
              Order Summary
            </h2>

            <div className="mt-8 space-y-4">

              <div className="flex justify-between">
                <span>Novara Premium</span>
                <span>$9.99</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>$0.00</span>
              </div>

              <hr className="border-slate-700" />

              <div className="flex justify-between text-xl font-bold">

                <span>Total</span>

                <span className="text-teal-400">
                  $9.99
                </span>

              </div>

            </div>

            <button className="mt-10 w-full rounded-xl bg-teal-500 py-4 text-lg font-bold text-black transition hover:bg-teal-400">
              Complete Payment
            </button>

            <Link
              href="/premium"
              className="mt-4 block text-center text-sm text-slate-400 hover:text-teal-400"
            >
              ← Back to Premium
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}