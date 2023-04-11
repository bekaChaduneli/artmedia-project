import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../public/logo.png";
import search from "../../public/search.png";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  const navItems = ["Home", "Service", "Projects", "About", "Contact"];
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex flex-col w-full gap-2 ">
      <nav className="flex justify-between   flex-row w-full h-full items-center xl:px-60 xl:pt-14 sm:pt-[16px] sm:px-[16px] md:px-8">
        <div className="flex flex-row  sm:gap-2 xl:gap-0 sm:ml-4 md:ml-9 xl:ml-0 sm:w-[100px] sm:h-[55px] xl:w-[218px] xl:h-[68px] justify-between">
          <img
            className="xl:h-[69px] sm:w-12 xl:w-[59px] "
            src={logo}
            alt="logo"
          />
          <h1 className="xl:text-xl sm:text-[16px] xl:text-[22px] text-darkblue xl:w-28 ">
            COMPANY NAME
          </h1>
        </div>
        <GiHamburgerMenu
          onClick={() => setMenu(!menu)}
          className="w-[40px] sm:mr-4 md:mr-0 h-[40px] hover:opacity-[40%] transition-all duration-200 sm:block md:hidden mt-[-12px]"
        />
        <div className=" md:flex sm:hidden md:gap-10 lg:gap-20 xl:gap-22 xxl:gap-52 items-center h-8 ">
          <ul className="flex md:justify-between md:w-[300px] lg:w-[520px] xl:w-[400px] xxl:gap-12 xxl:w-[550px] text-darkblue font-bold h-8">
            {navItems.map((navItem) => (
              <div class=" group">
                <li className="flex md:text-[14px] lg:text-[16px]  flex-col items-center transition duration-300 group-hover:text-red">
                  <Link
                    to={navItem}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="cursor-pointer "
                  >
                    {navItem}
                  </Link>
                  <div className="h-[2px] w-[0px] transition-all duration-300 bg-red group-hover:w-[18px]" />
                </li>
              </div>
            ))}
          </ul>
          <form className="flex gap-2 md:w-[160px] md:mt-2 xl:mt-0 xl:w-52 h-8 border-b border-grey">
            <input
              className="xl:w-44 md:w-[140px] text-darkblue h-4 outline-none text-sm font-normal"
              placeholder="Search keyword..."
            />
            <img
              className="w-4 h-4 transition duration-300 hover:opacity-[50%]"
              src={search}
              alt="search"
            />
          </form>
        </div>
      </nav>
      <div
        className={` items-center flex-col gap-2 flex w-[90%] self-center transition-all h-[340px] mt-2 bg-news rounded-[8px]transition-max-height duration-300 ${
          menu ? "max-h-screen p-[26px] " : "max-h-0"
        }`}
      >
        <>
          <form
            className={` gap-2 w-52 h-8 border-b transition-all duration-300 border-grey ${
              menu ? "flex" : "hidden"
            }`}
          >
            <input
              className="w-44 bg-transparent text-darkblue h-4 outline-none text-sm font-normal"
              placeholder="Search keyword..."
            />
            <img
              className="w-4 h-4 transition duration-300 hover:opacity-[50%]"
              src={search}
              alt="search"
            />
          </form>
          <ul
            className={`${
              menu ? "flex" : "hidden"
            }  w-full flex-col gap-[11px] mt-4 self-start  text-darkblue font-bold h-8 transition-all duration-1000`}
          >
            {navItems.map((navItem) => (
              <Link
                to={navItem}
                spy={true}
                smooth={true}
                offset={-340}
                duration={500}
                onClick={() => setInterval(setMenu(!menu), 2000)}
                className="group relative"
              >
                <div className="z-[10] bg-transparent absolute w-[0px] h-[40px] pl-[14px] pr-[14px] flex items-center border-slate-300 rounded-[4px] transition-all duration-400 group-hover:w-full group-hover:bg-red" />
                <li className=" z-[0] w-full h-[40px] rounded-[4px] flex items-center p-4 bg-grey ">
                  <h1 className="z-[11] cursor-pointer group-hover:text-white transition-all duration-300">
                    {navItem}
                  </h1>
                </li>
              </Link>
            ))}
          </ul>
        </>
      </div>
    </div>
  );
}
