"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

/**
 * What the page is showing. Light is the default for everyone — the OS
 * preference is deliberately ignored — so dark only ever comes from a pin
 * the visitor set here.
 */
function current(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTheme(current());
    setReady(true);
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
