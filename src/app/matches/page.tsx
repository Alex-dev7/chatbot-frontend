"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { lawyerData } from '@/data/slides'
import { Navigation, Pagination } from 'swiper/modules'
import { useState } from 'react'



 function Matches() {
const [data, setData] = useState(lawyerData)



  return (
    <div className='w-full h-full bg-[#382e3c] relative flex align-middle justify-center place-content-center place-items-center'>
      <Link href='/' className='absolute left-8 top-10'>
        <Image src='/back.svg' width={50} height={50} alt='back' />
      </Link>
      <div>
        <h1 className='text-white text-4xl font-medium'>Your Matches</h1>
        <div className='container'>
          <Swiper
          navigation
          pagination={{ type: 'fraction'}}
          modules={[Navigation, Pagination]}
          className='bg-[#382e3c] mt-10 w-fit h-fit' 
          >
            {data.map((lawyer, index) => (
              <SwiperSlide key={lawyer.id}>
                <div className='w-80 h-96 bg-white bg-opacity-30 rounded-2xl flex flex-col justify-center place-items-center'>
                  <Image src={lawyer.image} width={80} height={80} alt='lawyer' />
                  <h3 className='text-white text-2xl font-medium'>{lawyer.name}</h3>

                </div>
              </SwiperSlide>
            ))}
            <div>
              <button></button>
              <button></button>
            </div>
          </Swiper>
        </div>

      </div>
      
    </div>
  )
}

export default Matches
