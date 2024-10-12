import React from 'react'

'use client'

import '../Home/Home.css'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
import Footer from '../Footer/Footer'

export default function ContactPage() {
  const [popupMessage, setPopupMessage] = useState(''); // State for pop-up

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form); // Get form data

    try {
      const response = await fetch('https://formsubmit.co/a84d049ca72b7c3fce8bf1ce8b7d8911', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setPopupMessage('Email sent successfully!');
        form.reset(); // Clear form after successful submission
      } else {
        setPopupMessage('Failed to send the email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setPopupMessage('An error occurred. Please try again.');
    }

    // Automatically hide the pop-up after 3 seconds
    setTimeout(() => setPopupMessage(''), 5000);
  };

  return (
    <>

    <div className="min-h-[80vh] relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 ">

    <div className="mx-auto max-w-screen-lg px-2 sm:px-6 lg:px-28">
  <div className="relative flex h-16 items-center justify-between">
    
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex flex-shrink-0 items-center">
        <span className="text-white text-lg font-medium">
          <a href='/'>  
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512">
              <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64" />
              <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20" />
            </svg>
          </a>
        </span> {/* Modified part */}
      </div>
    </div>

    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" />
  </div>
</div>


      <div className='absolute inset-0 -z-10 h-full w-full object-cover object-top md:object-top bgimg-3'></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-transparent to-black h-full w-full pointer-events-none"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black h-full w-full pointer-events-none"></div>

      
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">Contact Me</h2>
        <p className="mt-2 text-lg leading-8 text-gray-400">
        You can fill in the from below, or simply send a mail to ogbemiaaron@gmail.com .
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <input type="hidden" name="_captcha" value="false"/>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="company" className="text-left block text-sm font-semibold leading-6 text-gray-400">
              Full Name
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="text-left block text-sm font-semibold leading-6 text-gray-400">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="text-left block text-sm font-semibold leading-6 text-gray-400">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-slate-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus:outline-none outline-none hover:outline-none  border-none"
          >
            Send
          </button>
        </div>
      </form>

      {popupMessage && (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          {popupMessage}
        </div>
      )}
    </div>
    <Footer/>
    </>
  )
}
