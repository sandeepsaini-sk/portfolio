import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <h1 className="w-full text-center text-5xl font-serif py-2 shadow-sm bg-white">Contact Me</h1>

      <div className="container mx-auto px-5 py-10 font-serif text-center bg-sky-100 rounded-md shadow-md mt-5">
        
        <p className="text-lg text-slate-700 mb-6">
          I'm actively looking for opportunities — whether it's full-time work,
          freelance projects, or collaborations. Feel free to reach out!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 text-4xl text-orange-500 mb-6">
          <a
            href="mailto:sandeepsaini21082003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition"
            title="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-md text-slate-700 leading-8">
          <p>
            📩 <strong>Email:</strong>{" "}
            <a
              href="mailto:sandeepsaini21082003@gmail.com"
              className="text-blue-700 underline"
            >
              sandeepsaini21082003@gmail.com
            </a>
          </p>

          <p>
             📞<strong>Phone:</strong>{" "}
            <a
              href="tel:+919549341479"
              className="text-blue-700 underline"
            >
              +919549341479
            </a>
          </p>
          
        </div>

        {/* Hire Me Button */}
        <div className="mt-8">
          <a
            href="mailto:sandeepsaini21082003@gmail.com"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full text-lg transition shadow-md"
          >
         Hire Me
          </a>
        </div>
      </div>
    </>
  );
}
