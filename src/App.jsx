import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Nav } from "./components";
import { Home, About, Projects, Contact } from "./pages";

function App() {
  return (
    <main className="bg-[#14092e] h-full">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>       
      </Router>
    </main>
  );
}

export default App;
