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
  .max_results(30)
  .with_field("tags")
  .execute()) as {resources:MyImage[]}


    const MAX_COLUMN = 4
    function getColumns(colIndex :number){
    return res.resources.filter((resource,idx) =>{
        return idx % MAX_COLUMN === colIndex
    })
    }

  return (
    <div className='px-5 py-5 h-full bg-black/90 rounded-xl'>
    <div className='flex justify-between'>
      <div className='flex justify-center items-center gap-x-3 pl-3'>
      <FcGallery className=" h-6 w-6"/>
     <h2 className='text-xl font-semibold text-slate-50'>Gallery</h2>
      </div>
     <Upload/>
    </div>
    <div className='grid grid-cols-4 gap-3 pt-3 '>
      {[
        getColumns(0),
        getColumns(1),
        getColumns(2),
        getColumns(3),
      ].map((column,idx)=>(
        <div key={idx}
        className='flex flex-col gap-4'>
            {column.map((items ,i)=>(
        <div key={i} className='w-full' >
          <div>
          <View src={items.public_id} tag={items.tags}/>
          </div>
       
        </div>
      ))}

        </div>
      ))}
      
    </div>
    </div>
  )
}

export default page
