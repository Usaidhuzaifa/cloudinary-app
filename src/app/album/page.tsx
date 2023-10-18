import cloudinary from 'cloudinary'
import AlbumList from './AlbumList'



export interface folderType{
    name:string, 
    path: string
}

const Page = async () => {
  const {folders} = (await cloudinary.v2.api.root_folders()) as { folders : folderType[]}
 
  return (
    <div>
    <div className='px-3 py-4'>
       <h2 className='text-3xl font-semibold tracking-tight '> Photo Album</h2> 
        
    </div>    
    <div className='grid grid-cols-3 space-x-5 px-3 py-3'>
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
