"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, FolderOpen, User, Mail } from "lucide-react"; // icons

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/about", label: "About", icon: User },
  // { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <nav
            className={[
              "relative overflow-hidden border transition-all duration-300 mx-auto",
              open ? "rounded-3xl" : "rounded-full",
              "bg-white/40 dark:bg-slate-900/60", // Darker background for better contrast
              "backdrop-blur-xl backdrop-saturate-150",
              "border-white/50 dark:border-white/10",
              "shadow-2xl ring-1 ring-black/5",
              "w-[90vw] md:w-auto", // Wider on mobile
              "max-w-md md:max-w-none"
            ].join(" ")}
          >
            {/* glossy top highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-full">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/50 via-white/20 to-transparent opacity-70 rounded-t-full" />
            </div>

            {/* Desktop menu */}
            <div className="px-3 py-1.5 flex items-center justify-center">
              <ul className="hidden md:flex items-center justify-center gap-1">
                {links.map(({ href, label, icon: Icon }) => {
                  const active = pathname === href;
                  return (
                    <li key={href} className="relative">
                      <Link
                        href={href}
                        className={[
                          "group relative flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-all",
                          "text-[#2b2323]/90 dark:text-neutral-200",
                          "hover:text-[#0a7783] dark:hover:text-cyan-300",
                          "hover:bg-white/55 dark:hover:bg-white/10",
                          active
                            ? [
                              "text-[#0a7783] dark:text-cyan-300",
                              "bg-white/65 dark:bg-white/[0.08]",
                              "border border-white/70 dark:border-white/10",
                              "shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
                            ].join(" ")
                            : "border border-transparent",
                        ].join(" ")}
                      >
                        <Icon size={14} strokeWidth={2} />
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile toggle */}
              <button
                className={[
                  "md:hidden ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full",
                  "bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/15",
                  "backdrop-blur-md hover:bg-white/70 dark:hover:bg-white/15 transition-colors",
                ].join(" ")}
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle navigation menu"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="text-[#1e1b1b] dark:text-neutral-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            {open && (
              <ul className="md:hidden px-2 pb-2 pt-1 text-center">
                {links.map(({ href, label, icon: Icon }) => {
                  const active = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={[
                          "flex items-center justify-center gap-1 w-full px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                          "text-[#2b2323] dark:text-neutral-200",
                          "hover:bg-white/60 dark:hover:bg-white/10 hover:text-[#0a7783] dark:hover:text-cyan-300",
                          active
                            ? "bg-white/70 dark:bg-white/[0.08] text-[#0a7783] dark:text-cyan-300 border border-white/70 dark:border-white/10"
                            : "border border-transparent",
                        ].join(" ")}
                      >
                        <Icon size={14} strokeWidth={2} />
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </nav>
        </div>
      </header>

      <div className="h-12 md:h-12" />
    </>
  );
}
