"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, FolderOpen, User, FileDown } from "lucide-react";
import { CONTACT } from "@/data/profile";
import ThemeToggle from "@/components/ThemeToggle";

// Research and projects live on one page: the research is the work.
const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Work", icon: FolderOpen },
  { href: "/about", label: "About", icon: User },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={[
            "pointer-events-auto relative flex items-center gap-1 rounded-full p-1.5",
            "border border-line bg-[var(--nav-bg)]",
            "backdrop-blur-xl backdrop-saturate-150",
            "transition-shadow duration-500",
            scrolled
              ? "shadow-[var(--panel-shadow)]"
              : "shadow-none",
          ].join(" ")}
        >
          <ul className="flex items-center gap-0.5">
            {links.map(({ href, label, icon: Icon }) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href} className="relative">
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "relative z-10 flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium",
                      "transition-colors duration-200",
                      active
                        ? "text-accent-ink"
                        : "text-muted hover:text-ink",
                    ].join(" ")}
                  >
                    <Icon size={15} strokeWidth={2} />
                    <span className="hidden sm:inline">{label}</span>
                  </Link>

                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full border border-accent/30 bg-accent/12"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <span className="mx-1 h-5 w-px bg-line" />

          <a
            href={CONTACT.resume}
            target="_blank"
            rel="noreferrer"
            aria-label="Download CV"
            className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-2 text-sm font-medium text-accent-ink transition-colors hover:bg-accent/20"
          >
            <FileDown size={15} strokeWidth={2} />
            <span className="hidden sm:inline">CV</span>
          </a>

          <ThemeToggle />
        </motion.nav>
      </header>

      {/* spacer so fixed nav never overlaps page content */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
}
