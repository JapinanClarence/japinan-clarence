import React, { useEffect, useState } from "react";
import { ProjectCard } from "./ui/project-card";
import { images } from "@/constants/images";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "PCSI",
    description:
      "A comprehensive web application for the Philippine Coleopterist Society Inc., featuring a modern React frontend with advanced UI components and a robust Node.js backend API.",
    image: [images.pcsi_preview1, images.pcsi_preview2, images.pcsi_preview3],
    websiteLink: "https://philippinecoleopterists.org/",
    tech: ["ReactJs", "ExpressJs", "MongoDb", "Tailwind CSS"],
  },
  {
    title: "Biophysical Ocean Bouy Development",
    description:
      "Contributed to the development of the biophysical ocean bouy, this device can measure the temperature and ph level of the water. It is also equipped with a GPS module to track the location of the bouy.",
    image: [images.bouy_preview1, images.bouy_preview2, images.bouy_preview3],
    isClickable: false,
    githubLink: "",
    tech: ["Arduino", "Tinkercad", "ESP32", "NEO-6M GPS", "SIM800L GSM"],
  },
  {
    title: "TransitMaster",
    description:
      "Vehicle scheduling and tracking system. The system utilizes NEO-6M GPS and SIM800L GSM modules for data transmission. Socket.io and Mapbox is also implemented for real-time data visualization.",
    image: [
      images.transitmaster_preview1,
      images.transitmaster_preview2,
      images.transitmaster_preview3,
    ],
    websiteLink: "https://app-transitmaster.vercel.app",
    tech: ["ExpressJs", "ReactJs", "MongoDb", "Mapbox", "Socket.IO", "ESP32"],
  },
  {
    title: "TimeTap",
    description:
      "TimeTap is a QR-based attendance management system designed to streamline event check-ins and participant tracking. The platform integrates geo-fence technology to validate user location during attendance, ensuring that check-ins occur only within the authorized event area.",
    image: [
      images.timetap_preview1,
      images.timetap_preview2,
      images.timetap_preview3,
    ],
    inProgress: true,
    githubLink: "https://github.com/JapinanClarence/TimeTap.git",
    tech: ["PHP", "Laravel", "ReactJs", "MySQL", "InertiaJS"],
  },
];

export function Projects() {
  return (
    <div className="" id="projects">
      <h1 className="text-start text-lg font-semibold mb-5 ">Projects</h1>
      <h2>Here are some of the projects I have worked on:</h2>
      <div className="mt-5 flex flex-col  gap-5">
        {projects.map((item, index) => (
          <ProjectCard
            data={item}
            orientation={index % 2 === 0 ? "reverse" : "normal"}
          />
        ))}
      </div>
    </div>
  );
}
