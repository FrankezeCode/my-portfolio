"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { listProjects } from "@/data/projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewCarousel = () => {
  const slides = listProjects;

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full">
        <Slider {...settings}>
          {slides.map((proj, i) => (
            <div
              key={i}
              className={`border-2 border-[#656a72] rounded-tl-3xl rounded-tr-sm rounded-bl-sm rounded-br-3xl mb-2 md:mb-0 flex-shrink-0 flex-auto w-full h-96 md:h-[26rem]`}
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

                <div className="flex flex-col gap-2">
                  <p className="md:text-sm text-xs text-[#cdcccc]">
                    {proj.description}
                  </p>
                  <Link
                    target="_blank"
                    href={proj.link}
                    className="bg-gradient-to-r from-[#8168d4] to-[#41a4c8] rounded-3xl p-1 w-32 md:w-40 cursor-pointer text-center text-sm hover:animate-pulse"
                  >
                    Look it up
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default NewCarousel;
