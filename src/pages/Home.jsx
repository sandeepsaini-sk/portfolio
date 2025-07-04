import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import sk from "../assets/sk.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function Home() {
  const [text] = useTypewriter({
    words: ["Web Developer | UI Designer"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <>
      <div className="container mx-auto mt-16 bg-sky-100 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center p-5">
          {/* Left - Image */}
          <div className="flex justify-center">
            <img
              src={sk}
              alt="Sandeep Kumar"
              className="rounded-full shadow-sm shadow-orange-200"
            />
          </div>
          <div className="mx-5 flex-col items-center justify-center">
            <div>
              <h1 className="text-3xl font-serifd">Hi,</h1>
              <h1 className="text-4xl font-serif ">I'm Sandeep Saini </h1>
              <p className="text-2xl text-orange-600 font-bold py-5">
                {text}
                <Cursor cursorColor="orange" />
              </p>
              <p className="text-slate-800 pb-5">
                I'm a MERN Stack Developer who loves creating clean, responsive,
                and modern web applications. Passionate about frontend
                development and user experience.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-3 font-serif">
              <a
                href="/project"
                className="bg-orange-500 text-white px-4 py-2 rounded-md  hover:scale-x-110 hover:bg-orange-600 transition"
              >
                View Projects
              </a>
              <a
                href="/sandeep-kumar-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-500 px-4 py-2 rounded-md font-medium hover:bg-slate-100 transition"
              >
                Resume
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex gap-6 pt-4 text-3xl text-amber-500">
              <a href="https://github.com/your-github" target="_blank">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank">
                <FaLinkedin />
              </a>
              <a href="mailto:sandeepsaini21082003@gmail.com">
                <HiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
