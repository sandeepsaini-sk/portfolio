import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-3 mt-10">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
        
        {/* Name / Branding */}
        <div className="text-xl font-bold">
          © 2025 <span className="text-orange-400">Sandeep Saini</span>
        </div>
         
         <div className="flex gap-4">
  {/* Call Button */}
  <a
    href="tel:+919549341479"
    className="bg-green-500 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-green-600 transition"
  >
    📞 Call
  </a>

  {/* Mail Button */}
  <a
    href="mailto:sandeepsaini21082003@gmail.com"
    className="bg-blue-500 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 transition"
  >
    📩 Mail
  </a>
</div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mt-4 md:mt-0 text-orange-400">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="mailto:sandeepsaini21082003@gmail.com" className="hover:text-white">
            <HiOutlineMail />
          </a>
        </div>
      </div>
      
    </footer>
  );
}
