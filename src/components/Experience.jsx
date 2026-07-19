import React from "react";

const experience = [
  // {
  //   role: "Mobile App Developer",
  //   company: "Poseidon Distribution OPC",
  //   duration: "April 2026 - Present",
  // },
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
    <div className="text-primary" id="projects">
      <h1 className="text-start text-lg font-semibold mb-5">Experience</h1>

      <div className="relative space-y-8">
        {/* The Vertical Line - Centered relative to the 12px (size-3) dots */}
        <div className="absolute left-[5px] top-2 h-full w-[1px] bg-slate-200 dark:bg-zinc-800" />

        {experience.map((data, index) => (
          <div key={index} className="relative pl-8 group">
            {/* The Bullet - Perfectly centered on the line */}
            <div className="absolute left-0 top-1.5 size-2.5 rounded-sm dark:bg-white bg-zinc-950 z-10 transition-transform group-hover:scale-125 " />

            <div className="flex flex-col gap-1">
              {/* Header Row */}
              <div className="flex flex-col  md:flex-row md:justify-between md:items-center">
                <h3 className="font-bold text-base md:text-md tracking-tight">
                  {data.role}
                </h3>
                <span className="text-xs md:text-sm font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded-lg w-fit">
                  {data.duration}
                </span>
              </div>

              {/* Company Info */}
              <p className="text-sm font-medium text-primary/80 uppercase tracking-wide">
                {data.company}
              </p>

              {/* Optional: Add a small description if your data has it */}
              {data.other && (
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {data.other}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
