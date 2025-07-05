import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "./components/ui/flip-words";
import { TracingBeam } from "./components/ui/tracing-beam";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./components/ui/button";
import heroImage from "./assets/clarence.jpg";
import jsIcon from "./assets/javascript.png";
import phpIcon from "./assets/php.png";
import nodeJsIcon from "./assets/nodejs.png";
import expressJsIcon from "./assets/expressjs.png";
import tailwindIcon from "./assets/tailwind.png";
import bootstrapIcon from "./assets/bootstrap.png";
import mysqslIcon from "./assets/mysql.png";
import reactjsIcon from "./assets/reactjs.png";
import mongodbIcon from "./assets/mongodb.png";
import aceTrack from "./assets/ace-track.png";
import transitMaster from "./assets/transitmaster.png";
import { Github, Link, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mangoDisease from "./assets/mango-desease.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

function App() {
  const words = ["responsive", "beautiful", "modern"];
  return (
    <div>
      <div className="px-96"> 
        <Card className="h-full overflow-hidden">
          <CardHeader className="p-0">
            <div className={`h-56 bg-slate-200`}>
              <img
                src={transitMaster}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </CardHeader>
          <CardContent className="p-5">
            <CardTitle className="text-md">
              {"TransitMaster"}
              <Button
                className="p-0 ml-2 size-2"
                variant="icon"
                onClick={() =>
                  window.open("https://app-transitmaster.vercel.app/", "_blank")
                }
              >
                <Link size={5} />
              </Button>
            </CardTitle>
            <CardDescription>
              {"School vehicle scheduling and tracking system"}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <TracingBeam className={"px-10"}>
        <div className="pt-10 relative  antialiased">
          <Card className="h-full overflow-hidden">
            <CardHeader className="p-0">
              <div className={`h-56 bg-slate-200`}>
                <img
                  src={transitMaster}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-5">
              <CardTitle className="text-md">
                {"TransitMaster"}
                <Button
                  className="p-0 ml-2 size-2"
                  variant="icon"
                  onClick={() =>
                    window.open(
                      "https://app-transitmaster.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  <Link size={5} />
                </Button>
              </CardTitle>
              <CardDescription>
                {"School vehicle scheduling and tracking system"}
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-full overflow-hidden">
            <CardHeader className="p-0">
              <div className={`h-56 bg-slate-200`}>
                <img
                  src={transitMaster}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-5">
              <CardTitle className="text-md">
                {"TransitMaster"}
                <Button
                  className="p-0 ml-2 size-2"
                  variant="icon"
                  onClick={() =>
                    window.open(
                      "https://app-transitmaster.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  <Link size={5} />
                </Button>
              </CardTitle>
              <CardDescription>
                {"School vehicle scheduling and tracking system"}
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-full overflow-hidden">
            <CardHeader className="p-0">
              <div className={`h-56 bg-slate-200`}>
                <img
                  src={transitMaster}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-5">
              <CardTitle className="text-md">
                {"TransitMaster"}
                <Button
                  className="p-0 ml-2 size-2"
                  variant="icon"
                  onClick={() =>
                    window.open(
                      "https://app-transitmaster.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  <Link size={5} />
                </Button>
              </CardTitle>
              <CardDescription>
                {"School vehicle scheduling and tracking system"}
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-full overflow-hidden">
            <CardHeader className="p-0">
              <div className={`h-56 bg-slate-200`}>
                <img
                  src={transitMaster}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-5">
              <CardTitle className="text-md">
                {"TransitMaster"}
                <Button
                  className="p-0 ml-2 size-2"
                  variant="icon"
                  onClick={() =>
                    window.open(
                      "https://app-transitmaster.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  <Link size={5} />
                </Button>
              </CardTitle>
              <CardDescription>
                {"School vehicle scheduling and tracking system"}
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-full overflow-hidden">
            <CardHeader className="p-0">
              <div className={`h-56 bg-slate-200`}>
                <img
                  src={transitMaster}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-5">
              <CardTitle className="text-md">
                {"TransitMaster"}
                <Button
                  className="p-0 ml-2 size-2"
                  variant="icon"
                  onClick={() =>
                    window.open(
                      "https://app-transitmaster.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  <Link size={5} />
                </Button>
              </CardTitle>
              <CardDescription>
                {"School vehicle scheduling and tracking system"}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </TracingBeam>
      <div>
      <Card className="h-full overflow-hidden">
            <CardHeader className="p-0">
              <div className={`h-56 bg-slate-200`}>
                <img
                  src={transitMaster}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-5">
              <CardTitle className="text-md">
                {"TransitMaster"}
                <Button
                  className="p-0 ml-2 size-2"
                  variant="icon"
                  onClick={() =>
                    window.open(
                      "https://app-transitmaster.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  <Link size={5} />
                </Button>
              </CardTitle>
              <CardDescription>
                {"School vehicle scheduling and tracking system"}
              </CardDescription>
            </CardContent>
          </Card><Card className="h-full overflow-hidden">
            <CardHeader className="p-0">
              <div className={`h-56 bg-slate-200`}>
                <img
                  src={transitMaster}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-5">
              <CardTitle className="text-md">
                {"TransitMaster"}
                <Button
                  className="p-0 ml-2 size-2"
                  variant="icon"
                  onClick={() =>
                    window.open(
                      "https://app-transitmaster.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  <Link size={5} />
                </Button>
              </CardTitle>
              <CardDescription>
                {"School vehicle scheduling and tracking system"}
              </CardDescription>
            </CardContent>
          </Card><Card className="h-full overflow-hidden">
            <CardHeader className="p-0">
              <div className={`h-56 bg-slate-200`}>
                <img
                  src={transitMaster}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-5">
              <CardTitle className="text-md">
                {"TransitMaster"}
                <Button
                  className="p-0 ml-2 size-2"
                  variant="icon"
                  onClick={() =>
                    window.open(
                      "https://app-transitmaster.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  <Link size={5} />
                </Button>
              </CardTitle>
              <CardDescription>
                {"School vehicle scheduling and tracking system"}
              </CardDescription>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}

export default App;
