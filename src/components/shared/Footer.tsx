import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="max-w-screen-xl m-auto rounded-lg shadow mb-2 bg-black/90">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-50 sm:text-center dark:text-gray-400">© 2023 <Link href="#" className="hover:underline">CloudGem™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-50 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
        </li>
        <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
        </li>
        {/* <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">Licensing</Link>
        </li> */}
        <li>
            <Link href="#" className="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>
  )
}

export default Footer
