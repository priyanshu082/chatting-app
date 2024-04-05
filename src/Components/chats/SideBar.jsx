'use client'
import React from 'react'
import Link from 'next/link'
import { IoCallOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useContext } from 'react';
import { SectionContext } from '../../Context/Context';

const SideBar = () => {

  const {section,setSection}=useContext(SectionContext)

  return (
    <div className='flex flex-col w-[3%] items-center h-full m-[1vw] gap-[1.5vw] '>
       <Link 
       onClick={()=>setSection("chat")}
       href='/' className='w-fit rounded-[0.5vw] p-[0.5vw] hover:bg-gray-700 transition-all ease-in-out duration-500 text-[2vw] hover:scale-110 '>
        <IoArrowBack/>
       </Link>

       <div 
       onClick={()=>setSection("chat")}
       className='w-fit rounded-[0.5vw] p-[0.5vw] hover:bg-gray-700 transition-all ease-in-out duration-500 text-[1.75vw]  '>
        <FiMessageSquare/>
       </div>

       <div 
       onClick={()=>setSection("call")}
       className='w-fit rounded-[0.5vw] p-[0.5vw] hover:bg-gray-700 transition-all ease-in-out duration-500 text-[1.75vw]  '>
        <IoCallOutline/>
       </div>

       <div 
       onClick={()=>setSection("profile")}
       className='w-fit rounded-[0.5vw] p-[0.5vw] hover:bg-gray-700 transition-all ease-in-out duration-500 text-[1.75vw]  '>
        <CgProfile/>
       </div>
    </div>
  )
}

export default SideBar