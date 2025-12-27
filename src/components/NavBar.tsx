"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderOpen, User, Mail } from "lucide-react"; // icons

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/about", label: "About", icon: User },
  // { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <nav
            className={[
              "relative overflow-hidden rounded-full border",
              "bg-white/40 dark:bg-slate-900/60",
              "backdrop-blur-xl backdrop-saturate-150",
              "border-white/50 dark:border-white/10",
              "shadow-lg shadow-black/5 ring-1 ring-black/5",
            ].join(" ")}
          >
            {/* glossy top highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-full">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/50 via-white/20 to-transparent opacity-70 rounded-t-full" />
            </div>

            {/* Menu */}
            <div className="px-2 py-1.5 flex items-center justify-center">
              <ul className="flex items-center justify-center gap-1">
                {links.map(({ href, label, icon: Icon }) => {
                  const active = pathname === href;
                  return (
                    <li key={href} className="relative">
                      <Link
                        href={href}
                        className={[
                          "group relative flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all",
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
                        <Icon size={15} strokeWidth={2} />
                        <span className="hidden sm:inline">{label}</span>
                        <span className="sm:hidden">{label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div className="h-12 md:h-12" />
    </>
  );
}
