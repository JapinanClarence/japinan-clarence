import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { images } from "@/constants/images";
import { TechStack } from "@/components/TechStack";
import { AboutSection } from "@/components/AboutSection";
import { Container } from "@/components/ui/container";
import { FileText } from "lucide-react";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { useTheme } from "@/components/theme/theme-provider";
import { BackgroundBeamsLight } from "@/components/ui/background-beams-light";

export default function Home() {
  const { theme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.document.documentElement.classList.contains("dark"));
  return (
    <div>
      <div className="relative space-y-10 py-10 md:py-0" id="home">
        <Container className="mt-10 md:mt-0 md:h-screen flex flex-col md:flex-row justify-center md:justify-between gap-10 items-start md:items-center">
          <div className="">
            <h1 className="relative z-10 text-4xl  xl:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-start font-sans font-bold">
              JapinanClarence
            </h1>

            <div className=" md:text-xl">Full-stack web developer</div>
            <div className="mt-10 z-10 relative flex items-center  space-x-2">
              <Button
                size="sm"
                onClick={() =>
                  window.open("mailto:japinanclarence@email.com", "_blank")
                }
              >
                Get in Touch
              </Button>
              <a href="/JapinanResume.pdf">
                <Button variant={isDark ? "secondary" : "outline"} size="sm">
                  <FileText />
                  Resume
                </Button>
              </a>
            </div>
          </div>
          <div className="aspect-square w-full md:w-[300px]  h-[300px] overflow-clip z-10 shadow-sm rounded-lg">
            <img src={images.hero_image} alt="" className=" object-cover" />
          </div>
        </Container>
        <Container>
          <AboutSection />
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

      {isDark ? (
        <BackgroundBeams className="hidden md:flex" />
      ) : (
        <BackgroundBeamsLight className="hidden md:flex" />
      )}
    </div>
  );
}
