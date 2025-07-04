import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Projects from "./pages/Projects";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-slate-100 relative">
      <BrowserRouter>
      <div className="w-full sticky top-0 z-50">
        <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="w-full">
        <Footer/>
        </div>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;