
import Image from 'next/image'
import gallery1 from '/public/gallery-1.png'
import gallery2 from '/public/gallery-2.png'
import gallery3 from '/public/gallery-3.png'
import gallery4 from '/public/gallery-4.png'

const galleryImage=[
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
  // const [imageId,setImageId]=useState("qoqjpvickojcjccqz4lo")
  return (
   <main className='pl-5 rounded-xl h-full bg-black/30'>
   <div className='flex items-center justify-center py-20 '>
   
   <div className='flex-1 max-w-md '>
   
   <blockquote className="mt-6 border-l-2 pl-6 text-5xl font-semibold italic text-slate-800">
   Photography captures moments in time, each image a unique story waiting to be told.
   </blockquote>
   
   </div>

   <div className='flex-1'>
   <div className='flex  pl-5 space-x-5 '>
    {
        galleryImage.map((items,i)=>(
                <div key={i}>
                    <Image 
                    src={items.img} 
                    alt="Gallery"
                    
                    className='h-72 w-20 rounded-full hover:w-64 duration-500  hover:rounded-3xl  '
                    />
                </div>
        ))
    }
    </div>
   
</div>

   </div>

    </main>
  )
}
