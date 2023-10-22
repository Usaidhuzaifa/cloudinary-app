import React from 'react'

import cloudinary from "cloudinary"
import View from './View'
import Link from 'next/link'
import { BsArrowLeftCircle } from 'react-icons/bs'

interface MyImage {
  public_id:string,
  tags: string[]
}


const page = async ( {params}:{params:{pictures:string}}) => {
  console.log(params)
 let res =( await cloudinary.v2.search
  .expression(`resource_type:image  AND folder=${params.pictures}`)
  .sort_by('public_id','desc')
  .max_results(10)
  .with_field("tags")
  .execute()) as {resources:MyImage[]}

  console.log(res)
  return (
    <div className='px-5 py-3 h-screen bg-black/90 rounded-xl'>
    <div className='flex justify-between'>
     <h2 className='flex items-center gap-x-2  text-lg font-semibold text-slate-100'>
     <Link href={"/album"}><BsArrowLeftCircle className={"h-6 w-6"}/></Link>
      {`Album-Name: ${params.pictures}`}</h2>
    
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
