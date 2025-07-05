import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "./components/ui/flip-words";
import { TracingBeam } from "./components/ui/tracing-beam";
import { Button } from "./components/ui/button";
import heroImage from "./assets/clarence.jpg";
import jsIcon from "./assets/javascript.png";
import phpIcon from "./assets/php.png";
import nodeJsIcon from "./assets/nodejs.png";
import expressJsIcon from "./assets/expressjs.png";
import tailwindIcon from "./assets/tailwind.png";
import bootstrapIcon from "./assets/bootstrap.png";
import mysqslIcon from "./assets/mysql.png";
import reactjsIcon from "./assets/reactjs.png";
import mongodbIcon from "./assets/mongodb.png";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import projects from "../src/data/projects.json";
import ProjectCard from "./components/projects/ProjectCard";

function App() {
  const navigate = useNavigate();
  const words = ["responsive", "beautiful", "modern"];

  return (
    <div className="bg-neutral-950">
      <header className=" h-[50px] w-full top-0 left-0 fixed z-50 bg-black/30 backdrop-blur-md shadow-md">
        <div className="hidden h-full md:flex items-center gap-2">
          <Button
            variant="link"
            size="lg"
            className="hover:no-underline h-full text-white font-bold text-xl  rounded-none"
            onClick={() => {
              document.getElementById("home").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            JapinanC
          </Button>
          <Button
            variant="link"
            size="lg"
            className="hover:no-underline h-full text-white hover:bg-white hover:text-black rounded-none"
            onClick={() => {
              document.getElementById("home").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Home
          </Button>
          <Button
            variant="link"
            size="lg"
            className="hover:no-underline text-white h-full hover:bg-white hover:text-black rounded-none"
            onClick={() => {
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </Button>
          <Button
            variant="link"
            size="lg"
            className="hover:no-underline h-full text-white hover:bg-white hover:text-black rounded-none"
            onClick={() => {
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </Button>
        </div>
        <Sheet>
          <SheetTrigger className="text-white h-full md:hidden" asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
            >
              <Menu size={40} />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[540px] bg-black/30 backdrop-blur-md text-white"
            aria-describedby={undefined}
          >
            <SheetHeader>
              <SheetTitle className="text-center text-xl text-white">
                JapinanC
              </SheetTitle>
              <div className="flex flex-col mt-20">
                <SheetClose asChild>
                  <Button
                    variant="link"
                    size="lg"
                    className="hover:no-underline text-white hover:bg-white hover:text-black rounded-none p-0"
                    onClick={() => {
                      document.getElementById("home").scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Home
                  </Button>
                </SheetClose>

                <SheetClose asChild>
                  <Button
                    variant="link"
                    size="lg"
                    className="hover:no-underline text-white hover:bg-white hover:text-black rounded-none p-0"
                    onClick={() => {
                      document.getElementById("about").scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    About
                  </Button>
                </SheetClose>

                <SheetClose asChild>
                  <Button
                    variant="link"
                    size="lg"
                    className="hover:no-underline text-white hover:bg-white hover:text-black rounded-none p-0"
                    onClick={() => {
                      document.getElementById("projects").scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Projects
                  </Button>
                </SheetClose>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>

      <div className="antialiased">
        <div
          className="h-screen flex flex-col lg:flex-row justify-center gap-10 items-center"
          id="home"
        >
          <div className="">
            <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-start font-sans font-bold">
              JapinanClarence
            </h1>

            <div className="text-white md:text-2xl">
              I build
              <FlipWords words={words} className={"text-white md:text-2xl"} />
              websites
            </div>
            <div className="mt-10 z-10 relative">
              <Button
                className="relative"
                variant="secondary"
                onClick={() =>
                  window.open("mailto:japinanclarence@email.com", "_blank")
                }
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="aspect-square h-[300px] overflow-clip z-10">
            <img src={heroImage} alt="" className=" object-cover" />
          </div>
        </div>
        <TracingBeam>
          <div className="relative antialiased space-y-40">
            <div className="text-white px-10 md:px-0 pt-14" id="about">
              <h1 className="text-center text-4xl mb-5">A Bit About Me</h1>
              <p className="text-pretty">
                Passionate backend web developer with hands-on experience in
                PHP, MySQL, and the MERN stack. Skilled in building scalable and
                efficient RESTful APIs, optimizing database structures,
                enhancing system performance, and developing secure,
                high-quality web applications. Always eager to learn and improve
                in fast-paced development environments.
              </p>
            </div>
            <div className="text-white px-10 md:px-0">
              <h1 className="text-center text-4xl font-medium">Tech Stack</h1>
              <div className="mt-10 grid gap-5 md:grid-flow-col grid-cols-4 md:grid-cols-9">
                <img src={jsIcon} alt="" />
                <img src={phpIcon} alt="" />
                <img src={nodeJsIcon} alt="" />
                <img src={expressJsIcon} alt="" />
                <img src={reactjsIcon} alt="" />
                <img src={bootstrapIcon} alt="" />
                <img src={tailwindIcon} alt="" />
                <img src={mysqslIcon} alt="" />
                <img src={mongodbIcon} alt="" />
              </div>
            </div>
            <div
              className="text-white md:h-screen px-10 md:px-0 pt-14 pb-14 md:pb-0"
              id="projects"
            >
              <h1 className="text-center text-4xl font-medium mb-5">
                Projects
              </h1>
              <h2>Here are some of the projects I have worked on:</h2>
              <div className="mt-10 grid md:grid-flow-row grid-rows-1 md:grid-cols-2  gap-5">
                {projects.map((item, index) => {
                  return <ProjectCard key={index} data={item} />;
                })}
              </div>
            </div>
          </div>
        </TracingBeam>
      </div>

      <BackgroundBeams className="hidden md:flex" />
    </div>
  );
}

export default App;
