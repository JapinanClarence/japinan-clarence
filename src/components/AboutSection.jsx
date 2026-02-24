import React from "react";
const aboutMe = "Passionate about web development with hands-on experience in PHP, MySQL, and the MERN stack. Skilled in building scalable and efficient RESTful APIs, optimizing database structures, enhancing system performance, and developing secure, high-quality web applications. Always eager to learn and improve in fast-paced development environments."
export function AboutSection() {
  return (
    <div className="" id="about">
      <h1 className="text-start text-lg font-semibold mb-5">A Bit About Me</h1>
      <p className="text-pretty">{aboutMe}</p>
    </div>
  );
}
