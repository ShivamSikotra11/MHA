import React, { memo, useEffect } from 'react'
import { usePostContext } from '../../store/PostContext';
import { useMainContext } from '../../store/MainContext';

const ProfileHeader = () => {
  const { curUser, getNameAcronym ,getUserName } = usePostContext();
  const { isuserProfileUpdating } = useMainContext();
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    const userData = JSON.parse(storedUserData);
    getUserName(userData);
  }, [isuserProfileUpdating]);
  return (
    <div className='flex  items-center gap-x-[5rem] max-[585px]:flex-col max-[585px]:justify-center space-y-4 '>
      <div className="p-photo w-[10rem] h-[10rem] rounded-full bg-white flex justify-center items-center text-6xl font-semibold border-2 border-primary_dark">{getNameAcronym(curUser.name)}</div>
      <div className="flex-col  ">
        <p className="font-inter font-bold text-5xl capitalize mb-[1rem]  max-[440px]:text-4xl  max-[440px]:text-center" >{curUser.name}</p>
        <p className='font-inter font-bold text-4xl  max-[585px]:text-center' >{curUser.city}</p>

      </div>

    </div>
  )
}

export default ProfileHeader