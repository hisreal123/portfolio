
import Link from 'next/link'
import React from 'react'
import { Profile, Tools, Read } from '../../../AboutList'


export default function page() {
    return (
        <div className='bg-[#f7f7f7] px-10 pt-10 lg:w-3/5 lg:mx-auto'>
            <h2 className='font-bold  text-xl  mb-10  lg:text-2xl'>I love to offer the very best of my effort
                for your project ideals</h2>

            {/* profile section */}
            <div className="cat">
                <div className="profile">
                    <h2 className='font-bold text-lg lg:text-xl'>Profile</h2>
                    {Profile.map(item => {
                        return (
                            <div className=" relative " key={item.id} >
                                <div className=" wrap flex flex-row relative items-center space-x-2  ">
                                    <div className=" relative dot rounded-full h-2 w-2 bg-[#2C3CBF]"> </div>
                                    <h3 className='cat-list my-5 font-bold text-[#1E1C1C]'>{item.subTitle} </h3>
                                </div>
                                <div className="px-4 text-sm " >
                                    <p className=' text-[#74868B]'>{item.desc}</p>
                                    <Link href={item.link}>
                                        <p className='mt-5  bg-[#2C3CBF] px-2 py-1 text-white w-fit'>
                                            READ
                                        </p>
                                    </Link >
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="Tech Tools mt-10 ">

                    <h2 className='font-bold text-lg lg:text-xl -mb-2'>Tech Tools</h2>
                    {Tools.map(item => {
                        return (
                            <div className=" relative " key={item.id} >
                                <div className=" wrap flex flex-row relative items-center space-x-2  ">
                                    <div className=" relative dot rounded-full h-2 w-2 bg-[#2C3CBF]"> </div>
                                    <h3 className='cat-list my-5 font-bold text-[#1E1C1C]'>{item.subTitle} </h3>
                                </div>
                                <div className="px-4 text-sm " >
                                    <p className='text-[#74868B] '>{item.desc}</p>
                                    <Link href={item.link}>
                                        <p className='mt-5  bg-[#2C3CBF] px-2 py-1 text-white w-fit'>
                                            READ
                                        </p>
                                    </Link >
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* Read and Interest */}
                <div className="Read mt-10 pb-20">

                    <h2 className='  font-bold text-lg lg:text-xl -mb-2'>Read and interest </h2>
                    {Read.map(item => {
                        return (
                            <div className=" relative " key={item.id} >
                                <div className=" wrap flex flex-row relative items-center space-x-2  ">
                                    <div className=" relative dot rounded-full h-2 w-2 bg-[#2C3CBF]"> </div>
                                    <h3 className='cat-list my-5 font-bold text-[#1E1C1C]'>{item.subTitle} </h3>
                                </div>
                                <div className="px-4 text-sm " >
                                    <p className=' text-[#74868B]'>{item.desc}</p>
                                    <Link href={item.link}>
                                        <p className='mt-5  bg-[#2C3CBF] px-2 py-1 text-white w-fit'>
                                            READ
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}
