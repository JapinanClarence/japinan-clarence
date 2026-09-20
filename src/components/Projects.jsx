import { ProjectCard } from "./ui/project-card";
import { SectionHeader } from "./ui/section-header";
import { images } from "@/constants/images";

export const projects = [
  // {
  //   title: "RGAN Website",
  //   description:
  //     "Developed the complete foundational content suite for the Region XI Gender and Development Advocates Network (RGAN XI), a Philippines-based non-profit advancing gender equality and inclusive development, and its affiliated academic publication, the Gender Research & Policy Journal (GRPJ).",
  //   image: [images.rgan_website, images.rgan_website2, images.rgan_website3],
  //   websiteLink: "https://rgan-website-web.vercel.app/",
  //   inProgress: true,
  //   tech: ["NextJs", "Supabase", "TypeScript", "Tailwind CSS"],
  // },
  // {
  //   title: "PCSI",
  //   description:
  //     "A comprehensive web application for the Philippine Coleopterist Society Inc., featuring a modern React frontend with advanced UI components and a robust Node.js backend API.",
  //   image: [images.pcsi_preview1, images.pcsi_preview2, images.pcsi_preview3],
  //   websiteLink: "https://philippinecoleopterists.org/",
  //   tech: ["ReactJs", "ExpressJs", "MongoDb", "Tailwind CSS"],
  // },
   {
    title: "TimeTap",
    description:
      "TimeTap is a QR-based attendance management system designed to streamline event check-ins and participant tracking. The platform integrates geo-fence technology to validate user location during attendance, ensuring that check-ins occur only within the authorized event area.",
    image: [
      images.timetap_preview1,
      images.timetap_preview2,
      images.timetap_preview3,
    ],
    inProgress: false,
    websiteLink: "https://timetap.japinanc.space",
    tech: ["PHP", "Laravel", "ReactJs", "MySQL", "InertiaJS"],
  },
  {
    title: "Biophysical Ocean Bouy Development",
    description:
      "Designed and developed the hardware device for the Biophysical Ocean Buoy (BoB), utilizing Arduino and ESP32 microcontrollers to capture live water quality metrics and provide continuous geospatial tracking.",
    image: [images.bouy_preview1, images.bouy_preview2, images.bouy_preview3],
    isClickable: false,
    githubLink: "https://github.com/JapinanClarence/Biophysical-Ocean-Buoy.git",
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
 
];

export function Projects() {
  return (
    <div className="scroll-mt-24 md:scroll-mt-28" id="projects">
      <SectionHeader
        backgroundText="Projects"
        title="Selected Work"
        subtitle="Here are some of the projects I have worked on."
      />
      <div className="mt-8 flex flex-col  gap-5">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            data={item}
            orientation={index % 2 === 0 ? "reverse" : "normal"}
          />
        ))}
      </div>
    </div>
  );
}
