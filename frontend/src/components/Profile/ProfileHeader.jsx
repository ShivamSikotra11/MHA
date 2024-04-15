import React from 'react'
import { usePostContext } from '../../store/PostContext';

const ProfileHeader = () => {
  const { curUser, getNameAcronym } = usePostContext();
  return (
    <div className='flex  items-center gap-x-[5rem] '>
      <div className="p-photo w-[10rem] h-[10rem] rounded-full bg-white flex justify-center items-center text-6xl font-semibold border-2 border-primary_dark">{getNameAcronym(curUser.name)}</div>
      <div className="flex-col  ">
        <p className="font-inter font-bold text-5xl capitalize mb-[1rem] " >{curUser.name}</p>
        <p className='font-inter font-bold text-4xl' >Rajkot,Guarat</p>

      </div>

    </div>
  )
}

export default ProfileHeader