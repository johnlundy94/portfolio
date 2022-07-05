import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./pages/NavBar/NavBar";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
