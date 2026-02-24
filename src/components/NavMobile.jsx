import React, { useState, useEffect } from "react";
import { useTheme } from "./theme/theme-provider";
import { Button } from "./ui/button";
import { Home, Menu, Moon, Sun } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { HomeIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

export const NavMobile = () => {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // 1. Handle Scroll Visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show nav if user scrolls down more than 50px, otherwise hide
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div
      className={cn(
        "md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out w-fit",
        // Toggles visibility based on scroll state
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none",
      )}
    >
      <div className="rounded-lg bg-gradient-to-r from-neutral-200/30 to-neutral-600/30 backdrop-blur-sm border border-zinc-300/40  dark:border-zinc-500">
        <button
          className="inline-flex items-center justify-center rounded-full h-10 w-10 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          onClick={() => {
            document.getElementById("home").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <HomeIcon height={25} width={25} className=" text-primary" />
        </button>
        <button className="inline-flex items-center justify-center rounded-full h-10 w-10 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <a href="https://github.com/JapinanClarence">
            <GithubIcon width={25} height={25} />
          </a>
        </button>
        <button className="inline-flex items-center justify-center rounded-full h-10 w-10 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <a href="www.linkedin.com/in/clarence-japinan-587197266">
            <LinkedinIcon width={25} height={25} />
          </a>
        </button>
        <button
          className="inline-flex items-center justify-center rounded-full h-10 w-10 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          onClick={handleClickTheme}
        >
          {isDark ? (
            <MoonIcon width={25} height={25} />
          ) : (
            <SunIcon width={25} height={25} />
          )}
        </button>
      </div>
    </div>
  );
};
