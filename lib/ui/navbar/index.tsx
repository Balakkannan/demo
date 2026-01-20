"use client";
import classnames from "@/lib/function/classnames";
import style from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const navbarContent = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Let's Connect",
    href: "/lets-connect",
  },
];

const serviceContent = [
  { name: "Digital Marketing", href: "/services/digital" },
  { name: "Web & App Development", href: "/services/webapp" },
  { name: "Marker Place & Marketing", href: "/services/marketplace" },
  { name: "E-Commerce & Marketing", href: "/services/e-commerce" },
  { name: "Production", href: "/services/production" },
  { name: "Print Media & Public Relations (PR)", href: "/services/media" },
];

export default function Navbar() {
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [showSerivces, setShowServices] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  //router
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.services-dropdown-container')) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown]);
  return (
    <div
      className="flex lg:justify-between md:justify-center sm:justify-center xs:justify-center items-center px-2 lg:px-8 py-4 sticky 
    top-0 bg-[#0a0a0a] z-50 w-[100%] "
    >
      <div className={`flex  w-[100%]  sm:justify-center md:justify-start `}>
        <AnimatePresence>
          {openSidebar ? (
            <div className="relative">
              {/**backdrop */}
              <div
                className="absolute z-[5] backdrop-blur-md w-[calc(100vw+2rem)] h-screen -top-8 -left-8"
                onClick={() => setOpenSidebar(false)}
              ></div>
              {/**sidebar */}
              <motion.aside
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`absolute  -top-2 -left-2 z-10 bg-black w-[60vw] md:w-[50vw] max-w-md h-screen `}>
                <ul>
                  {navbarContent.map((content) => {
                    return content.name !== "Services" ? (
                      <li
                        key={content.name}
                        className="text-base md:text-xl font-amazingSlab p-4"
                        onClick={() =>
                          // setTimeout(() => setOpenSidebar(false), 200)
                          setOpenSidebar(false)
                        }
                      >
                        <Link href={content.href}>{content.name}</Link>
                      </li>
                    ) : (
                      <li
                        key={content.name}
                        className="text-base md:text-xl font-amazingSlab p-4"
                        onClick={() => setShowServices(!showSerivces)}
                      >
                        <div className="flex gap-2">
                          {content.name}
                          <svg
                            className="-mr-1 size-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
                          </svg>
                        </div>
                        {showSerivces && (
                          <ul className="px-4 list-outside">
                            {serviceContent.map((value) => (
                              <Link
                                key={value.name}
                                href={value.href}
                                className="p-4 block"
                                onClick={() => setOpenSidebar(false)}
                              >
                                {value.name}
                              </Link>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.aside>
            </div>
          ) : null}
        </AnimatePresence>
        {/**bread */}
          <div className="flex lg:justify-start md:justify-end sm:justify-end xs:justify-end h-full w-[50%]  lg:w-auto ">
           <Image
          src="/images/logo.svg"
          alt="logo"
          width={40}
          height={40}
          onClick={() => router.push("/home")}
          className={ `cursor-pointer lg:ml-[50px] lg:mr-5 ` }
        /></div>
      <div className="flex justify-end h-full w-[50%]  lg:hidden sm:justify-end">
          <div
          className="block lg:hidden  font-bold p-1 rounded-lg max-h-max 
          "
          onClick={() => setOpenSidebar(!openSidebar)}
        > 
        <img src="/nav/Vector.svg" alt="menu" className="w-[28px] h-auto" />
        </div>
      </div>
     
        {/* ${isMobile ? 'ml-[140px]' : 'ml-[300px]'} */}
        <div
          className="hidden lg:block leading-0 cursor-pointer"
          onClick={() => router.push("/home")}
        >
          <div className="font-amazingSlab font-extrabold text-xl md:text-3xl text-white whitespace-nowrap ">
            HEIREACH MEDIA
          </div>
          <div
            className="font-amazingSlab font-normal text-[8px] md:text-[12px] text-white whitespace-nowrap
           text-right -translate-y-2 leading-[30px]"
          >
            Highlighting Brands That Matter
          </div>
        </div>
      </div>
      <ul className={"hidden lg:flex justify-between items-center gap-8 lg:mr-[50px]  md:w-[100%] "}>
        {navbarContent.map((content) => {
          return (
            <li
              key={content.name}
              className={classnames(
                style.text_xl,
                "font-amazingSlab text-base text-[20px] lg:text-[12px] xl:text-[15px] xxl4:text-[18px]"
              )}
            >
              {content.name === "Services" ? (
                <DropDown
                  mouseEnter={mouseEnter}
                  setMouseEnter={setMouseEnter}
                  showDropdown={showDropdown}
                  setShowDropdown={setShowDropdown}
                />
              ) : (
                <Link href={content.href}>{content.name}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

interface DropDownProps {
  mouseEnter: boolean;
  setMouseEnter: (x: boolean) => void;
  showDropdown: boolean;
  setShowDropdown: (x: boolean) => void;
}
const DropDown = ({ showDropdown, setShowDropdown }: DropDownProps) => {
  return (
    <div className="services-dropdown-container">
      <button
        className="flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2 text-base font-amazingSlab"
        onClick={() => setShowDropdown(!showDropdown)}
        id="menu-button"
        aria-expanded={showDropdown}
        aria-haspopup="true"
      >
        Services
        <svg
          className={`-mr-1 size-5 text-gray-400 transition-transform duration-300 ${
            showDropdown ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
        </svg>
      </button>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full mt-0 bg-gradient-to-b from-gray-950 to-black border-b border-gray-800 shadow-2xl w-screen -ml-8 lg:-ml-[50px] "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="px-8 lg:px-8 py-8 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceContent.map((value) => (
                  <Link
                    key={value.name}
                    href={value.href}
                    className="group p-4 rounded-lg hover:bg-gray-900/50 transition-colors duration-200 border border-transparent hover:border-blue-500/30 "
                    onClick={() => setShowDropdown(false)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-amazingSlab font-semibold text-white group-hover:text-[#0066ee] transition-colors">
                          {value.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-400">
                          Explore our services
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-[#0066ee] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
