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

function App() {
  const words = ["responsive", "beautiful", "modern"];
  return (
    <div className="bg-neutral-950 h-screen">
      <header className="h-[50px] w-full fixed z-50 bg-black/30 backdrop-blur-md shadow-md">
        <div className="flex items-center gap-2">
          <Button
            variant="link"
            size="lg"
            className="hover:no-underline text-white hover:bg-white hover:text-black rounded-none"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            variant="link"
            size="lg"
            className="hover:no-underline text-white hover:bg-white hover:text-black rounded-none"
            onClick={() => navigate("/")}
          >
            About
          </Button>
          <Button
            variant="link"
            size="lg"
            className="hover:no-underline text-white hover:bg-white hover:text-black rounded-none"
            onClick={() => navigate("/")}
          >
            Projects
          </Button>
        </div>
      </header>
      <div className="pt-20">
        <TracingBeam>
          <div className="relative ">
            <div className="h-[40rem] flex justify-between items-center">
              <div>
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-start font-sans font-bold">
                  JapinanClarence
                </h1>

                <div className="text-white text-2xl">
                  I build<FlipWords words={words} className={"text-white text-2xl"}/>websites
                </div>

              </div>
              <div className="aspect-square h-[300px] overflow-clip">
                <img src={heroImage} alt="" className=" object-cover" />
              </div>
            </div>
            <div className="text-white">
              <h1 className="text-center text-4xl font-medium">Tech Stack</h1>
              <div className="mt-10 grid grid-flow-col">
                <img src={jsIcon} alt="" />
                <img src={phpIcon} alt="" />
                <img src={nodeJsIcon} alt="" />
                <img src={expressJsIcon} alt="" />
                <img src={reactjsIcon} alt="" />
                <img src={bootstrapIcon} alt="" />
                <img src={tailwindIcon} alt="" />
                <img src={mysqslIcon} alt="" />
              </div>
            </div>
          </div>
        </TracingBeam>
      </div>

      <BackgroundBeams />
    </div>
  );
}

export default App;
