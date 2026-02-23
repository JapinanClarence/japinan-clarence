import React from "react";
import {
  JavascriptIcon,
  ExpressIcon,
  TailwindIcon,
  BootstrapIcon,
  MysqlIcon,
  GithubIcon,
  MongodbIcon,
  PhpIcon,
  ReactIcon,
  LaravelIcon,
  NodejsIcon,
  SocketioIcon,
  ArduinoIcon,
  PostmanIcon,
  VercelIcon,
} from "@/components/icons";
import { TechStackCard } from "./ui/TechStackCard";

const techStack = [
  {
    icon: JavascriptIcon,
    title: "JavaScript",
  },
  {
    icon: NodejsIcon,
    title: "NodeJs",
  },
  {
    icon: ExpressIcon,
    title: "ExpreessJs",
  },
  {
    icon: ReactIcon,
    title: "ReactJS",
  },
  {
    icon: PhpIcon,
    title: "PHP",
  },
  {
    icon: LaravelIcon,
    title: "Laravel",
  },
  {
    icon: TailwindIcon,
    title: "Tailwind",
  },
  {
    icon: BootstrapIcon,
    title: "Bootstrap",
  },
  {
    icon: MysqlIcon,
    title: "MySQL",
  },
  {
    icon: MongodbIcon,
    title: "MongoDb",
  },
  {
    icon: SocketioIcon,
    title: "Socket.IO",
  },
  // {
  //   icon: PostmanIcon,
  //   title: "Postman",
  // },
  {
    icon: ArduinoIcon,
    title: "Arduino",
  },
  // {
  //   icon: GithubIcon,
  //   title: "Github",
  // },
];

export function TechStack() {
  return (
    <div className="dark:text-white  border-neutral-700">
      <h1 className="text-start text-lg font-semibold mb-5">Tech Stack</h1>
      <div className="grid gap-5  grid-cols-2 md:grid-cols-4">
        {techStack.map((tech, i) => (
          <TechStackCard key={i} {...tech} />
        ))}
      </div>
    </div>
  );
}
