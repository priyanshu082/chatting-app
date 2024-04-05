import React from 'react'
import SearchBar from './SearchBar'
import ChatCard from './ChatCard'


const AllChats = () => {
  return (
    <div className='w-[33%] flex flex-col gap-[1vw] items-center  pt-[1vw] overflow-y-scroll'>
        {/* <SearchBar/> */}
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
    </div>
  )
}

export default AllChats