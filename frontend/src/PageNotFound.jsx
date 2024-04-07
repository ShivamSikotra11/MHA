import React from 'react'

const PageNotFound = () => {
  return (
    <div class="text-center border h-[100vh] w-[100vw] flex justify-center items-center">
    <div>
      <h1 class="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p class="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>

      <p class="mt-4 text-gray-600">Let's get you back <a href="/" class="text-blue-500">home</a>.</p>
    </div>
  </div>
  )
}

export default PageNotFound