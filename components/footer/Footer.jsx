import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

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
    link: "",
    icon: <SiIndeed size={25} color="#fff" className="w-6 h-6 md:w-7 md:h-7" />,
  },
];

const Footer = () => {
  return (
    <div id="contact" className="px-10 md:px-20 mt-8 bg-[#0f1624] border-t-4">
      {/* <hr className="h-1 border-0 bg-gradient-to-r from-[#8168d4] to-[#41a4c8]" /> */}
      <div className="flex flex-col md:flex-row gap-8 py-10 md:items-center justify-between leading-loose tracking-widest">
        <div className="flex flex-col max-md:items-center">
          <label className="max-sm:text-center">Call me:</label>
          <Link
            href={"tel:+2348109503737"}
            className="rounded-3xl text-sm bg-white text-black py-1 px-2 w-fit md:w-full flex gap-2 items-center hover:bg-opacity-80"
          >
            <MdCall
              size={20}
              className="animate-pulse transition duration-1000 ease-in-out"
            />
            <p>+234-810-950-3737</p>
          </Link>
        </div>
        <div className="flex flex-col max-md:items-center">
          <label className="max-sm:text-center">Email:</label>
          <Link
            href={"mailto:frankeze.dev@gmail.com"}
            className="rounded-3xl text-sm bg-white text-black py-1 px-2 w-fit md:w-full flex gap-2 items-center hover:bg-opacity-80"
          >
            <IoMdMail
              size={20}
              className="animate-pulse transition duration-1000 ease-in-out"
            />
            <p>frankeze.dev@gmail.com</p>
          </Link>
        </div>
        <div className="flex  gap-10 max-md:justify-center">
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
    </div>
  );
};

export default Footer;
