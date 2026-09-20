import React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "./theme/theme-provider";
import { projects } from "./Projects";
import { experience } from "./Experience";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const navLinks = [
  { label: "Work", id: "projects", count: projects.length },
  { label: "Experience", id: "experience", count: experience.length },
  { label: "Contact", id: "contact" },
];

export const NavMain = () => {
  const { theme, setTheme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.document.documentElement.classList.contains("dark"));
  const handleClickTheme = () => {
    if (isDark) {
      return setTheme("light");
    }

    return setTheme("dark");
  };

  return (
    <header className="hidden md:flex h-[64px] w-full top-0 left-0 fixed z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md dark:shadow-md border-b border-border/50">
      <Container className="lg:px-12 xl:px-16 h-full flex justify-between items-center gap-2">
        <Button
          variant="ghost"
          size="lg"
          className="hover:no-underline hover:bg-transparent h-full font-bold text-xl px-0 rounded-none"
          onClick={() => scrollTo("home")}
        >
          JapinanC
        </Button>

        <nav className="flex items-center gap-1">
          {navLinks.map(({ label, id, count }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {label}
              {count != null && (
                <span className="text-xs text-muted-foreground">
                  [{count}]
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle Dark Mode"
            className="inline-flex items-center justify-center rounded-full h-9 w-9 border border-border transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            onClick={handleClickTheme}
          >
            {isDark ? (
              <SunIcon width={18} height={18} />
            ) : (
              <MoonIcon width={18} height={18} />
            )}
          </button>
          <Button
            size="sm"
            className="rounded-full px-4"
            onClick={() =>
              window.open("mailto:japinanclarence@email.com", "_blank")
            }
          >
            Let&apos;s Talk
            <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </Container>
    </header>
  );
};
