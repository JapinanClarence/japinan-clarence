import React, { useEffect, useState } from "react";
import projects from "@/data/projects";
import { ProjectCard } from "./ui/ProjectCard";
export function Projects() {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    setProjectData(projects);
  }, [projects]);
  return (
    <div className="" id="projects">
      <h1 className="text-start text-lg font-semibold mb-5">Projects</h1>
      <h2>Here are some of the projects I have worked on:</h2>
      <div className="mt-5 flex flex-col  gap-5">
        {projectData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <ProjectCard
              key={index}
              data={item}
              orientation={isEven && "reverse"}
            />
          );
        })}
      </div>
    </div>
  );
}
