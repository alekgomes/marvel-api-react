import Home from "./pages/Home";
import HeroDetails from "./pages/HeroDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:heroName" element={<HeroDetails />} />
    </Routes>
  );
}

export default App;
