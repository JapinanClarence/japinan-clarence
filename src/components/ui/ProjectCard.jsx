import React from "react";

import { Github, Link, Menu } from "lucide-react";
import { Button } from "./button";
export const ProjectCard = ({ data, orientation }) => {
  return (
    <div
      className={`${orientation === "reverse" && "md:flex-row-reverse"} flex flex-col md:flex-row gap-5`}
    >
      <div
        className={`h-56 w-full md:min-w-[400px]  bg-slate-700 overflow-clip rounded-lg border dark:border-zinc-500`}
      >
        <img src={data.image} alt="" className="h-full w-full object-cover" />
      </div>
      <div>
        <h2 className="font-semibold mb-2">{data.title}</h2>
        <p className="text-xs xl:text-sm">{data.description}</p>
        <div>
          
        </div>
      </div>
    </div>
  );
};
