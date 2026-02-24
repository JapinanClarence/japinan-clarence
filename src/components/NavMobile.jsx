import React, { useState, useEffect } from "react";
import { useTheme } from "./theme/theme-provider";
import { GithubIcon, LinkedinIcon } from "./icons";
import {
  EnvelopeIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

export const NavMobile = () => {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // 1. Handle Scroll Visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      // Check if user is at the very top (50px threshold)
      const isAtTop = scrollTop < 50;

      // Check if user has reached the bottom
      //* use small buffer to ensure it triggers reliably
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 10;

      if (isAtTop || isAtBottom) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
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
        "md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out w-full flex gap-2 px-8",
        // Toggles visibility based on scroll state
        isVisible
          ? "opacity-100 -translate-y-4 pointer-events-auto"
          : "opacity-0 translate-y-0 pointer-events-none",
      )}
    >
      <div className="rounded-full w-full  flex justify-between p-4 bg-gradient-to-r from-neutral-200/30 to-neutral-600/30 backdrop-blur-sm border border-zinc-300/40  dark:border-zinc-500">
        <button
          className="inline-flex items-center justify-center h-10 w-10 transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          onClick={() => {
            document.getElementById("home").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <HomeIcon height={25} width={25} className=" text-primary" />
        </button>

        <button className="inline-flex items-center justify-center h-10 w-10 transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <a href="https://github.com/JapinanClarence">
            <GithubIcon width={25} height={25} />
          </a>
        </button>
        <button className="inline-flex items-center justify-center h-10 w-10 transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <a href="www.linkedin.com/in/clarence-japinan">
            <LinkedinIcon width={25} height={25} />
          </a>
        </button>
        <button
          className="inline-flex items-center justify-center h-10 w-10 transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          onClick={() =>
            window.open("mailto:japinanclarence@email.com", "_blank")
          }
        >
          <EnvelopeIcon width={25} height={25} />
        </button>
      </div>
    </div>
  );
};
