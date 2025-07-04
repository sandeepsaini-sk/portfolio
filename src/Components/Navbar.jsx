import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";

export default function Navbar() {
    const[menu,setmenu]=useState(false);
    const data = [
    { path: "/", title: "Home" },
    { path: "/skill", title: "Skill" },
    { path: "/project", title: "Projects" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" }
  ];
    
  return (
    <>
    <div className='bg-slate-600 py-3 shadow-md'>
        <div className='container mx-auto px-5 flex justify-between items-center'>

            {/**logo */}
            <Link to={"/"} className='text-3xl font-bold text-white'>
               Port<span className='text-red-700'>folio</span>
            </Link>
            {/**nav items */}
              <div className='relative'>
                {/**destop items */}
                <ul className='md:flex gap-10 items-center text-xl text-white hidden'>
                   {data.map((e,i)=>(
                    <li key={i} >
                       <Link to={e.path} className='shadow-md px-3 hover:shadow-teal-400 rounded-sm hover:text-orange-400 duration-200 p-1'>{e.title}</Link>
                    </li>
                   ))}
                </ul>
                {/**mobile items */}
                <div onClick={()=>setmenu(!menu)} className='text-3xl font-extrabold shadow-sm shadow-teal-400 cursor-pointer md:hidden hover:text-orange-400'>
                 {menu?<MdOutlineClose/>:<MdOutlineMenu/>}
                </div>
                {menu?
                  <ul className='md:hidden absolute -right-5 top-10 bg-slate-800 p-6 rounded-sm font-extrabold text-white text-xl z-50 '>
                   {data.map((e,i)=>(
                    <li key={i} className= 'shadow-md px-3 hover:shadow-teal-400 rounded-sm hover:text-orange-400 duration-200 mt-4 bg-slate-700 p-1'>
                       <Link to={e.path} onClick={() => setmenu(false)} >{e.title}</Link>
                    </li>
                   ))}
                </ul>:""}
              </div>
        </div>

    </div>
    </>
  )
}
