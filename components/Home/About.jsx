"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Oval } from "react-loader-spinner";
import AOS from "aos";
import "aos/dist/aos.css";

const photos = ["/frankeze.jpg"];

const professionalLinks = [
  { label: "Coderverse Technology", link: "https://coderverse.shop" },
  { label: "GitHub", link: "https://github.com/FrankezeCode" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/franklyn-ezeugonna" },
  { label: "X", link: "https://x.com/frankezecode_" },
  { label: "Medium", link: "https://medium.com/@franklynezeugonna" },
  { label: "BetterDev Community", link: "https://betterdev.live" },
];

const hackathonLinks = [
  {
    label: "Chainlink Convergence Hackathon",
    link: "https://chain.link/hack-26/projects/aquarius",
  },
  {
    label: "OG APAC Agentic Hackathon",
    link: "https://www.hackquest.io/projects/Aquarius-Protocol",
  },
  {
    label: "Colosseum Frontier Hackathon",
    link: "https://arena.colosseum.org/projects/explore/aquarius-protocol",
  },
];

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
    setTimeout(() => {
      const downloadUrl = "/frankeze.pdf";
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "Franklyn-Ezeugonna-CV.pdf";
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
              I’m a proactive, intelligent, and driven software engineer with expertise in full-stack web development, blockchain, Web3, and intelligent automation. I build software solutions that solve real-world problems, from conceptualization to deployment, with a focus on scalability, reliability, and human-centered design.
            </p>
            <p>
             Proficient in React.js, Next.js, JavaScript/TypeScript, Express, RESTful APIs, database integration, authentication and authorization, deployment, security, blockchain integration, decentralized applications, and automation systems. I also contribute to open-source projects and mentor aspiring developers, bridging local communities with global opportunities.
            </p>
            <p>
              I have strong communication skills, problem-solving abilities, and a collaborative mindset, thriving in team-based and cross-disciplinary environments.
            </p>
            <p>
              Beyond technology, I have a deep love for art, nature, philosophy, and humanity.
              These passions shape how I see the world and inspire me to build meaningful,
              human-centered solutions that connect creativity, purpose, and impact.
            </p>
          </div>

          <div
            className="grid gap-4 text-sm md:text-base"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="font-bold text-lg text-white">Professional Details</h3>
              <p className="mt-2 leading-relaxed text-[#e7e3e3]">
                Founder of Coderverse Technology, a registered technology and e-commerce business
                operating through online services and physical retail activity. I also founded
                BetterDev, a mentorship community helping over 700 young people grow in software
                development, open-source collaboration, and career readiness.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {professionalLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    className="rounded-full border border-[#41a4c8]/50 px-3 py-1 text-xs md:text-sm text-white transition hover:bg-[#41a4c8]/20"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="font-bold text-lg text-white">Technical Projects & Recognition</h3>
              <p className="mt-2 leading-relaxed text-[#e7e3e3]">
                My work includes full-stack web applications, RESTful APIs, blockchain data
                integrations, distributed systems prototypes, and community-focused mentorship. I
                have also participated in global hackathons and received recognition for leadership,
                civic service, and local innovation impact.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {hackathonLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    className="text-[#41a4c8] transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
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
