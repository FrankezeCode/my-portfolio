"use client";
import React, { useEffect } from "react";
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="hero" className="w-full h-[30rem] md:h-[40rem] mt-16 md:pt-10">
      <div className='bg-[url("/bg-pay.jpg")] bg-no-repeat object-cover bg-cover flex flex-col justify-center w-full h-full'>
       <div className="flex justify-center">
        <div className="flex flex-col justify-center gap-1 md:gap-3 p-6 px-10 md:px-20 md:w-[50%]">
          <div class="flex flex-wrap justify-center gap-12"
           data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="1000"
          >
            <div class="relative">
              <img class="h-32 w-32 rounded-full ring-2 ring-blue-500/40 shadow-md max-md:h-24 max-md:w-24"
                src="../frankeze.jpg"
                alt="userImage1" />
              <div class="absolute -top-1 -right-1 flex items-center justify-center h-9 w-9 bg-blue-500 rounded-full max-md:h-7 max-md:w-7">
                <p class="text-white text-xs">10x</p>
              </div>
            </div>
          </div>
          <p
            className="font-semibold text-lg md:text-3xl text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Hello, I am Franklyn Ezeugonna.
          </p>
          <p
            className="md:font-semibold font-medium text-sm md:text-lg text-[#bcbcbc] text-center"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            An Expert in Frontend and Backend Web Development. Welcome to my world.
          </p>
          <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-[#8168d4] to-[#41a4c8] rounded-3xl p-1 md:p-2 w-40 animate-bounce transition duration-1000 ease-in-out mt-4 cursor-pointer text-center hover:opacity-80"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Let's begin
            </ScrollLink>
          </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
