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
import { Github, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mangoDisease from "./assets/mango-desease.png"
function App() {
  const navigate = useNavigate();
  const words = ["responsive", "beautiful", "modern"];
  return (
    <div className="bg-neutral-950">
      <header className="h-[50px] w-full fixed z-50 bg-black/30 backdrop-blur-md shadow-md">
        <div className="flex items-center gap-2">
          <Button
            variant="link"
            size="lg"
            className="hover:no-underline text-white hover:bg-white hover:text-black rounded-none"
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
            className="hover:no-underline text-white hover:bg-white hover:text-black rounded-none"
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
            className="hover:no-underline text-white hover:bg-white hover:text-black rounded-none"
            onClick={() => {
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </Button>
        </div>
      </header>
      <div className="pt-14">
        <TracingBeam>
          <div className="relative">
            <div className="md:h-[60rem] flex flex-col md:flex-row justify-between items-center" id="home">
              <div>
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-start font-sans font-bold">
                  JapinanClarence
                </h1>

                <div className="text-white text-2xl">
                  I build
                  <FlipWords words={words} className={"text-white text-2xl"} />
                  website
                </div>
              </div>
              <div className="aspect-square  max-h-[300px] overflow-clip z-10">
                <img src={heroImage} alt="" className=" object-cover" />
              </div>
            </div>
            <div className="space-y-10">
              <div className="text-white px-10 md:px-0 py-20" id="about">
                <h1 className="text-center text-4xl mb-5">A Bit About Me</h1>
                <p className="text-pretty">
                  I am a 4th-year Bachelor of Science in Information Technology
                  student with a strong passion for backend web development. I
                  have experience working with PHP, MySQL, and the MERN stack
                  and am proficient in building scalable and efficient RESTful
                  APIs. Constantly eager to learn and improve, I enjoy
                  optimizing database structures, enhancing system performance,
                  and developing secure, high-quality web applications.
                </p>
              </div>
              <div className="text-white px-10 md:px-0 py-10">
                <h1 className="text-center text-4xl font-medium">Tech Stack</h1>
                <div className="mt-10 grid md:grid-flow-col grid-cols-4 md:grid-cols-9">
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
              <div className="text-white px-10 md:px-0 py-20" id="projects">
                <h1 className="text-center text-4xl font-medium mb-5">
                  Projects
                </h1>
                <h2>Here are some of the projects I have worked on:</h2>
                <div className="mt-10 grid md:grid-flow-row grid-cols-2  gap-5">
                  <Card className="h-full overflow-hidden">
                    <CardHeader className="p-0">
                      <div className={`h-56 bg-slate-200`}>
                        <img
                          src={transitMaster}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-5">
                      <CardTitle className="text-md">
                        {"Transitmaster"}
                        <Button
                          className="p-0 ml-2 size-2"
                          variant="icon"
                          onClick={() =>
                            window.open("https://app-transitmaster.vercel.app/", "_blank")
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

                  <Card className="h-full overflow-hidden">
                    <CardHeader className="p-0 ">
                      <div className={`h-56 bg-slate-200 overflow-clip`}>
                        <img
                          src={aceTrack}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-5">
                      <CardTitle className="text-md flex items-center">
                        {"AceTrack"}
                        <Button
                          className="p-0 ml-2 size-2"
                          variant="icon"
                          onClick={() =>
                            window.open("https://acetrack.vercel.app/home","_blank")
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
                  <Card className="h-full overflow-hidden">
                    <CardHeader className="p-0 ">
                      <div className={`h-56 bg-slate-200 overflow-clip`}>
                        <img
                          src={mangoDisease}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-5">
                      <CardTitle className="text-md flex items-center">
                        {"MangoDisease Classification Syst"}
                        <Button
                          className="p-0 ml-2 size-2"
                          variant="icon"
                          onClick={() =>
                            window.open("https://github.com/JapinanClarence/Mango-Desease-Classification-Web-App.git", "_blank")
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
          </div>
        </TracingBeam>
      </div>

      <BackgroundBeams className="hidden md:flex" />
    </div>
  );
}

export default App;
