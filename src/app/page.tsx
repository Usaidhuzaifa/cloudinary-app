"use client"
import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type UploadImage={
  info:{
    public_id: string;
  };
  event:"success",

}



export default function Home() {
  const [imageId,setImageId]=useState("qoqjpvickojcjccqz4lo")
  return (
    <main className='pl-3 '>
   <div className='border rounded-2xl shadow-md flex flex-col justify-between items-center'>
   
      <CldUploadButton 
      onUpload={(result)=>{
        let res = result as UploadImage 
        setImageId(res.info.public_id)
    }
    } uploadPreset='gd8t5khb' />

     {imageId && 
      (
      <CldImage
  width="200"
  height="100"
  src={imageId}
  sizes="100vw"
  alt="Description of my image"
/>)
}

   </div>

    </main>
  )
}
