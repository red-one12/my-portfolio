import { useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; 
import myLogo from "../assets/my photo/name logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar border-b-2 border-gray-100 fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Logo */}
      <div className="navbar-start flex items-center">
        <a href="#">
          <img className="w-12" src={myLogo} alt="Logo" />
        </a>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10 text-[#1e293b] cursor-pointer">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="underline font-bold"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <button className="btn text-white bg-[#1e293b] px-4 py-2 rounded-md flex items-center gap-2">
          <a href="/resume.pdf" download>Resume</a>
          <FaDownload />
        </button>

        <button
          className="lg:hidden text-[#1e293b] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 text-[#1e293b] cursor-pointer">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <li key={item} className="text-xl">
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="underline font-bold"
                  onClick={() => setIsOpen(false)} 
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
