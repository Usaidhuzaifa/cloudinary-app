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
  .max_results()
  .with_field("tags")
  .execute()) as {resources:MyImage[]}

  console.log(res)
  return (
    <div>
    <div className='flex justify-between'>
     <h2 className='text-lg font-semibold'>Gallery</h2>
     <Upload/>
    </div>
    <div className='grid grid-cols-4 gap-4 p-4 '>
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
