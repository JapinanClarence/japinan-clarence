import React from "react";
import { cn } from "@/lib/utils";

/**
 * Reusable section header used across sections that need the
 * "big faint background label + /Title" layout, e.g. the Projects section.
 *
 * <SectionHeader
 *   backgroundText="Portfolio"
 *   title="Selected Work"
 *   subtitle="Here are some of the projects I have worked on."
 * />
 */
export function SectionHeader({
  backgroundText,
  title,
  subtitle,
  align = "center",
  className,
}) {
  return (
    <div
      className={cn(
        "relative pt-8 pb-2 md:pt-12",
        align === "center" ? "text-center" : "text-start",
        className
      )}
    >
      {backgroundText && (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none select-none absolute inset-x-0 -top-2 md:-top-6",
            "text-[15vw] md:text-[6.5vw] font-extrabold uppercase tracking-tight leading-none",
            "text-foreground/[0.04] whitespace-nowrap overflow-hidden",
            align === "center" ? "text-center" : "text-start"
          )}
        >
          {backgroundText}
        </span>
      )}

      <div className="relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
          <span className="text-muted-foreground/60">/</span>
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-3 text-sm md:text-base text-muted-foreground text-pretty",
              align === "center" ? "mx-auto max-w-xl" : "max-w-xl"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
