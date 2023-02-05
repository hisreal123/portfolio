'use client'
import Link from 'next/link'
import React, { useState } from 'react'


const menu = <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#2C3CBF" d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" /></svg>
const close = <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#2C3CBF" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z" /></svg>


export default function Header() {
    const [toogle, setToogle] = useState(false)
    return (
        <>
            <div className='relative w-full bg-[#D9D9D9] shadow-[#2C3CBF]-500 '>
                <div className="relative md:w-4/5 md:mx-auto ">
                    <nav className='relative w-full h-[74px] '>
                        <ul className='flex flex-col relative h-full  justify-between md:flex-row md:justify-between md:min-w-screen '>
                            <div className="mobile-nav flex  justify-between items-center relative min-h-[74px] px-5 md:inline-flex md:items-center ">

                                <li className='font-bold text-xl'>
                                    <Link href='/'>George</Link>
                                </li>

                                <li className={`block md:hidden`} onClick={() => { setToogle(!toogle) }}>
                                    {!toogle ? (menu) : (close)}
                                </li>
                            </div>

                            <div className="  hidden relative left  md:inline-flex md:space-x-5 items-center ">
                                <li className='hover:bg-[#D9D9D9] px-2' >
                                    <Link href='/About'>About</Link>
                                </li>
                                <li className='hover:bg-[#D9D9D9] px-2' >
                                    <Link href='/Contact'>Contact</Link>
                                </li>
                                <li className='hover:bg-[#D9D9D9] px-2' >
                                    <Link href='/Portfolio'>Portfolio</Link>
                                </li>
                                <li className=' text-white py-1 px-2 bg-[#2C3CBF] hidden md:block md:px-4 hover:bg-[#1a2ba8] rounded-full '>
                                    <Link href='/'>HIREM ME </Link>
                                </li>
                            </div>

                            {toogle ?
                                (
                                    <div className=" shadow-md z-10 bg-white  relative left  w-screen  md:hidden ">
                                        <li className=' w-full py-4 hover:bg-[#D9D9D9] px-3 font-medium ' onClick={() => { setToogle(!toogle) }}>
                                            <Link href='/About'>About</Link>
                                        </li>
                                        <li className='w-full py-4 hover:bg-[#D9D9D9] px-3 font-medium ' onClick={() => { setToogle(!toogle) }}>
                                            <Link href='/Contact'>Contact</Link>
                                        </li>
                                        <li className='w-full py-4 hover:bg-[#D9D9D9] px-3 font-medium ' onClick={() => { setToogle(!toogle) }}>
                                            <Link href='/Portfolio'>Portfolio</Link>
                                        </li>

                                        <li className='w-full text-white py-4 hover:bg-[#2C3CBF] hidden'>
                                            <Link href='/'>HIREM ME </Link>
                                        </li>
                                    </div>

                                ) : (
                                    ' '
                                )}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
