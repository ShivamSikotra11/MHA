import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div class="text-center  h-[90vh] w-[100vw] flex justify-center items-center">
      <div>
      <div class="text-[16rem] font-semibold text-red-500 ">404</div>
      <p class="mb-4 text-[5rem] text-gray-600">Oops! Looks like you're lost.</p>

        <p class="mt-4 text-[3rem] text-gray-600">Let's get you back    <NavLink to="/" className="text-blue-500">home</NavLink>.</p>
    </div>
  </div>
  )
}

export default PageNotFound