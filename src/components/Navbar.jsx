import { Link, NavLink } from "react-router";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import logo2 from "../assets/couch.png";
import { furniture_store } from "../store/store";
import DarkMode from "./darkMode";
import { GoSun } from "react-icons/go";
import { LuSunMoon } from "react-icons/lu";

const navItem = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

export const NavItem = ({ handleHomeToggle }) => {
  const { darkMode, handleDarkMode } = useContext(furniture_store);
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItem.map((item, i) => (
        <li key={i} onClick={handleHomeToggle}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
      <li key={5} onClick={handleDarkMode}>
        <div onClick={handleHomeToggle}>
          <DarkMode icon={darkMode ? <GoSun />:<LuSunMoon /> } />
        </div>
        
      </li>
    </ul>
  );
};

function Navbar() {
  const [isHomeOpen, setHometoggle] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const { cartItemUpdate } = useContext(furniture_store);

  const handleHomeToggle = () => {
    setHometoggle((isHomeOpen) => !isHomeOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition duration-300 z-50 ease-in-out  ${
        isScrolled
          ? "bg-white dark:bg-black dark:text-white"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-screen-2xl container flex justify-between mx-auto items-center py-6 px-4">
        <Link to="/" className="font-bold md:ml-8">
          <div className="h-8 w-8 md:h-10 md:w-10 object-contain ">
            <img src={logo2} alt="couch" />
          </div>
        </Link>{" "}
        {/* style={{backgroundImage :`url(${logo})`}} */}
        {/*logo section*/}
        <div className="hidden md:flex">
          <NavItem />
        </div>{" "}
        {/*Mobile Items*/}
        <div
          className={`fixed top-0 left-0 w-[70%] h-screen flex flex-col items-center justify-center bg-black bg-opacity-80 space-y-8 text-white transition-transform duration-300 transform ${
            isHomeOpen
              ? "translate-x-[43%] ease"
              : "translate-x-[150%] ease-in-out"
          } md:hidden z-30 `}
        >
          <div className="absolute top-4 right-4 text-xl">
            <FaTimes onClick={handleHomeToggle} />
          </div>
          <NavItem handleHomeToggle={handleHomeToggle} />
        </div>
        {/*Nav Items Sections*/}
        <NavLink to="/cart">
          <div className=" md:block cursor-pointer relative sm:mr-8">
            {" "}
            {/*Cart Section*/}
            <BsFillHandbagFill
              className={`text-2xl ${
                isScrolled ? "text-black dark:text-white" : " sm:text-red-200"
              }`}
            />
            <sup className="absolute top-0 -right-2 bg-primary text-white w-4 h-4 flex justify-center items-center rounded-full text-xs">
              {cartItemUpdate.length}
            </sup>
          </div>
        </NavLink>
        {/*hamburger menu*/}
        <div
          onClick={handleHomeToggle}
          className="md:hidden hover:text-primary cursor-pointer text-xl"
        >
          <FaBars />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
