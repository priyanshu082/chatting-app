'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const LoginPage = () => {

   const [user,setUser] = useState({
    email:"",
    password:"",
   })

   const onLogIn= async()=>{

   }

  return (

      <div className='flex flex-col '>
        <p>LogIn</p> 

        <label htmlFor='email'>email</label>
        <input
        id='email'
        type='text'
        value={user.email}
        onChange={(e)=>{setUser({...user,email:e.target.value})}}
        placeholder='email'
        className='text-black'
        />


        <label htmlFor='password' >password</label>
        <input
        id='password'
        type='password'
        value={user.password}
        onChange={(e)=>{setUser({...user,password:e.target.value})}}
        placeholder='password'
        className='text-black'
        />

        <button
        onClick={onLogIn}
        className='bg-white mt-[20px] w-[100px] text-black'
        >Login Here</button>

<Link href='/signup'>go to signup</Link>
      </div>
  
  )
}

export default LoginPage