import Home from "./pages/Home";
import HeroDetails from "./pages/HeroDetails";
import { Route, Routes } from "react-router-dom";
import { HeroContextProvider } from "./contexts/herosContext";

function App() {
  return (
    <HeroContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:heroId" element={<HeroDetails />} />
      </Routes>
    </HeroContextProvider>
  );
}

export default App;
