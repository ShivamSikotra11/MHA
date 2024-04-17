import React, { useEffect } from 'react'
import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileDetails from '../components/Profile/ProfileDetails'
import ProfileGraphs from '../components/Profile/ProfileGraphs'
import ProfilePosts from '../components/Profile/ProfilePosts'
import Toast from '../components/Toast'
import Toast2 from '../components/Toast2'
import { useMainContext } from '../store/MainContext'
import Loader from "../components/Loader"
const Profile = () => {
  const { isuserProfileUpdating } = useMainContext();
  return (
    isuserProfileUpdating ? (
      <div className=' h-[90vh] flex justify-center items-center ' >
        <Loader width='65px' />
    </div>
    ) : (
      <div className="p-[4rem] bg-primary_elight space-y-[5rem]">
        <Toast2 />
        <ProfileHeader />
        <ProfileDetails />
        <ProfileGraphs />
        <ProfilePosts />
      </div>
    )
  );
}

export default Profile