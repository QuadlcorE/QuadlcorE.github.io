import React from 'react'

function More() {
  return (
    <div className='container-inner glassy mx-auto max-w-7xl mb-24'>
        <div className='md:px-40 md:pb-16'>
            <h2 className='text-3xl py-10 font-bold tracking-tight text-indigo-100 sm:text-4xl'>
                Are you ready to kickstart your project with a touch of magic?
            </h2>
            <p className='pb-3'> Reach out and let's make it happen✨. I'm available for part-time opportunities to push the boundaries of design and deliver exceptional work. </p>
            <a href="/contact" rel="noopener noreferrer">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group border-2 border-transparent transition-all duration-300 bg-slate-600 hover:bg-transparent hover:border-slate-600 text-white hover:text-white">
                    <h2 class="text-2xl py-1 px-3">Let's Talk</h2>
                </button>
            </a>


            <p className='pt-4'>
                If you're Interested in my illustrations and art feel free to check them out here.
            </p>
            <a className='inline-block pt-3' href='https://www.instagram.com/vlynart/' target='_blank'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="2em" 
                    height="2em" 
                    className='icons'
                    viewBox="0 0 24 24">
                    <path fill="white" d="M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8" />
                </svg>
            </a>
        </div>
    </div>
  )
}

export default More