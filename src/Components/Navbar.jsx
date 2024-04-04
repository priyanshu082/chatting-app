import React from 'react'
import Image from 'next/image'
import logo from "../../public/Navbar/logo.svg"

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center text-whiteText py-[1vw] font-poppins'>

        <div className='flex flex-row justify-center items-center'>
        <Image src={logo} className='w-[4.5vw] '/>
        <div className='text-[1.75vw] mt-[6px] font-bold'>
            PiChat
        </div>
        </div>
        

        <div className='flex flex-row gap-[2vw]  text-[1.2vw]'>
            <div>
                Home
            </div>
            <div>
                Contact
            </div>
        </div>
    </div>
  )
}

export default Navbar