import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export const NavMain = () => {
  const {theme, setTheme} = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.document.documentElement.classList.contains("dark"));
  const handleClickTheme = () =>{
    if(isDark){
      return setTheme("light");
    }

    return setTheme("dark");
  }

  return (
    <header className=" h-[50px] w-full top-0 left-0 fixed z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md dark:shadow-md">
      <Container className="hidden h-full md:flex justify-between items-center gap-2">
        <div>
          <Button
            variant="link"
            size="lg"
            className="hover:no-underline h-full dark:text-white font-bold text-xl px-0  rounded-none"
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
            className="hover:no-underline h-full dark:text-white hover:bg-white hover:text-black rounded-none"
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
            className="hover:no-underline dark:text-white h-full hover:bg-white hover:text-black rounded-none"
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
            className="hover:no-underline h-full dark:text-white hover:bg-white hover:text-black rounded-none"
            onClick={() => {
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </Button>
        </div>
        <Button variant={"ghost"} className={"bg-transparent rounded-full w-9 h-9"} onClick={handleClickTheme}>
         {isDark? (<Moon/>) : (<Sun/>)}
        </Button>
      </Container>

      <Sheet>
        <SheetTrigger className="dark:text-white h-full md:hidden" asChild>
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <Menu size={40} />
          </Button>
        </SheetTrigger>
        <SheetContent
          className="w-[400px] sm:w-[540px] bg-black/30 backdrop-blur-md dark:text-white"
          aria-describedby={undefined}
        >
          <SheetHeader>
            <SheetTitle className="text-center text-xl dark:text-white">
              JapinanC
            </SheetTitle>
            <div className="flex flex-col mt-20">
              <SheetClose asChild>
                <Button
                  variant="link"
                  size="lg"
                  className="hover:no-underline dark:text-white hover:bg-white hover:text-black rounded-none p-0"
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
                  className="hover:no-underline dark:text-white hover:bg-white hover:text-black rounded-none p-0"
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
                  className="hover:no-underline dark:text-white hover:bg-white hover:text-black rounded-none p-0"
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
  );
};
