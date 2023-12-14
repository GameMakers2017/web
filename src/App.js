import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Project from "./pages/project";
import Review from "./pages/review";
import Hof from "./pages/hof";
import Recruit from "./pages/recruit";
import Inquiry from "./pages/inquiry";

import Nav from "./components/nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/review" element={<Review />} />
          <Route path="/hof" element={<Hof />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
