'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'



export default function Infos({closed}:any) {


    const items = [
        {
            title: 'Salary and Bonuses',
            text: "In basketball contracts, your earnings aren't just your base salary. They often include performance bonuses for reaching specific milestones and appearance fees for participating in events or games. It's important to understand the structure of these bonuses – how and when they are paid out, and what conditions need to be met. This knowledge is crucial for accurately assessing your total potential earnings.",
           
            
        },
        {
            title: 'Duration and Extension',
            text: "The length of your basketball contract and the conditions under which it can be extended are key elements to understand. Some contracts may offer automatic extensions based on performance, while others might require renegotiation. Being clear about these terms helps you plan your career trajectory and secure stability.",

         
        },
        {
            title: 'Injury Clauses',
            text: "Injury clauses in your contract are critical, especially in a sport like basketball where injuries are common. These clauses outline what happens to your contract and salary if you're injured – whether the contract is paused, altered, or remains unchanged. Knowing these details ensures you're financially and contractually protected in case of injury. You also want to ensure you add the specific clause to get second opinion. ",
          
         
        }
      ] 

//   const duration: number = 5000
  const itemsRef = useRef<HTMLDivElement>(null)
//   const frame = useRef<number>(0)
//   const firstFrameTime = useRef(performance.now())
  const [active, setActive] = useState<number>(0)
//   const [progress, setProgress] = useState<number>(0)


  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement) itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <div className="w-full h-full flex flex-col  place-items-center absolute bg-inherit">
       
      {/* Item image */}
      <div className="hello h-[70%]  transition-all duration-150 delay-300 ease-in-out " >
        <div className="relative flex flex-col" ref={itemsRef}>

          {items.map((item, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-300 absolute"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              beforeEnter={() => heightFix()}
            >
              <div className='w-96 h-fit  py-10 px-6 flex flex-col space-y-5 text-pretty bg-neutral-50 rounded-2xl border border-zinc-500'
              onClick={() => { setActive(index + 1 < 3 ? index + 1 : 0) }}
              >     
                    <button className='absolute top-5 right-5 underline' onClick={closed}>
                      <Image width={23} height={23} src='/Frame.svg' alt="#" className=" hover:size-6 transition-all cursor-pointer" />
                    </button>
                    <Image width={50} height={50} src='/Info.png' alt='info icon' />
                    <h1 className='w-96 h-12 text-gray-900 text-4xl  '>Did you know?</h1>
                    <h3 className='text-lg font-semibold'>{item.title}</h3>
                    <p className='font-light text-zinc-500 leading-7'>{item.text}</p>
                    <Link href="#" className='font-light text-zinc-500 italic' >Learn more about {item.title} ^</Link>
                </div>
            </Transition>
          ))}

        </div>

      </div>
      {/* Buttons */}
      <div className="w-fit  mx-auto mb-10 grid grid-cols-3  gap-3  absolute bottom-20">

        {items.map((item, index ) => (
          <button
            key={index}
            className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-purple-500 group"
            onClick={() => { setActive(index) }}
          >
            <span className={` text-center flex flex-col items-center ${active === index ? '' : 'opacity-30 group-hover:opacity-100 group-focus:opacity-100 transition-opacity'}`}>
              <span className=" mx-auto flex items-center justify-center relative w-9 h-9 rounded-full bg-purple-500 mb-2">
                {/* <span className='w-fit mx-auto'></span> */}
              </span>
            </span>
          </button>
        ))}
        
      </div>
    </div>
  )
}



