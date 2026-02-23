import React from "react";

export function TechStackCard({ title, icon: Icon }) {
  return (
    <div className="inline-flex items-center gap-2">
      <Icon width={25} height={25} />
      {title}
    </div>
  );
}
