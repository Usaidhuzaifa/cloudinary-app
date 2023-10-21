import React from 'react'
import { FcAbout } from 'react-icons/fc'

const page = () => {
  return (
    <div className='p-5 rounded-xl h-full bg-black/90 text-slate-100 space-y-5'>
      <div>
        <h1 className='flex gap-x-3 items-center text-xl font-bold'>
        <FcAbout className=" h-7 w-7 "/>
          About
          </h1>
        <p className='text-4xl font-bold m-20'>Welcome to CloudGem, your go-to destination for all your photo management and sharing needs</p>
      </div>
      <div>
        <h2 className='text-lg font-bold'>Our Story</h2>
        <p className='font-semibold text-sm'>At CloudGem, we believe that every photo is a precious gem, capturing moments and memories that are meant to be cherished forever. Our journey began with a simple idea: to create a seamless and beautiful platform where you can store, organize, and share your photos effortlessly.</p>
      </div>
      <div>
        <h1 className='text-lg font-bold '>Our Mission</h1>
        <p className='font-semibold text-sm'>Our mission is to empower you to preserve and share your memories in a way that is both convenient and elegant. We understand the significance of your photos and the joy they bring to your life, and we are committed to providing you with the best tools to manage them with care.</p>
      </div>
      {/* <div>
        <h1>About CloudGem</h1>
        <p>Welcome to CloudGem, your go-to destination for all your photo management and sharing needs.</p>
      </div> */}
      
    </div>
  )
}

export default page
