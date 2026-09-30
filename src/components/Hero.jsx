import { Button } from "@/components/ui/button";
import { images } from "@/constants/images";
import { FileText, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import data from "@/data/data.json";

const { hero } = data;

const socials = [
  {
    label: "Github",
    href: "https://github.com/JapinanClarence",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/clarence-japinan",
    icon: LinkedinIcon,
  },
];

export function Hero() {
  return (
    <div
      className="relative w-full overflow-hidden flex flex-col justify-between gap-6 py-8 md:py-20 min-h-[100svh] md:min-h-[calc(100vh-4rem)] scroll-mt-24 md:scroll-mt-28"
      id="home"
    >
      {/* Top content: status badge + big split name */}
      <div className="relative z-10 flex flex-col gap-4 md:gap-3">
        {/* Status badge */}
        <div className="flex justify-center md:justify-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs md:text-sm font-medium shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {hero.status}
          </div>
        </div>

        {/* Big split name */}
        <div className="relative text-center md:text-left leading-[0.95]">
          <h1 className="font-sans font-extrabold uppercase tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <span
              className="block md:inline text-transparent"
              style={{
                WebkitTextStroke: "1.5px hsl(var(--foreground))",
              }}
            >
              {hero.firstName}
            </span>{" "}
            <span className="block md:inline text-foreground">
              {hero.lastName}
            </span>
          </h1>
        </div>
      </div>

      {/* Portrait — on mobile it sits in normal document flow between the name
          and the role/CTA content so it can't overlap them. From md up it
          switches back to being pinned flush to the bottom edge of the hero
          section, bleeding off it, like the reference. */}
      <div className="pointer-events-none relative z-0 flex items-end justify-center md:absolute md:inset-0 md:z-20">
        <div className="relative h-[34vh] sm:h-[42vh] md:h-[82%] lg:h-[90%]">
          <div className="absolute inset-x-0 bottom-0 -z-10 mx-auto h-2/3 w-2/3 rounded-full bg-primary/10 blur-3xl" />
          <img
            src={images.hero_image}
            alt={`${hero.firstName} ${hero.lastName}`}
            className="h-full w-auto select-none drop-shadow-2xl grayscale"
          />
        </div>
      </div>

      {/* Role + tagline + CTAs / Socials — sits in front of the portrait near the bottom */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-8">
        <div className="max-w-sm text-center md:text-left">
          <h2 className="text-lg md:text-xl font-semibold">{hero.role}</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground text-pretty">
            {hero.tagline}
          </p>
          <div className="mt-5 flex items-center justify-center md:justify-start gap-3">
            <Button
              size="sm"
              className="rounded-full px-5"
              onClick={() =>
                window.open("mailto:japinanclarence@email.com", "_blank")
              }
            >
              Let&apos;s Collaborate
              <ArrowUpRight className="size-4" />
            </Button>
            <a
              href="https://drive.google.com/file/d/1GGx6U6UDhzsBwt8nrbtauomDzHX95uI9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline" size="sm" className="rounded-full px-5">
                <FileText className="size-4" />
                Resume
              </Button>
            </a>
          </div>
        </div>

        <div className="flex md:flex-col items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full gap-2 px-4"
              >
                <Icon width={16} height={16} />
                {label}
              </Button>
            </a>
          ))}
          <a href="mailto:japinanclarence@email.com">
            <Button variant="outline" size="sm" className="rounded-full gap-2 px-4">
              <Mail className="size-4" />
              Email
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
