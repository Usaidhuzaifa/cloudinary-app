import React from 'react'
import Upload from './Upload'
import cloudinary from "cloudinary"
import View from './View'
import { FcGallery } from 'react-icons/fc'

interface MyImage {
  public_id:string,
  tags: string[]
}


const page = async () => {

 let res =( await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('public_id','desc')
  .max_results(10)
  .with_field("tags")
  .execute()) as {resources:MyImage[]}


  return (
    <div className='px-5 py-5 bg-black/90 rounded-xl'>
    <div className='flex justify-between'>
      <div className='flex justify-center items-center gap-x-3 pl-3'>
      <FcGallery className=" h-6 w-6"/>
     <h2 className='text-xl font-semibold text-slate-50'>Gallery</h2>
      </div>
     <Upload/>
    </div>
    <div className='grid grid-cols-5 gap-3 p-4 '>
      {res.resources.map((items ,i)=>(
        <div key={i}>
          <View src={items.public_id} tag={items.tags}/>
        </div>
      ))}
    </div>
    </div>
  )
}

export default page
