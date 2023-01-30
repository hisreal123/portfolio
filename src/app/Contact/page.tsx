'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function page() {
    const form = useRef();


    const SendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_u0ivftb", "template_6qfgyht", form.current, 'z3FWViMOWQXLBzr18')
            .then((result) => {
                console.log(result.text);
                alert('sent message !!!')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='h-screen bg-[#f7f7f7] px-10 pt-10 lg:w-3/5 lg:mx-auto'>
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
