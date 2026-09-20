import React from "react";

export const Footer = () => {
    const year = new Date();
  return <div className="text-muted-foreground text-xs text-center py-10 space-x-2">

    <span>
        &copy; {year.toLocaleDateString("en-PH",{year: "numeric"})}.
    </span>
    <span>japinanC.</span>
  </div>;
};
