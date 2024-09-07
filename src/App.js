import React from "react";
import { HashRouter, Route as Router } from "react-router-dom";
import Blogs from "./components/Blogs"; // Import your Blogs component
import Home from "./components/Homepage";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects"; // Import your Projects component
import Publications from "./components/Publications"; // Import your Publications component
import Resume from "./components/Resume"; // Import your Resume component

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <HashRouter>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/resume" element={<Resume />} />
        </HashRouter>
      </div>
    </Router>
  );
}

export default App;
