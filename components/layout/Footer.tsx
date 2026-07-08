import Link from "next/link";

const footerLinks = {
  Explore: [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "New Releases", href: "/new-releases" },
    { name: "Best Sellers", href: "/best-sellers" },
  ],
  Account: [
    { name: "My Library", href: "/library" },
    { name: "Favorites", href: "/favorites" },
    { name: "Shopping Cart", href: "/cart" },
    { name: "Profile", href: "/profile" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-black text-teal-400">
            Novara
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Read. Discover. Learn.
            <br />
            Your modern digital bookstore and reading companion.
          </p>
        </div>

        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h3 className="mb-4 text-lg font-bold text-white">
              {section}
            </h3>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-teal-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Novara. All rights reserved.
      </div>
    </footer>
  );
}