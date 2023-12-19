import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Vendor from "./pages/Vendor";
import Employer from "./pages/Employer";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function NavbarWithRouter() {
  const location = useLocation();
  const pathsWithoutNavbar = ["/login", "/signup"];

  return !pathsWithoutNavbar.includes(location.pathname) && <Navbar />;
}

function App() {
  return (
    <>
      <Router>
        <NavbarWithRouter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/employer" element={<Employer />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
