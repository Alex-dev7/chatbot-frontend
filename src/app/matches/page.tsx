"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { lawyerData } from '@/data/slides'

import { useState } from 'react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards' 
import 'swiper/css/effect-creative'

import { Navigation, Pagination, EffectCards, EffectCreative } from 'swiper/modules'

 function Matches() {
const [data, setData] = useState(lawyerData)



  return (
    <div className='w-[430px] h-[932px] bg-[#382e3c] relative flex align-middle justify-center place-content-center place-items-center'>
      <Link href='/' className='absolute left-8 top-10'>
        <Image src='/back.svg' width={50} height={50} alt='back' />
      </Link>
      <div>
        <h1 className='text-white text-4xl font-medium'>Your Matches</h1>
        <div className='container flex flex-col justify-center place-tems-center'>
          <Swiper
          effect={'creative'}
          grabCursor={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-150%', 0, -900],
            },
            next: {
              shadow: true,
              translate: ['150%', 0, -900],
            },
          }}
          // pagination={{ type: 'fraction'}}
          modules={[ EffectCreative]}
          className='bg-[#382e3c] mt-10 w-96 h-[400px] ' 
          >
            {data.map((lawyer, index) => (
              <SwiperSlide key={lawyer.id} >
                <div className='w-80 h-full bg-white  rounded-2xl'>
                  <Image src={lawyer.image} width={80} height={80} alt='lawyer' />
                  <h3 className='text-white text-2xl font-medium'>{lawyer.name}</h3>
                  <div>
                    <button></button>
                    <button></button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
      
    </div>
  )
}

export default Matches
