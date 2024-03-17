'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'


const SignUpPage = () => {
  const router=useRouter()

   const [user,setUser] = useState({
    email:"",
    password:"",
    username:""
   })

   const [loading ,setLoading] = useState(false)

   const onSignUp= async()=>{
      try {
        
      setLoading(true);

      const response=await axios.post("/api/users/signup",user)

      console.log(response.data.message)
      alert("user ban gya")

      router.push("/login")

      } catch (error) {
        console.log("user pehle se hai" , error.message)
        alert("user pehle se hai login krle jaakr ")
      } finally{
        setLoading(false)
      }
   }

  return (

      <div className='flex flex-col p-[200px]'>
        <p>{loading ? "loading" : "signup"}</p> 

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