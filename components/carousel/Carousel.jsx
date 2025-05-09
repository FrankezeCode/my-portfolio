"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { listProjects } from "@/data/projects";
import { FaCode } from "react-icons/fa6";

const Carousel = ({ autoSlideInterval = 3000 }) => {
  const slides = listProjects;
  const [curr, setCurr] = useState(0);
  const [numVisibleSlides, setNumVisibleSlides] = useState(1);
  // const [autoSlide] = useState(true);

  // useEffect(() => {
  //   if (!autoSlide) return;
  //   const slideInterval = setInterval(next, autoSlideInterval);
  //   return () => clearInterval(slideInterval);
  // }, [autoSlide]);

  useEffect(() => {
    const updateNumVisibleSlides = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setNumVisibleSlides(3); // Show 4 slides on desktop
      } else if (screenWidth >= 768) {
        setNumVisibleSlides(2); // Show 3 slides on tablet
      } else {
        setNumVisibleSlides(1); // Show 1 slide on mobile
      }
    };

    updateNumVisibleSlides();
    
    window.addEventListener("resize", updateNumVisibleSlides);

    return () => {
      window.removeEventListener("resize", updateNumVisibleSlides);
    };
  }, []);

  const prev = () => {
    const maxIndex = slides.length - numVisibleSlides;
    setCurr((curr) => (curr === 0 ? maxIndex : curr - 1));
  };

  const next = () => {
    const maxIndex = slides.length - numVisibleSlides;
    setCurr((curr) => (curr >= maxIndex ? 0 : curr + 1));
  };

  const dots = Array.from({ length: slides.length - numVisibleSlides + 1 });

  return (
    <>
      <div className="w-full">
        <div
          className="flex items-center md:gap-6 transition-transform ease-out duration-500"
          style={{
            transform: `translateX(-${(100 / numVisibleSlides) * curr}%)`,
          }}
        >
          {slides.map((proj, i) => (
            <div
              key={i}
              className={`border-2 border-[#656a72] rounded-tl-3xl rounded-tr-sm rounded-bl-sm rounded-br-3xl mb-2 md:mb-0 flex-shrink-0 flex-auto w-full md:w-96 h-96 md:h-auto lg:h-[26rem] overflow-y-auto`}
              data-aos={`${i % 2 === 0 ? "fade-left" : "fade-right"}`}
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="p-3 md:p-4 flex flex-col gap-2">
                <div className="rounded-md md:w-fit">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={500}
                    height={500}
                    className="w-full rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-0.5 items-center">
                  <p>{proj.title}</p>
                  <div className="h-0.5 w-[50%] bg-gradient-to-r from-[#8168d4] to-[#41a4c8]" />
                </div>

                <div className="flex flex-col gap-2 mt-1">
                  <p className="md:text-sm text-xs text-[#cdcccc]">
                    {proj.description}
                  </p>
                  <div className="flex justify-between items-center w-full mt-2">
                    <Link
                      target="_blank"
                      href={proj.link}
                      className="bg-gradient-to-r from-[#8168d4] to-[#41a4c8] rounded-3xl p-1 w-32 md:w-40 cursor-pointer text-center text-sm hover:animate-pulse"
                    >
                      Look it up
                    </Link>
                    <div className="w-8 h-8 rounded-full bg-[#1a2233]  shadow-lg  shadow-[#00000040]  flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#1a2438]">
                      <Link
                        target="_blank"
                        href={proj.github}
                        className="text-[#cdcccc] text-lg "
                      >
                        <FaCode />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-0 left-0 top-[50%] md:top-[40%] bottom-[50%] flex items-center justify-between p-1 px-2 md:p-4">
          <button
            onClick={prev}
            // style={{ boxShadow: "0px 0px 15px 2px #ccc" }}
            className="p-1 rounded-full shadow bg-white/50 text-gray-800 hover:bg-white w-6 h-6 md:w-8 md:h-8 flex items-center justify-center"
          >
            <FaAngleLeft className="md:w-6 md:h-6" />
          </button>
          <button
            onClick={next}
            // style={{ boxShadow: "0px 0px 15px 2px #ccc" }}
            className="p-1 rounded-full shadow bg-white/50 text-gray-800 hover:bg-white w-6 h-6 md:w-8 md:h-8 flex items-center justify-center"
          >
            <FaAngleRight className="md:w-6 md:h-6" />
          </button>
        </div>

        {/* indicators */}
        <div className="md:mt-4 py-1">
          <div className="flex items-center justify-center gap-2">
            {dots.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-1.5 h-1.5 rounded-full bg-white ${
                  i === curr ? "p-0.5" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
