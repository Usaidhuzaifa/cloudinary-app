"use client"
import { CldImage } from 'next-cloudinary'
import { useState } from 'react'
import { AiOutlineHeart,AiFillHeart,AiFillFolderAdd} from "react-icons/ai"
import { AddTags } from './action'
import AlbumDialog from './albumDialog'

const View = ( { src,tag }:{ src:string; tag:string[] }) => {
  const [fav , setFav] = useState(tag.includes("favourite"))
  return (
    <div className='relative '>
      <CldImage
  width="200"
  height="100"
  src={src}
  sizes="100vw"
  alt="Description of my image"
/>

<div className='absolute top-1 left-1' onClick={()=>{
  setFav(!fav)
  AddTags(src ,fav)}}>
{
  fav ?  (<AiFillHeart className="h-5 w-5 cursor-pointer text-red-500 duration-200"/>)
       : (<AiOutlineHeart className="h-5 w-5  text-white cursor-pointer hover:text-red-500 duration-200" />)
}

</div>
<div className='absolute bottom-1 left-1'>
<AlbumDialog imageData={src}/>
</div>
    </div>
  )
}

export default View
