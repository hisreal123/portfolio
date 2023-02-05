import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='h-screen w-screen flex items-center justify-center flex-col'>
            <h1 className='font-bold text-2xl'> Working on this ... </h1>
            <Link href="/Contact" className='text-white bg-[#2C3CBF] px-4 py-2 mt-3 hover:bg-white hover:text-[#2C3CBF] hover:shadow-md-[#2C3CBF] '>
                Contact Me
            </Link>
        </div>
    )
}
