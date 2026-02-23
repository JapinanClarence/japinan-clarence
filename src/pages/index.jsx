import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/graduation-pic.jpg";
import data from "@/data/data.json";
import { TechStack } from "@/components/TechStack";
import { AboutSection } from "@/components/AboutSection";
import { Container } from "@/components/ui/container";
import { FileText } from "lucide-react";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { useTheme } from "@/components/theme-provider";

export default function Home() {
  const { theme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.document.documentElement.classList.contains("dark"));
  return (
    <>
      <div className="antialiased space-y-10 py-10">
        <Container
          className="pt-10 md:pt-0 md:h-screen flex flex-col md:flex-row md:justify-between gap-10 items-center"
          id="home"
        >
          <div className="">
            <h1 className="relative z-10 text-4xl md:text-5xl xl:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-start font-sans font-bold">
              JapinanClarence
            </h1>

            <div className="text-white md:text-xl">
              Full-stack web developer
            </div>
            <div className="mt-10 z-10 relative flex items-center  space-x-2">
              <Button
                size="sm"
                onClick={() =>
                  window.open("mailto:japinanclarence@email.com", "_blank")
                }
              >
                Get in Touch
              </Button>
              <Button
                variant={isDark ? "secondary" : "outline"}
                size="sm"
                className=""
              >
                <FileText />
                Resume
              </Button>
            </div>
          </div>
          <div className="aspect-square w-full md:w-[300px]  h-[300px] overflow-clip z-10 rounded-lg">
            <img src={heroImage} alt="" className=" object-cover" />
          </div>
        </Container>
        <Container>
          <AboutSection data={data} />
        </Container>
        <Container>
          <TechStack />
        </Container>
        <Container>
          <Projects />
        </Container>
        <Container>
          <Experience />
        </Container>
      </div>

      <BackgroundBeams className="hidden md:flex" />
    </>
  );
}
