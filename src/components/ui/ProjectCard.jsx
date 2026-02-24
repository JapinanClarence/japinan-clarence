import React, { useEffect, useRef, useState } from "react";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
import { useTheme } from "../theme/theme-provider";

const ProjectCardImage = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only set interval if there are multiple images
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative aspect-video md:w-1/2 bg-slate-700 overflow-hidden rounded-lg border dark:border-zinc-500 ">
      {images?.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`${title} - image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Slide Indicators: Only visible if there are multiple images */}
      {images?.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentIndex 
                  ? "w-6 bg-white" 
                  : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export const ProjectCard = ({ data, orientation }) => {
  const { theme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.document.documentElement.classList.contains("dark"));
  
  return (
    <div
      className={`${orientation === "reverse" && "md:flex-row-reverse"} flex flex-col md:flex-row gap-5`}
    >
      {/* <div
        className={`aspect-video md:w-1/2 bg-slate-700 overflow-clip rounded-lg border dark:border-zinc-500`}
      >
        <img src={data.image} alt="" className="h-full w-full object-cover" />
      </div> */}
      <ProjectCardImage images={data.image} title={data.title} />
     
      <div
        className={
          "group md:hover:translate-x-2 transition-translate duration-300 ease-out md:w-1/2"
        }
      >
        <h2 className="text-md font-semibold mb-2">
          {data.title}
          {data.inProgress && (
            <Badge className={"ml-1 shadow-sm"} variant={"outline"}>
              In Progress
            </Badge>
          )}
        </h2>
        <p className="text-sm">{data.description}</p>
        <div className="mt-2 flex gap-2 flex-wrap">
          {data?.tech?.map((t, index) => (
            <Badge
              className={"shadow-sm"}
              key={index}
              variant={isDark ? "default" : "outline"}
            >
              {t}
            </Badge>
          ))}
        </div>
        <div className="mt-2 overflow-hidden">
          <button className="opacity-0 group-hover:opacity-100 transition-all ease-in inline-flex text-sm font-medium items-center gap-1 px-2.5 py-0.5 bg-gradient-to-r hover:bg-gradient-to-br from-neutral-200/10 to-neutral-600/10 backdrop-blur-md border rounded-full">
            {data.websiteLink ? (
              <>
                <ExternalLink className="size-3.5" /> view demo
              </>
            ) : (
              <>
                <Github className="size-3.5" /> view source
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
