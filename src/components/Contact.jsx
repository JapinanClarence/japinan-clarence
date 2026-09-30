import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function Contact() {
  return (
    <div
      id="contact"
      className="scroll-mt-24 md:scroll-mt-28 pt-28 flex flex-col items-center py-10 md:py-16 text-center"
    >
      {/* Status badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs md:text-sm font-medium shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        {hero.status}
      </div>

      {/* Heading */}
      <h2 className="mt-6 max-w-3xl font-sans font-extrabold uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance">
        Got a project worth building?
      </h2>

      {/* Subtext */}
      <p className="mt-4 max-w-md text-sm md:text-base text-muted-foreground text-pretty">
        Open to freelance work and full-time opportunities. Send a message
        and let&apos;s turn the idea into something real.
      </p>

      {/* CTA */}
      <Button
        size="lg"
        className="mt-8 rounded-full px-6"
        onClick={() =>
          window.open("mailto:japinanclarence@email.com", "_blank")
        }
      >
        Contact Me
        <ArrowUpRight className="size-4" />
      </Button>

      {/* Socials */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
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
  );
}
