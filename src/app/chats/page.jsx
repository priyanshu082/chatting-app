"use client"
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AllChats from '@/Components/chats/AllChats';
import Calls from '@/Components/chats/Calls';
import MessageScreen from '@/Components/chats/MessageScreen';
import SamplePage from '@/Components/chats/SamplePage';
import SideBar from '@/Components/chats/SideBar';
import Profile from '../../Components/chats/Profile';
import { SectionContext } from '@/Context/Context';

const Page = () => {
  const { section } = useContext(SectionContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users/all");
        console.log(response.data.users);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); // Call the fetchUsers function to trigger the HTTP request
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div className='shadow flex flex-row w-[97vw] h-[90vh] bg-darkBlack mx-auto mt-[3vw] rounded-[1vw] '>
      <SideBar />
      <div className={`${section === "chat" ? "flex" : "hidden"} w-[100%]`}>
        <AllChats users={users} />
        <MessageScreen />
      </div>

      <div className={`${section === "call" ? "flex" : "hidden"} w-[100%]`}>
        <Calls />
        <SamplePage />
      </div>

      <div className={`${section === "profile" ? "flex" : "hidden"} w-[100%]`}>
        <Profile />
      </div>
    </div>
  );
};

export default Page;
