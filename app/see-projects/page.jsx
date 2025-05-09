"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiGamedeveloper } from "react-icons/si";
import Footer from "@/components/footer/Footer";
import { FaCode } from "react-icons/fa6";

const listProjects = [
  {
    image: "/projects/Eatopia.PNG",
    title: "Eatopia E-commerce",
    description:
      "This is a fullstack MERN (MongoDB, Express.js, React, Node.js) eCommerce web application that offers a rich online marketplace for food, fruits, vegetables, wine, and bakery products. It allows sellers to manage products and users to browse, add to cart, and place orders using cash on delivery or secure online payment through Stripe.",
    link: "https://eatopia-frontend.vercel.app/",
    github: "https://github.com/FrankezeCode/eatopia-fullstack"
  },
  {
    image: "/projects/cardly.PNG",
    title: "Cardly GiftCard",
    description:
      "A fully responsive landing page of a GiftCard website from Figma Design, built and styled in 6 days with Next Js and TailwindCSS. Used GSAP library for animations.",
    link: "https://cardly-sigma.vercel.app/",
    github: "https://github.com/FrankezeCode/Cardly"
  },
  {
    image: "/projects/contrackr.PNG",
    title: "Cointrackr",
    description:
      "A responsive crypto price aggregator website that fetches real-time data from the CoinGecko API. Built with React.js and styled using Tailwind CSS, it includes a Firebase backend with full user authentication and route protection.",
    link: "https://cointrackr-khaki.vercel.app/",
    github: "https://github.com/FrankezeCode/Cointrackr"
  },
  {
    image: "/projects/quicktask.PNG",
    title: "QuickTask",
    description:
      "This app is called QuickTask. It functions as a project management tool that allows users to access a dashboard where they can create multiple projects. Each project can be viewed individually, and a series of tasks can be created with due dates, assigned to users, and monitored for progress.",
    link: "https://quick-task-topaz.vercel.app/",
    github: "https://github.com/FrankezeCode/QuickTask"
  },
  {
    image: "/projects/codeai.PNG",
    title: "Coderverse AI",
    description:
      "A full-featured AI tool for generating images, videos, and text using OpenAI and Replicate APIs. Built with TypeScript, Clerk, Prisma, Tailwind CSS, and Radix UI, it offers a secure and responsive user experience.",
    link: "https://coderverseai.vercel.app/",
    github: "https://github.com/FrankezeCode/coderverse-ai"
  },
  {
    image: "/projects/virtualR.PNG",
    title: "VirtualR",
    description:
      "A fully responsive landing page for a virtual reality website, built from a Figma design in 6 days using React.js and Tailwind CSS. The project features clean component structure, mobile-first design, and smooth UI implementation.",
    link: "https://virtual-r-landing-page-swart.vercel.app/",
    github: "https://github.com/FrankezeCode/VirtualR-Landing-page"
  }, 
];

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="flex min-h-screen flex-col overflow-hidden">
        <div className="lg:flex items-center justify-between w-full py-6 md:pb-5 md:pt-6 px-5 md:px-10 text-xl fixed bg-[#0f1624] z-50">
          <div className="flex items-center gap-3 cursor-pointer hover:font-semibold">
            <SiGamedeveloper />
            <Link href={"/"}>Portfolio</Link>
          </div>
        </div>
        <div
          id="projects"
          className="flex flex-col gap-6 px-10 md:px-20 mt-24 md:mt-28 my-4"
        >
          <p
            className="font-semibold text-2xl"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Projects
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 w-full">
            {listProjects.map((proj, i) => (
              <div
                key={i}
                className="border-2 border-[#656a72] rounded-tl-3xl rounded-tr-sm rounded-bl-sm rounded-br-3xl md:w-[38%]"
                data-aos={`${i % 2 === 0 ? "fade-left" : "fade-right"}`}
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div className="p-3 md:p-4 flex flex-col gap-2">
                  {/* image */}
                  <div className="rounded-md md:w-fit">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      width={500}
                      height={500}
                      className="w-full rounded-md"
                    />
                  </div>
                  {/* title */}
                  <div className="flex flex-col gap-2 items-center">
                    <p>{proj.title}</p>
                    <div className="h-0.5 w-[50%] bg-gradient-to-r from-[#8168d4] to-[#41a4c8]" />
                  </div>
                  {/* desc */}
                  <div className="flex flex-col gap-2 mt-1">
                    <p className="text-sm text-[#cdcccc]">{proj.description}</p>
                    <div className="flex justify-between items-center w-full mt-2">
                      <Link
                        target="_blank"
                        href={proj.link}
                        className="bg-gradient-to-r from-[#8168d4] to-[#41a4c8] rounded-3xl p-1 md:p-2 w-32 md:w-40 cursor-pointer text-center text-sm md:text-base hover:animate-pulse"
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
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
