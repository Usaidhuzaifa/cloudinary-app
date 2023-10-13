"use client"
import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type UploadImage={
  info:{
    public_id: string;
  };
  event:"success",

}



const Upload = () => {
  // const notify = () => toast("Image is Upload");
  const router= useRouter()
  return (
    
    <Button asChild > 
    <div className='gap-1 items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
    </svg>
    

    <CldUploadButton 
      onUpload={(result)=>{
        let res = result as UploadImage 
        setTimeout(()=>{
            router.refresh()
        },1000)
    }
    } uploadPreset='gd8t5khb' />
    </div>
    </Button>  
  )
}

export default Upload
