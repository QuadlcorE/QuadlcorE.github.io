import React from 'react'
import { DataStrings } from '@/utils/constants'

const navigation = [
    // { name: 'Projects', href: '/projects' target: ""},
    { name: 'Resume', current: false, href: DataStrings.resume, target: "_blank" },
]

export default function Navbar() {
  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-lemon'>
        <div className='relative flex h-16 items-center justify-between'>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-end'>
                <div className='sm:ml-6 sm:block'>
                    <div className='flex space-x-4'>
                        {navigation.map((item) => (
                            <a 
                                key={item.name} 
                                href={item.href} 
                                target={item.target} 
                                className="text-white hover:text-[#E84545] hover:scale-110"
                                // className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                >
                                {item.name}
                                </a>
                                ))}
                    </div>
                </div>

            </div>

        </div>
        
    </div>
  )
}