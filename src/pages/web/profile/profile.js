import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { currentUser } = useSelector(state => state.auth)
  console.log(currentUser)

  return (
    <div>
      <h1>Profile</h1>
      <p>{`Welcome back ${currentUser && currentUser.username}`}</p>
    </div>
  )
}

export default Profile
