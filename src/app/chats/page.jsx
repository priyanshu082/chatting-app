'use client'
import AllChats from '@/Components/chats/AllChats'
import MessageScreen from '@/Components/chats/MessageScreen'
import SideBar from '@/Components/chats/SideBar'
import React from 'react'

const page = () => {
  return (
    <div className='shadow flex flex-row w-[97vw] h-[90vh] bg-darkBlack mx-auto mt-[3vw] rounded-[1vw] '>
        <SideBar/>
        <AllChats/>
        <MessageScreen/>
    </div>
  )
}

export default page