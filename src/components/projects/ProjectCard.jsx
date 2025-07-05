import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Link, Menu } from "lucide-react";
import { Button } from "../ui/button";
const ProjectCard = ({data}) => {

  return (
    <Card className="h-full overflow-hidden  bg-neutral-950 border-neutral-700">
      <CardHeader className="p-0 ">
        <div className={`h-56 bg-slate-700 overflow-clip`}>
          <img src={data.image} alt="" className="h-full w-full object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <CardTitle className="text-md  text-white flex items-center">
          {data.title}
          <Button
            className={data.isClickable ? "p-0 ml-2 size-2" : "hidden"}
            variant="icon"
            onClick={() => window.open(data.link, "_blank")}
          >
            <Link size={5} />
          </Button>
        </CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
