
import { cn } from "@/lib/utils";
import { SectionHeader } from "./ui/section-header";

export const experience = [
  // {
  //   role: "Mobile App Developer",
  //   company: "Poseidon Distribution OPC",
  //   duration: "April 2026 - Present",
  // },
  {
    role: "Full Stack Developer",
    company: "A3Brands LLC",
    duration: "September 2026 - Present",
  },
  {
    role: "Full Stack Developer | Freelance",
    company: "RGAN XI (Region XI GAD Advocates Network)",
    duration: "July 2026 - Present",
  },
  {
    role: "Full Stack Developer",
    company: "Green Home Improvements",
    duration: "June 2025 - March 2026",
  },
  {
    role: "Full Stack Developer | Freelance",
    company: "Philippine Coleopterists Society Inc.",
    duration: "September 2025 - December 2025",
  },
  {
    role: "Full Stack Developer",
    company: "Camillians Home Health Services",
    duration: "June 2025 - October 2025",
  },
];

export const Experience = () => {
  return (
    <div className="text-primary scroll-mt-24 md:scroll-mt-28" id="experience">
      <SectionHeader
        backgroundText="Experience"
        title="Experience"
        align="center"
        subtitle="+1 year of experience"
      />

      <div className="relative mt-8">
        {/* The Vertical Line - Centered relative to the 12px (size-3) dots */}
        <div className="absolute left-[5px] top-2 h-full w-[1px] bg-slate-200 dark:bg-zinc-800" />

        {experience.map((data, index) => (
          <div key={index} className="relative pl-8 group">
            {/* The Bullet - Perfectly centered on the line */}
            <div className="absolute left-0 top-1.5 size-2.5 rounded-sm dark:bg-white bg-zinc-950 z-10 transition-transform group-hover:scale-125 " />

            <div
              className={cn(
                "flex flex-col gap-1",
                "sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                index !== experience.length - 1
                  ? "pb-5 mb-5 border-b border-zinc-200 dark:border-zinc-800"
                  : "pb-0"
              )}
            >
              {/* Company + Role */}
              <div>
                <h3 className="font-bold text-base md:text-lg tracking-tight">
                  {data.company}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {data.role}
                </p>
              </div>

              {/* Duration */}
              <span className="text-xs md:text-sm text-muted-foreground shrink-0">
                {data.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
