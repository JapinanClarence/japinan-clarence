import React from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }) {
  return (
    <section className={cn("container mx-auto px-8 lg:px-52 xl:px-60", className)}>
      {children}
    </section>
  );
}
