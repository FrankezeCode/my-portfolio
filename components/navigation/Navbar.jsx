"use client";
import React, { useEffect, useRef, useState } from "react";
import { SiGamedeveloper } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
import Link from "next/link";
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const heads = [
  {
    link: "https://github.com/FrankezeCode",
    icon: <FaGithub size={25} color="#fff" className="w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    link: "https://www.linkedin.com/in/franklyn-ezeugonna",
    icon: (
      <FaLinkedin size={25} color="#fff" className="w-6 h-6 md:w-7 md:h-7" />
    ),
  },
  {
    link: " ",
    icon: <SiIndeed size={25} color="#fff" className="w-6 h-6 md:w-7 md:h-7" />,
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="lg:flex items-center justify-between w-full py-6 md:pb-5 md:pt-6 px-10 text-xl hidden fixed bg-[#0f1624] z-50">
        <div className="flex items-center gap-3 cursor-pointer hover:font-semibold">
          <SiGamedeveloper />
          {/* <ScrollLink
            activeClass="active"
            to={"hero"}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          > */}
          <Link href={"/"}>Portfolio</Link>
          {/* </ScrollLink> */}
        </div>

        <ul className="flex items-center gap-3 md:gap-6">
          <li className="cursor-pointer font-semibold transition-transform duration-300 transform hover:-translate-y-1">
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="cursor-pointer font-semibold transition-transform duration-300 transform hover:-translate-y-1">
            <ScrollLink
              activeClass="active"
              to="technologies"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Technologies
            </ScrollLink>
          </li>
          <li className="cursor-pointer font-semibold transition-transform duration-300 transform hover:-translate-y-1">
            <ScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </ScrollLink>
          </li>
          <li className="cursor-pointer font-semibold transition-transform duration-300 transform hover:-translate-y-1">
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact Me
            </ScrollLink>
          </li>
        </ul>

        <div className="flex items-center gap-8">
          {heads.map((dt, i) => (
            <Link
              key={i}
              target="_blank"
              href={dt.link}
              className="transition-transform duration-300 transform hover:-translate-y-1"
            >
              {dt.icon}
            </Link>
          ))}
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:flex lg:hidden items-start justify-between w-full text-base py-4 px-5 fixed bg-[#0f1624] z-50">
        <div className="flex items-center gap-1.5">
          <SiGamedeveloper />
          <ScrollLink
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Portfolio
          </ScrollLink>
        </div>

        <div
          onClick={() => setMobileMenu(true)}
          className={mobileMenu ? `hidden` : `block`}
        >
          <FiMenu size={25} />
        </div>
        {mobileMenu && (
          <div
            ref={menuRef}
            className="border border-white rounded-lg flex flex-col overflow-hidden w-[50%] absolute right-3 bg-[#0f1624]"
          >
            <FaRegWindowClose
              onClick={() => setMobileMenu(false)}
              size={25}
              className="self-end mr-1"
            />
            <div className="flex flex-col items-center gap-6 p-2">
              <div className="flex flex-col items-center gap-6">
                <ScrollLink
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="border-b"
                >
                  Projects
                </ScrollLink>

                <ScrollLink
                  activeClass="active"
                  to="technologies"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="border-b"
                >
                  Technologies
                </ScrollLink>

                <ScrollLink
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="border-b"
                >
                  About
                </ScrollLink>

                <ScrollLink
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="border-b"
                >
                  Contact Me
                </ScrollLink>
              </div>

              <div className="flex items-center gap-3 pb-2">
                {heads.map((dt, i) => (
                  <Link key={i} target="_blank" href={dt.link}>
                    {dt.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
