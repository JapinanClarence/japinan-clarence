import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "./components/ui/flip-words";
import { TracingBeam } from "./components/ui/tracing-beam";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import aceTrack from "./assets/ace-track.png";
import transitMaster from "./assets/transitmaster.png";
import ltowebsite from "./assets/Lto-web.png";
import { Github, Link, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mangoDisease from "./assets/mango-desease.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

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
            <Button variant="ghost" size="icon" className="hover:bg-transparent" >
              <Menu size={40}/>
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
                I am a 4th-year Bachelor of Science in Information Technology
                student with a strong passion for backend web development. I
                have experience working with PHP, MySQL, and the MERN stack and
                am proficient in building scalable and efficient RESTful APIs.
                Constantly eager to learn and improve, I enjoy optimizing
                database structures, enhancing system performance, and
                developing secure, high-quality web applications.
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
            <div className="text-white md:h-screen px-10 md:px-0 pt-14 pb-14 md:pb-0" id="projects">
              <h1 className="text-center text-4xl font-medium mb-5">
                Projects
              </h1>
              <h2>Here are some of the projects I have worked on:</h2>
              <div className="mt-10 grid md:grid-flow-row grid-rows-1 md:grid-cols-2  gap-5">
              <Card className="h-full overflow-hidden  bg-neutral-950 border-neutral-700">
                  <CardHeader className="p-0 ">
                    <div className={`h-56 bg-slate-700 overflow-clip`}>
                      <img
                        src={ltowebsite}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-5">
                    <CardTitle className="text-md  text-white flex items-center">
                      {"LTO-Mati Website"}
                      <Button
                        className="p-0 ml-2 size-2"
                        variant="icon"
                        onClick={() =>
                          window.open(
                            "https://lto-website.vercel.app",
                            "_blank"
                          )
                        }
                      >
                        <Link size={5} />
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      {
                        "Driver and vehicle registration monitoring system."
                      }
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="h-full overflow-clip bg-neutral-950 border-neutral-700">
                  <CardHeader className="p-0">
                    <div className={`h-56 bg-gray-700`}>
                      <img
                        src={transitMaster}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-5">
                    <CardTitle className="text-md text-white">
                      {"TransitMaster"}
                      <Button
                        className="p-0 ml-2 size-2"
                        variant="icon"
                        onClick={() =>
                          window.open(
                            "https://app-transitmaster.vercel.app/",
                            "_blank"
                          )
                        }
                      >
                        <Link size={5} />
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      {"School vehicle scheduling and tracking system"}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="h-full overflow-hidden  bg-neutral-950 border-neutral-700">
                  <CardHeader className="p-0 ">
                    <div className={`h-56 bg-slate-700 overflow-clip`}>
                      <img
                        src={aceTrack}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-5">
                    <CardTitle className="text-md text-white flex items-center">
                      {"AceTrack"}
                      <Button
                        className="p-0 ml-2 size-2"
                        variant="icon"
                        onClick={() =>
                          window.open(
                            "https://acetrack.vercel.app/home",
                            "_blank"
                          )
                        }
                      >
                        <Link size={5} />
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      {
                        "Efficient scanning and clear identification for seamless attendance management."
                      }
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="h-full overflow-hidden  bg-neutral-950 border-neutral-700">
                  <CardHeader className="p-0 ">
                    <div className={`h-56 bg-slate-700 overflow-clip`}>
                      <img
                        src={mangoDisease}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-5">
                    <CardTitle className="text-md  text-white flex items-center">
                      {"MangoDisease Classification Syst"}
                      <Button
                        className="p-0 ml-2 size-2"
                        variant="icon"
                        onClick={() =>
                          window.open(
                            "https://github.com/JapinanClarence/Mango-Desease-Classification-Web-App.git",
                            "_blank"
                          )
                        }
                      >
                        <Github size={5} />
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      {
                        "A mango disease classification system, made with tensorflow."
                      }
                    </CardDescription>
                  </CardContent>
                </Card>
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
