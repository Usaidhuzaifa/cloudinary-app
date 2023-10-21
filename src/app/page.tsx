import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Image from 'next/image'
import gallery1 from '/public/gallery-1.png'
import gallery2 from '/public/gallery-2.png'
import gallery3 from '/public/gallery-3.png'
import gallery4 from '/public/gallery-4.png'
import CarouselSlider from '@/components/shared/CorouselSLider';

const Slides=[
  {
      img:gallery1
  },
  {
      img:gallery2
  },
  {
      img:gallery3
  },
  {
      img:gallery4
  }
]



export default function Home() {
 
  return (
   <main className='pl-5 rounded-xl h-full bg-black/90'>
   <div className='flex items-center justify-center '>
   
   <div className='flex-1 max-w-md '>
   
   <blockquote className="mt-6 border-l-2 pl-6 text-5xl font-semibold italic text-slate-100">
   Photography captures moments in time, each image a unique story waiting to be told.
   </blockquote>
   
   </div>

   <div className='flex-1'>
    <CarouselSlider/>
   </div>

   </div>

    </main>
  )
}
