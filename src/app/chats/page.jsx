'use client'
import AllChats from '@/Components/chats/AllChats'
import Calls from '@/Components/chats/Calls'
import MessageScreen from '@/Components/chats/MessageScreen'
import SamplePage from '@/Components/chats/SamplePage'
import SideBar from '@/Components/chats/SideBar'
import React, { useContext}from 'react'
import { SectionContext,SectionProvider } from '@/Context/Context'
import Profile from '../../Components/chats/Profile'

const page = () => {

 const {section,setSection}=useContext(SectionContext)
 

  return (
    <div className='shadow flex flex-row w-[97vw] h-[90vh] bg-darkBlack mx-auto mt-[3vw] rounded-[1vw] '>
        <SideBar/>
     
        <div className={`${section=== "chat" ? "flex" : "hidden"} w-[100%]`}>
        <AllChats/>
        <MessageScreen/>
        </div>

        <div className={`${section==="call" ? "flex" : "hidden"} w-[100%]`}>
        <Calls/>
        <SamplePage/>
        </div>

        <div  className={`${section==="profile" ? "flex" : "hidden"} w-[100%]`}>
          <Profile/>
        </div>
    </div>
  )
}

export default page