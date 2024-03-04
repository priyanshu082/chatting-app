import React from 'react'

const UserProfile = ({params}) => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
        profile paage
        <div className='mt-[20px]'>
            profile of : <span className='p-[10px] bg-orange-500'>{params.id}</span>
        </div>
    </div>
  )
}

export default UserProfile