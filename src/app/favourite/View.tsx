"use client"
import { CldImage } from 'next-cloudinary'
import { useState } from 'react'
import { AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import { AddTags } from '../gallery/action'

const View = ( { src,tag ,func }:{ src:string; tag:string[] ;func:any }) => {
  const [fav , setFav] = useState(tag.includes("favourite"))
  return (
    <div className='relative'>
      <CldImage
  width="200"
  height="100"
  src={src}
  sizes="100vw"
  alt="Description of my image"
/>

<div className='absolute top-1 left-1' onClick={()=>{
  func(src)
  setFav(!fav)
  AddTags(src ,fav)}}>
{
  fav ?  (<AiFillHeart className="h-5 w-5 cursor-pointer text-red-500 duration-200"/>)
       : (<AiOutlineHeart className="h-5 w-5  text-white cursor-pointer hover:text-red-500 duration-200" />)
}

</div>
    </div>
  )
}

export default View
