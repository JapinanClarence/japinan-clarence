import { TechStack } from "@/components/TechStack";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { useTheme } from "@/components/theme/theme-provider";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Home() {
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
    <div>
      <div className="relative py-10 md:py-0 md:pt-16">
        <div className="md:hidden absolute right-0 top-0 pt-5 pr-8">
          <button
            aria-label="Toggle Dark Mode"
            className="inline-flex items-center justify-center rounded-full h-10 w-10 border shadow-md transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            onClick={handleClickTheme}
          >
            {isDark ? (
              <SunIcon width={20} height={20} />
            ) : (
              <MoonIcon width={20} height={20} />
            )}
          </button>
        </div>

        <Container className="lg:px-12 xl:px-16 ">
          <Reveal>
            <Hero />
          </Reveal>
        </Container>
        <Container className="lg:px-12 xl:px-16 ">
          <Reveal delay={0.1}>
            <TechStack />
          </Reveal>
        </Container>
        <Container className="lg:px-12 xl:px-16 ">
          <Reveal delay={0.2}>
            <Projects />
          </Reveal>
        </Container>
        <Container className="lg:px-12 xl:px-16 ">
          <Reveal delay={0.2}>
            <Experience />
          </Reveal>
        </Container>
        <Container className="lg:px-12 xl:px-16 ">
          <Reveal delay={0.2}>
            <Contact />
          </Reveal>
        </Container>
      </div>

      {/* {isDark ? (
        <BackgroundBeams className="hidden md:flex" />
      ) : (
        <BackgroundBeamsLight className="hidden md:flex" />
      )} */}
    </div>
  );
}
