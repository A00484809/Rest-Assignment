
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import AboutMe from "./AboutMe";
import MyTown from "./MyTown";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/about">About Me</Link>
          <Link to="/mytown">My Town</Link>
        </nav>
        <Routes>
          {/* Default route redirects to About Me */}
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/mytown" element={<MyTown />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
