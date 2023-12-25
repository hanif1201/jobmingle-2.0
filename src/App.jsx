import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/beforeSignUp/Home";
import Jobs from "./pages/beforeSignUp/Jobs";
import Courses from "./pages/beforeSignUp/Courses";
import About from "./pages/beforeSignUp/About";
import Vendor from "./pages/beforeSignUp/Vendor";
import Employer from "./pages/beforeSignUp/Employer";
import LogIn from "./pages/beforeSignUp/LogIn";
import SignUp from "./pages/beforeSignUp/SignUp";

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
