import React from 'react'
import cloudinary from "cloudinary"
import FavouriteList from './favouriteList'

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
    <div>
    <div className='flex justify-between'>
     <h2 className='text-lg font-semibold'>Favourite</h2>
     
    </div>
   <FavouriteList resources={res.resources}/>
    </div>
  )
}

export default page
