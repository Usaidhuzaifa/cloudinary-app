import cloudinary from 'cloudinary'
import AlbumList from './AlbumList'
import { AiFillFolder } from 'react-icons/ai'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { Link } from 'lucide-react'



export interface folderType{
    name:string, 
    path: string
}

const Page = async () => {
  const {folders} = (await cloudinary.v2.api.root_folders()) as { folders : folderType[]}
 
  return (
    <div className='bg-black/90 h-screen rounded-xl'>
    <div className='px-3 py-4 '>
       <h2 className='flex items-center text-2xl gap-x-2 font-semibold tracking-tight text-slate-100'>
     
       <AiFillFolder className=" h-8 w-8 text-yellow-300" />
         Photo Album
         </h2> 
        
    </div>    
    <div className='grid grid-cols-2 space-y-2 px-3 py-3 '>
        {
            folders.map((items,i)=>(
                <div key={i}>
                         <AlbumList folder={items}/>

                </div>

            ))
        }
    </div>
    </div>
)
}

export default Page
