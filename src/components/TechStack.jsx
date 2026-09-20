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
    <div className="scroll-mt-24 md:scroll-mt-28 mt-20" id="tech-stack">
      <SectionHeader
        backgroundText="Tech Stack"
        title="Tech Stack"
        subtitle="Here are some of the technologies I have worked with."
      />
      <div
        className={
          "mt-8 overflow-hidden " +
          "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        }
      >
        <div className="mb-20 flex w-max gap-3 md:gap-4 animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...techStack, ...techStack].map((tech, i) => (
            <TechStackCard key={i} {...tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
