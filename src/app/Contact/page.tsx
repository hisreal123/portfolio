'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showSent, setShowSent] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useRef<HTMLFormElement | string>();

    const SendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm("service_u0ivftb", "template_6qfgyht", form.current, 'z3FWViMOWQXLBzr18')
            .then((result) => {
                setShowSent(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='h-screen bg-[#f7f7f7] px-10 pt-10 lg:w-3/5 lg:mx-auto'>

            {showSent ? (
                <div className="sent bg-[#2C3CBF] py-3 px-4  flex justify-between absolute top-1 right-0 left-0   ">
                    <h3 className='text-white font-bold text-xl '> Thanks, Email Sent !!!</h3>
                    <p className='cursor-pointer hover:scale-200' onClick={() => { setShowSent(false) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#f5f5f5" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z" /></svg>
                    </p>
                </div>
            ) : ' '}



            <h2 className='font-bold  text-xl  mb-10  lg:text-2xl'>Get in touch </h2>
            <div className="form">
                <form ref={form} onSubmit={SendEmail} className='flex flex-col space-y-5'>
                    <input className='bg-[#D9D9D9] focus:outline-[#2C3CBF] py-2 px-2 text-[#74868B]' type="text" name="user_name" placeholder='Name' />
                    <input className='bg-[#D9D9D9] focus:outline-[#2C3CBF] py-2 px-2 text-[#74868B]' type="email" name="user_email" placeholder='Email' />
                    <textarea className='bg-[#D9D9D9] focus:outline-[#2C3CBF] py-2 px-2 text-[#74868B]' rows={10} name='message' placeholder="Leave a message .... " />
                    <button type="submit" className="font-bold mt-5 bg-[#2C3CBF] px-2 py-1 text-white w-fit">
                        SEND
                    </button>
                </form>
            </div>
        </div>
    )
}
