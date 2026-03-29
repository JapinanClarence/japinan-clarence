import { Footer } from "./components/Footer";
import {NavMain} from "./components/NavMain";
import { NavMobile } from "./components/NavMobile";
import Home from "./pages";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {

  return (
    <div className="dark:bg-neutral-950">
      <Analytics/>
      <SpeedInsights/>
      <NavMain/>
      <NavMobile/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
