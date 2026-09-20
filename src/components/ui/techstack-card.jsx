import React from "react";

export function TechStackCard({ title, icon: Icon }) {
  return (
    <div
      className={
        "group flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3.5 shadow-sm " +
        "transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-md"
      }
    >
      <Icon
        width={22}
        height={22}
        className="shrink-0 transition-transform duration-200 group-hover:scale-110"
      />
      <span className="text-sm font-medium truncate">{title}</span>
    </div>
  );
}
