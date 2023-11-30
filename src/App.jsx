import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Vendor from "./pages/Vendor";
import Employer from "./pages/Employer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/employer" element={<Employer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
