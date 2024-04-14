import React from 'react'
import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileDetails from '../components/Profile/ProfileDetails'
import ProfileGraphs from '../components/Profile/ProfileGraphs'
import ProfilePosts from '../components/Profile/ProfilePosts'

const Profile = () => {
  return (
    <div className="p-[4rem] bg-primary_elight space-y-[5rem] " >
      <ProfileHeader/>
      <ProfileDetails/>
      <ProfileGraphs/>
      <ProfilePosts/>
    </div>
  )
}

export default Profile