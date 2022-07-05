import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./pages/NavBar/NavBar";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Resume from "./pages/Resume/Resume";
import ContactMe from "./pages/ContactMe/ContactMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
