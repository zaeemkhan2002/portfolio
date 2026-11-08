"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

/** What the page is actually showing right now. */
function current(): Theme {
  const pinned = document.documentElement.dataset.theme;
  if (pinned === "light" || pinned === "dark") return pinned;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  // Rendered as light on the server; corrected on mount, so the button never
  // disagrees with the paint the inline script in layout.tsx already made.
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTheme(current());
    setReady(true);

    // While nothing is pinned the page follows the OS, so the button has to
    // follow it too — otherwise its label describes the wrong direction.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      if (!document.documentElement.dataset.theme) setTheme(current());
    };
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  function toggle() {
    const next: Theme = current() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // private mode or blocked storage — the choice just won't persist
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="flex items-center justify-center rounded-full border border-line bg-raise p-2 text-muted transition-colors hover:border-accent/40 hover:text-accent-ink"
    >
      <span suppressHydrationWarning>
        {ready && theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
      </span>
    </button>
  );
}
