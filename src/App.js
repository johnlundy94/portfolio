import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./pages/NavBar/NavBar";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
