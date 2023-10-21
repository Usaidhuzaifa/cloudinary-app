import Link from 'next/link'
import React from 'react'
import {GalleryThumbnailsIcon} from "lucide-react"
import { FcAbout, FcGallery, FcServices } from "react-icons/fc"

import { Button } from '../ui/button'
import { AiFillFolder, AiFillHeart, AiFillHome } from 'react-icons/ai'
const Sidebar = () => {
  return (
    <div className='w-56 h-full rounded-2xl  shadow-md shadow-slate-300 relative bg-black/90 '>
   {/* <button
    data-drawer-target="separator-sidebar"
    data-drawer-toggle="separator-sidebar"
    aria-controls="separator-sidebar"
    type="button"
    className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span className="sr-only">Open sidebar</span>
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      />
    </svg>
  </button> */}
  
    <div className='p-2 space-y-1 sticky top-0'>

      <ul className="space-y-2 font-medium">
        <li>
          <Link
            href="#"
            className="flex items-center p-2  rounded-lg text-gray-50 hover:bg-gray-100 hover:text-slate-700"
          >
            <svg
              className="w-5 h-5 transition duration-75 text-rose-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            <span className="ml-3">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center p-2  rounded-lg text-gray-50 hover:bg-gray-100 hover:text-slate-700"
          >
           <AiFillHome className=" h-5 w-5 text-green-500" />
            <span className="flex-1 ml-3 whitespace-nowrap">Home</span>

          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className="flex items-center p-2  rounded-lg text-gray-50 hover:bg-gray-100 hover:text-slate-700"
          >
            <FcGallery className=" h-5 w-5"/>
            <span className="flex-1 ml-3 whitespace-nowrap">Gallery</span>
            
          </Link>
        </li>
        <li>
          <Link
            href="/album"
            className="flex items-center p-2  rounded-lg text-gray-50 hover:bg-gray-100 hover:text-slate-700"
          >
             <AiFillFolder className=" h-5 w-5 text-yellow-300" />
            <span className="flex-1 ml-3 whitespace-nowrap">Photo Album</span>
          </Link>
        </li>
        <li>
          <Link
            href="/favourite"
            className="flex items-center p-2  rounded-lg text-gray-50 hover:bg-gray-100 hover:text-slate-700"
          >
             <AiFillHeart  className=" h-5 w-5 text-red-500"/>
            <span className="flex-1 ml-3 whitespace-nowrap">Favourite</span>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="flex items-center p-2  rounded-lg text-gray-50 hover:bg-gray-100 hover:text-slate-700"
          >
            <FcAbout className=" h-5 w-5 "/>
            <span className="flex-1 ml-3 whitespace-nowrap">About</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center p-2  rounded-lg text-gray-50 hover:bg-gray-100 hover:text-slate-700"
          >
            <FcServices/>
            <span className="flex-1 ml-3 whitespace-nowrap">Services</span>
          </Link>
        </li>
      </ul>
      <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
        <li>
          <Link
            href="#"
            className="flex items-center p-2  rounded-lg text-gray-50 hover:bg-gray-100 hover:text-slate-700"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 17 20"
            >
              <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />
            </svg>
            <span className="ml-4">Upgrade to Pro</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center p-2  rounded-lg text-gray-50 hover:bg-gray-100 hover:text-slate-700"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
            </svg>
            <span className="ml-3">Documentation</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center p-2  rounded-lg text-gray-50 hover:bg-gray-100 hover:text-slate-700"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
              <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
            </svg>
            <span className="ml-3">Components</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center p-2  rounded-lg text-gray-50 hover:bg-gray-100 hover:text-slate-700"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 21"
            >
              <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z" />
            </svg>
            <span className="ml-3">Help</span>
          </Link>
        </li>
      </ul>
    </div>
  
  


      
    </div>
  )
}

export default Sidebar
