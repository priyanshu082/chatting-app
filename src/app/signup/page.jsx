'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const SignUpPage = () => {

   const [user,setUser] = useState({
    email:"",
    password:"",
    username:""
   })

   const onSignUp= async()=>{

   }

  return (

      <div className='flex flex-col '>
        <p>SignUp</p> 

        <label htmlFor='username' >Username</label>
        <input
        id='username'
        type='text'
        value={user.username}
        onChange={(e)=>{setUser({...user,username:e.target.value})}}
        placeholder='username'
        className='text-black'
        />


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
        onClick={onSignUp}
        className='bg-white mt-[20px] w-[100px] text-black'
        >Signup Here</button>

        <Link href='/login'>go to login</Link>
      </div>
      
  
  )
}

export default SignUpPage