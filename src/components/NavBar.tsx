"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sticky glass bar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,94%)]">
        <nav className="rounded-2xl border border-white/15 bg-white/70 dark:bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <div className="px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight text-[#2c2438] dark:text-neutral-100">
              Zaeem
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex gap-2">
              {links.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={[
                        "px-3 py-2 rounded-xl text-sm font-medium transition-colors relative",
                        "text-[#3b2f2f] hover:text-cyan-700 dark:text-neutral-200",
                        active ? "text-cyan-700" : "",
                      ].join(" ")}
                    >
                      {label}
                      {active && (
                        <span className="absolute left-3 right-3 -bottom-[2px] h-[2px] bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-black/10 dark:border-white/15"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle navigation menu"
            >
              <div className="i">≡</div>
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <ul className="md:hidden px-2 pb-3 pt-1">
              {links.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={[
                        "block w-full px-3 py-2 rounded-xl text-sm font-medium",
                        "text-[#3b2f2f] hover:bg-white/70 hover:text-cyan-700",
                        active ? "bg-white/80 text-cyan-700" : "",
                      ].join(" ")}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </nav>
      </header>

      {/* Spacer so content doesn't hide under the fixed bar */}
      <div className="h-24 md:h-24" />
    </>
  );
}
