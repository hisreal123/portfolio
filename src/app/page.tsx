'use client';
import SocialIcons from 'components/SocialIcons';
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react'


// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })

const arrowDown = <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#74868B" d="m12 15l-5-5h10Z" /></svg>


export default function Home() {

  const [showSocial, setShowSocial] = useState(false);


  return (
    <div className="wrapper h-full relative flex flex-col justify-center items-center">
      <div className=" w-10/12 mx-auto  -translate-y-24">
        <div className=' my-10 md:flex  md:space-x-2 '>
          <h2 className='text-md font-medium md:text-xl lg:text-2xl'>
            Welcome !
          </h2>
          <span className='hidden md:inline-flex'>____________________________</span>
        </div>

        <h2 className='text-6xl w-1/2 font-bold mb-10  lg:text-8xl lg:w-fit '>I’m
          Omos
          George </h2>

        <div className="desc"><p className='text-xs text-[#74868B] mb-10 md:mb-4 md:text-md md:w-[50%]'>I’m a Web & App FrontEnd devel­op­er from Lagos, Nigeria</p></div>

        <li className=' text-white mb-2 py-1 px-3 bg-[#2C3CBF] list-none text-sm rounded-full w-fit md:hidden '>
          <Link href='/'>HIREM ME </Link>
        </li>

        <div className="social flex items-center ">
          <p className='text-[#74868B] text-sm '>Social Link</p>
          <p onClick={() => { setShowSocial(!showSocial) }} >
            {arrowDown}
          </p>
        </div>

        {/* showing social Icons */}

        <SocialIcons style={`${showSocial ? "visible" : " hidden"} flex w-fit relative space-x-3`} />

      </div>
    </div >
  )
}
