import logo from "../asset/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "utils/Context";
import Toggle from "./Toggle";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);
  const { isLight, setIslight } = useContext(ThemeContext);
  const handleClick = () => {
    setIslight((e) => !e);
  };
  const changeColor = () => {
    if (window.scrollY >= 60) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={color ? "header header-bg  w-full" : "header w-full "}>
      <div className=" px-7 lg:px-20 flex justify-between items-center h-20  text-abu-200 z-20">
        <div className="flex items-center ">
          <Link to="/">
            <img src={logo} className="w-10 h-10 cursor-auto" alt="logo" />
          </Link>
          <Link to="/">
            <h1 className="pl-4 font-semibold text-lg">MOVEE</h1>
          </Link>
          <ul className="hidden sm:hidden md:flex lg:ml-[6rem]">
            <li className="px-5 font-medium text-base tracking-wider">
              <Link to="/">Home</Link>
            </li>
            <li className="px-5 font-medium text-base tracking-wider ">
              <Link to="/">Tv Show</Link>
            </li>
            <li className="px-5 font-medium text-base tracking-wider ">
              <Link to="/">Movie</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center text-abu-50 space-x-4  ml-10 ">
          <Link to="/favorite">
            <BsBookmark size={20} />
          </Link>

          <Toggle isLight={isLight} onClick={handleClick} />
        </div>
        {/* mobile bttn */}
        <div className="z-30 block md:hidden " onClick={handleNav}>
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        {/* menu mbile */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] z-20 bg-secondary-600 h-full ease-in-out duration-200"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex items-center pl-8 pt-5">
            <Link>
              <img src={logo} className="w-10 h-10 cursor-auto" alt="logo" />
            </Link>
            <Link>
              <h1 className="pl-4 font-semibold text-lg">MOVEE</h1>
            </Link>
          </div>
          <ul className="pt-10 p-4">
            <li className="p-5 font-medium text-base tracking-wider">
              <Link to="/">Home</Link>
            </li>
            <li className="p-5 font-medium text-base tracking-wider ">
              <Link to="/">Tv Show</Link>
            </li>
            <li className="p-5 font-medium text-base tracking-wider ">
              <Link to="/">Movie</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
