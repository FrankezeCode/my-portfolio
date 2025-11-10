import Skills from "@/components/skills/Skills";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const listStack = [
  {
    title: "Html",
    proficiency: "Advanced",
    level: "80",
  },
  {
    title: "CSS, Tailwind, Sass",
    proficiency: "Advanced",
    level: "80",
  },
  {
    title: "Javascript, Typescript",
    proficiency: "Advanced",
    level: "80",
  },
  {
    title: "React",
    proficiency: "Advanced",
    level: "80",
  },
  {
    title: "Next JS",
    proficiency: "Advanced",
    level: "80",
  },
  {
    title: "React Native (Expo)",
    proficiency: "Expert",
    level: "60",
  },
  {
    title: "Node (Express)",
    proficiency: "Expert",
    level: "60",
  },
  {
    title: "Solidity",
    proficiency: "Expert",
    level: "60",
  },
];

const Technologies = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="technologies"
      className="flex flex-col gap-10 px-10 md:px-20 mt-10 md:mt-20 mb-4"
    >
      <p
        className="font-semibold text-2xl text-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        Technologies
      </p>
      <div className="flex flex-col gap-8 justify-center items-center">
        {listStack.map((stack, i) => (
          <div
            key={i}
            className="flex flex-col w-[100%] md:w-[50%]"
            // data-aos={`${i % 2 === 0 ? "fade-left" : "fade-right"}`}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="flex justify-between items-center">
              <p className="md:text-lg text-sm">{stack.title}</p>
              <p className="text-xs">{stack.proficiency}</p>
            </div>
            <div className="bg-[#162950] rounded-2xl h-3 md:h-4 w-full">
              <div
                style={{
                  width: `${stack.level}%`,
                }}
                className={`bg-gradient-to-r from-[#8168d4] to-[#41a4c8] rounded-3xl h-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* additional tech/skills */}
      <Skills />
    </div>
  );
};

export default Technologies;
