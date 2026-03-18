import { Footer } from "./components/Footer";
import {NavMain} from "./components/NavMain";
import { NavMobile } from "./components/NavMobile";
import Home from "./pages";
import { Analytics } from "@vercel/analytics/next"
function App() {

  return (
    <div className="dark:bg-neutral-950">
      <Analytics/>
      <NavMain/>
      <NavMobile/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
