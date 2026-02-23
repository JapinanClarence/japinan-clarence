import { Footer } from "./components/Footer";
import {NavMain} from "./components/NavMain";
import Home from "./pages";

function App() {

  return (
    <div className="dark:bg-neutral-950">
      <NavMain/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
