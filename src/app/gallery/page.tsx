import React from 'react'
import Upload from './Upload'
import cloudinary from "cloudinary"
import View from './View'

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
    <div className='px-5 py-5 bg-slate-50/50 rounded-xl'>
    <div className='flex justify-between'>
     <h2 className='text-lg font-semibold'>Gallery</h2>
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
