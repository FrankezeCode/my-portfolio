import React from "react";

const listSkills = [
  "Git",
  "Github",
  "Gitlab",
  "Rest API",
  "Firebase",
  "MongoDB",
  "Tailwind",
  "Vercel",
  "Jwt",
  "Bcryptjs",
  "MySQL",
  "Postman",
  "Teamwork",
   "Curiosity",
  "Foundry",
  "Hardhat",
  "ether.js",
  "web3.js",
  "Alchemy",
  "Slither",
  "Chainlink",
];

const Skills = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 mb-4">
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center">
          <p className="font-semibold text-2xl text-center mb-12">
            Additional technologies and soft skills
          </p>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-full md:w-[50%] gap-4 md:gap-20 md:mx-10 ">
              {listSkills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-white rounded-full flex-shrink-0" />
                  <p className="md:whitespace-nowrap ">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
