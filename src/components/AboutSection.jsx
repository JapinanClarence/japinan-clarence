import React from "react";

export function AboutSection({data}) {
  return (
    <div className="dark:text-white" id="about">
      <h1 className="text-start text-lg font-semibold mb-5">A Bit About Me</h1>
      <p className="text-pretty">{data.aboutMe}</p>
    </div>
  );
}
