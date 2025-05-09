"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Oval } from "react-loader-spinner";
import AOS from "aos";
import "aos/dist/aos.css";

const photos = ["/d.svg", "/b.svg", "/c.svg"];

const About = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    setLoad(true);
    // Assuming your CV file is located in the public directory
    setTimeout(() => {
      const downloadUrl = "/file/frankeze.pdf";
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "frankeze.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoad(false);
    }, 1500);
  };

  return (
    <div
      id="about"
      className="flex flex-col gap-6 px-8 md:px-20 mt-8 my-4 w-full"
    >
      <p
        className="font-semibold text-2xl text-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        {/* About Me */}
      </p>

      <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:h-fit justify-between">
        <div
          className="w-full md:w-[30%] flex justify-center"
          // data-aos="fade-left"
          // data-aos-easing="linear"
          // data-aos-duration="1000"
        >
          <Image
            src={photos[currentPhotoIndex]}
            // src={"/hotelbar.jpg"}
            alt="My photo"
            width={1000}
            height={1000}
            className="rounded-md w-[20rem] md:w-[25rem] md:h-[25rem] h-[20rem] md:flex-1 object-contain "
          />
        </div>

        <div className="md:w-[60%] w-full flex flex-col gap-3 md:gap-5 md:flex-shrink">
          <p
            className="font-bold text-2xl md:text-3xl max-md:text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            A little more about Frank
          </p>
          <div
            className="text-sm md:text-base leading-relaxed md:leading-loose tracking-wider md:tracking-widest text-[#e7e3e3] flex flex-col gap-4 md:gap-5"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p>
              {" "}
              I’m a proactive, intelligent, and driven software engineer with expertise in both frontend and backend web development. I have built software solutions for real-world business use cases, from conceptualization to deployment.
            </p>
            <p>
            Proficient in React.js, Next.js, JavaScript/TypeScript, Express, building RESTful APIs, database integration, authentication and authorization, deployment, security, integration of third-party APIs such as payment gateways, and more.
            </p>
            <p>
              I have great communication skills, problem solving, decision
              making and a team player.
            </p>
          </div>

          {/* cv */}
          <div
            className="flex flex-col items-center md:items-end gap-1 leading-relaxed md:leading-loose tracking-wider md:tracking-widest"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <label htmlFor="" className="font-bold md:text-lg text-center">
              My Resume:
            </label>
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-3 rounded-2xl text-sm md:text-base font-semibold bg-white text-black py-1 md:py-1.5 px-3 md:px-4 hover:bg-opacity-80"
            >
              {load ? (
                <div className="flex items-center justify-center gap-3">
                  <Oval
                    height={25}
                    width={25}
                    color="#000"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#000"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                  <p>Downloading...</p>
                </div>
              ) : (
                <>
                  <IoCloudDownloadOutline
                    size={25}
                    className="animate-bounce transition duration-1000 ease-in-out"
                  />
                  <p>Download CV Here</p>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
