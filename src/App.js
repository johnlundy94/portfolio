import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./pages/NavBar/NavBar";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Resume from "./pages/Resume/Resume";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
