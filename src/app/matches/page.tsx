import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Matches() {
  return (
    <div className='w-full h-full bg-[#382e3c] relative flex align-middle justify-center place-content-center place-items-center'>
      <Link href='/' className='absolute left-8 top-10'>
        <Image src='/back.svg' width={50} height={50} alt='back' />
      </Link>
      <div>
        <h1 className='text-white text-4xl font-medium'>Your Matches</h1>
        <div>
          {/* cards */}
          <div>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Matches
