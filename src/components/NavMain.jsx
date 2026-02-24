import React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HomeIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "./theme/theme-provider";
import { GithubIcon, LinkedinIcon } from "./icons";

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
    <header className="hidden md:flex h-[50px] w-full top-0 left-0 fixed z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md dark:shadow-md">
      <Container className="h-full flex justify-between items-center gap-2">
        <div className="h-full flex items-center">
          <Button
            variant="ghost"
            size="lg"
            className="hover:no-underline hover:bg-transparent h-full font-bold text-xl px-0  rounded-none "
            onClick={() => {
              document.getElementById("home").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            JapinanC
          </Button>
          {/* <Button
            variant="ghost"
            size="lg"
            className="hover:no-underline h-full rounded-none"
            onClick={() => {
              document.getElementById("home").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="hover:no-underline h-full rounded-none"
            onClick={() => {
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="hover:no-underline h-full rounded-none"
            onClick={() => {
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </Button> */}
        </div>
        <div>
          <button className="inline-flex items-center justify-center rounded-lg h-10 w-10 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            <a href="https://github.com/JapinanClarence">
              <GithubIcon width={20} height={20} />
            </a>
          </button>
          <button className="inline-flex items-center justify-center rounded-lg h-10 w-10 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            <a href="https://linkedin.com/in/clarence-japinan">
              <LinkedinIcon width={20} height={20} />
            </a>
          </button>
          <button
            className="inline-flex items-center justify-center rounded-lg h-10 w-10 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            onClick={handleClickTheme}
          >
            {isDark ? (
              <SunIcon width={20} height={20} />
            ) : (
              <MoonIcon width={20} height={20} />
            )}
          </button>
        </div>
      </Container>
    </header>
  );
};
