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
    <div className=" border-neutral-700">
        <SectionHeader
             backgroundText="Portfolio"
             title="Tech Stack"
             subtitle="Here are some of the technologies I have worked with."
           />
      <div className="grid gap-5  grid-cols-2 md:grid-cols-4">
        {techStack.map((tech, i) => (
          <TechStackCard key={i} {...tech} />
        ))}
      </div>
    </div>
  );
}
