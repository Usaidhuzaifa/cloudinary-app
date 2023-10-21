import React from 'react'
import cloudinary from "cloudinary"
import FavouriteList from './favouriteList'
import { AiFillHeart } from 'react-icons/ai'

export interface MyImage {
  public_id:string,
  tags: string[]
}


const page = async () => {

 let res =( await cloudinary.v2.search
  .expression('resource_type:image AND tags=favourite')
  .sort_by('public_id','desc')
  .max_results()
  .with_field("tags")
  .execute()) as {resources:MyImage[]}

  console.log(res)
  return (
    <div className='bg-black/90 h-screen rounded-xl p-5'>
    <div className='flex justify-between'>
     <h2 className='flex items-center gap-x-2 text-2xl font-semibold text-slate-50'>
     <AiFillHeart  className=" h-7 w-7 text-red-500"/>
      Favourite
      </h2>
     
    </div>
   <FavouriteList resources={res.resources}/>
    </div>
  )
}

export default page
