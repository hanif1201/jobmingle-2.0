import logo from "../assets/Vector.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative container  p-6">
      <div className="flex justify-between items-center ">
        {/* logo */}
        <div className="pt-2 ">
          <img src={logo} alt="" className="object-contain h-20 w-40" />
        </div>
        {/* menu bar */}
        <ul className="hidden space-x-6 md:flex">
          <li>
            <Link
              to="/"
              className="text-grey font-bold text-base hover:text-yellow active:text-yellow"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/jobs"
              className="text-grey font-bold text-base hover:text-yellow active:text-yellow"
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="text-grey font-bold text-base hover:text-yellow active:text-yellow"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-grey font-bold text-base hover:text-yellow active:text-yellow"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/vendor"
              className="text-grey font-bold text-base hover:text-yellow active:text-yellow"
            >
              Vendor
            </Link>
          </li>
          <li>
            <Link
              to="/employer"
              className="text-grey font-bold text-base hover:text-yellow active:text-darkyellow"
            >
              Employer
            </Link>
          </li>
        </ul>
        {/* buttons */}
        <div className="hidden space-x-4 md:flex">
          <button className="text-yellow text-2xl font-bold">Sign In</button>
          <button className="text-white p-4 bg-yellow rounded-lg text-2xl font-bold">
            Sign Up
          </button>
        </div>
        <button
          id="menu-btn"
          className={
            isOpen
              ? "block hamburger md:hidden focus:outline-none open"
              : "block hamburger md:hidden focus:outline-none "
          }
          onClick={toggleMenu}
        >
          {/* block hamburger md:hidden focus:outline-none */}
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div className="md:hidden">
        <div
          id="menu"
          className={
            isOpen
              ? "flex absolute flex-col items-center  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
              : "hidden"
          }
          // "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/jobs" onClick={toggleMenu}>
            Job
          </Link>
          <Link to="/courses" onClick={toggleMenu}>
            Courses
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
          <Link to="/vendor" onClick={toggleMenu}>
            Vendor
          </Link>
          <Link to="/employer" onClick={toggleMenu}>
            Employer
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
