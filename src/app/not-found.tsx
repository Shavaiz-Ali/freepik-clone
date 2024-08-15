import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-y-8 bg-black text-white'>
        <h3 className=' text-xl xl:text-6xl lg:text-5xl sm:text-3xl font-medium lg:font-bold sm:font-semibold'>404 Page Not Found</h3>
        <div className="">
            <Link href={"/"} className='px-6 py-3 text-white ring-2  rounded-sm'>Back To Home</Link>
        </div>
    </div>
  )
}

export default NotFound
