import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import {
  MdConnectWithoutContact,
  MdPsychology,
  MdAccessTime,
  MdCompareArrows,
  MdGroups,
  MdLightbulbOutline,
} from "react-icons/md";


export default function Skill() {
  const backend = [
    { name: "Node.js", icon: <FaNodeJs />, level: 85 },
    { name: "MongoDB", icon: <SiMongodb />, level: 80 },
    { name: "Express", icon: <SiExpress />, level: 90 },
  ];
  const frontend = [
    { name: "HTML", icon: <FaHtml5 />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt />, level: 85 },
    { name: "Java Script", icon: <IoLogoJavascript />, level: 90 },
    { name: "React.js", icon: <FaReact />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
  ];
const softSkills = [
  {title: "Communication",icon: MdConnectWithoutContact,},
  {title: "Problem Solving",icon: MdPsychology,},
  {title: "Time Management",icon: MdAccessTime,},
  {title: "Adaptability",icon: MdCompareArrows,},
  {title: "Teamwork",icon: MdGroups,},
  {title: "Creativity",icon: MdLightbulbOutline,},
];
  return (
    <>
      {/**heading */}
      <h1 className="w-full text-center text-5xl font-serif py-2 shadow-sm bg-white">
        Skills
      </h1>
      <div className="container p-3 mx-auto mb-20">
        {/**frontend */}
        <span className="text-2xl font-serif text-orange-500 ml-10 p-2 underline">
          Frontend
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10">
          {frontend.map((skill, i) => (
            <div key={i} className="bg-white rounded-sm p-2 shadow-md">
              <div className="flex items-center gap-4 mb-2 text-xl">
                <span className="text-3xl text-orange-600">{skill.icon}</span>
                <span className="font-serif">{skill.name}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1 text-right text-gray-600">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
        {/**backend */}
        <span className="text-2xl font-serif text-blue-700 ml-10 p-2 underline">
          Backend
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10">
          {backend.map((skill, i) => (
            <div key={i} className="bg-white rounded-sm p-2 shadow-md">
              <div className="flex items-center gap-4 mb-2 text-xl ">
                <span className="text-3xl text-blue-600">{skill.icon}</span>
                <span className="font-serif">{skill.name}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1 text-right text-gray-600">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>

        {/**soft skills */}
        <span className="text-2xl font-serif text-teal-700 ml-10 p-2 underline">
          Soft-Skill
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10">
          {softSkills.map((skill, i) => (
            <div key={i} className="bg-white rounded-sm p-5 shadow-md hover:scale-105 duration-300 hover:shadow-teal-400 font-serif flex gap-5 items-center">
              {<skill.icon className=" text-green-600 text-3xl"/>}
              <span className="text-slate-700 text-xl">{skill.title}</span>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
