import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';


export default function Projects() {
 const data=[
  {
    image:`/project1.png`,
    title:"Balaji Mart",
    description: 'A modern ecommerce grocery web app with React and Firebase.',
    tech: ['MERN Stack , ', 'Tailwind CSS'],
    code:"Code",
    demo:"http://balajimart.netlify.app"
  },
  {
      image: `/portfolio.png`,
      title: "Personal Portfolio",
      description: "My personal portfolio to showcase my skills, projects, and contact details.",
      tech: ["React", "Tailwind CSS"],
      code: "Code",
      demo: "https://portfolioskp.netlify.app"
    },
    {
      image: `/todo.png`,
      title: "To-Do List App",
      description: "A responsive to-do list web app to add, delete and mark tasks.",
      tech: ["React", "Tailwind CSS", "LocalStorage"],
      code: "Code",
      demo: "https://todolistsub.netlify.app"
    },
    {
      image: `/skclub.png`,
      title: "SK Club Landing Page",
      description: "A modern landing page UI for a club, fully responsive and attractive.",
      tech: ["HTML", "CSS", "JavaScript"],
      code: "Code",
      demo: "https://skclube.netlify.app"
    }
 ]

  return (
    <>
      <div className="text-5xl font-serif text-center p-2 shadow-sm">
        Projects Page
      </div>
      <div className='container mx-auto pb-10 mt-5 mb-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
              {data.map((e,i)=>(
                <div key={i} className='shadow-md p-5 hover:shadow-cyan-400 transition duration-300 rounded-lg bg-white'>
                    <img src={e.image} alt={e.title} className="w-full object-cover rounded-md mb-3"/>
                    <h1 className='text-2xl font-serif py-2 font-semibold'>{e.title}</h1>
                    <span className='font-serif'>{e.tech}</span>
                    <p className='text-sm text-slate-800 pb-6'>{e.description}</p>
                    <div className='flex gap-5 items-center font-serif text-slate-800'>
                      <span className='border border-slate-600 px-5 py-1 rounded-md bg-teal-400 hover:bg-teal-500'>{e.code}</span>
                      <a href={e.demo} target="_blank" rel="noopener noreferrer" className='bg-orange-400 px-4 py-1 rounded-md flex gap-3 items-center hover:bg-orange-500 '> <FaExternalLinkAlt />Live Demo</a>
                    </div>
                </div>
              ))}
          </div>
      </div>
    </>
  );
}
