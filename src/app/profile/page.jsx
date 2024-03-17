'use client'
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

const Profile = () => {

  const router =useRouter()
  const logout = async () => {
    try {
        await axios.get('/api/users/logout')
        toast.success('Logout Succesful')
        router.push('/login')
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      profile paage
      <button onClick={logout} className="p-[30px] bg-green-500">
        logout
      </button>
    </div>
  );
};

export default Profile;
