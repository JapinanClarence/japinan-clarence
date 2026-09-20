import {
  JavascriptIcon,
  ExpressIcon,
  TailwindIcon,
  BootstrapIcon,
  MysqlIcon,
  MongodbIcon,
  PhpIcon,
  ReactIcon,
  LaravelIcon,
  NodejsIcon,
  SocketioIcon,
  ArduinoIcon,
} from "@/components/icons";
import { TechStackCard } from "./ui/techstack-card";
import { SectionHeader } from "./ui/section-header";

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
    <div className="scroll-mt-24 md:scroll-mt-28" id="tech-stack">
      <SectionHeader
        backgroundText="Tech Stack"
        title="Tech Stack"
        subtitle="Here are some of the technologies I have worked with."
      />
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:gap-4">
        {techStack.map((tech, i) => (
          <TechStackCard key={i} {...tech} />
        ))}
      </div>
    </div>
  );
}
