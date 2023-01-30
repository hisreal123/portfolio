import React from 'react'

export default function page() {
    return (
        <div className='h-screen bg-[#f7f7f7] px-10 pt-10 lg:w-3/5 lg:mx-auto'>
            <h2 className='font-bold  text-xl  mb-10  lg:text-2xl'>Get in touch </h2>
            <div className="form">
                <form action="#" method="post" className='flex flex-col space-y-5'>
                    <input className='bg-[#D9D9D9] focus:outline-[#2C3CBF] py-2 px-2 text-[#74868B]' type="text" name="name" id="name" placeholder='Name'  />
                    <input className='bg-[#D9D9D9] focus:outline-[#2C3CBF] py-2 px-2 text-[#74868B]' type="email" name="email" id="email" placeholder='Email' />
                    <textarea className='bg-[#D9D9D9] focus:outline-[#2C3CBF] py-2 px-2 text-[#74868B]' rows={10} placeholder="Leave a message .... " />
                    <button type="submit" className="font-bold mt-5 bg-[#2C3CBF] px-2 py-1 text-white w-fit">
                        SEND
                    </button>
                </form>
            </div>
        </div>
    )
}
