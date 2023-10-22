import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"
import {SearchIcon} from  "lucide-react"

const Navbar = () => {
  return (
    
      
<nav className="max-w-screen-xl m-auto shadow-md   shadow-slate-900  bg-black/90 rounded-full mt-3">
  <div className=" flex flex-wrap items-center justify-between mx-auto p-3">

  <Link href="/" className="flex items-center text-slate-100">
      {/* <Image src="" width={50} height={50} className="h-8 w-8 mr-3" alt="Flowbite Logo" /> */}
<svg width="50" height="50" viewBox="0 0 174 175" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="rounded-full mr-2">
<rect width="174" height="175.006" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_5_2" transform="matrix(0.00852356 0 0 0.00847458 -0.1691 0)"/>
</pattern>
<image id="image0_5_2" width="157" height="118" xlinkHref="data:image/jpeg;base64,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"/>
</defs>
</svg>

      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Photo Gallery</span>
  </Link>
  {/*------------------- small screen ---------------------------- */}
  <div className="flex md:order-2">
  
    <div className="relative hidden md:block">
      <SearchIcon className="absolute top-2 left-2"/>
      <input type="text" className="block w-full p-2 pl-10 text-sm rounded-full text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..."/>
    </div>
    
    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>

  {/*--------------------- large screen  ------------------------------*/}

    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      
      <div className="relative mt-3  md:hidden">
      
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" className="block w-full p-2 pl-10 text-sm mr-4  text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..."/>
     
      </div>

      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
        <li>
          <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:hover:text-blue-400 md:p-0">Home</Link>
        </li>
        <li>
          <Link href="/about" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0">About</Link>
        </li>
        <li>
          <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0">Services</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
