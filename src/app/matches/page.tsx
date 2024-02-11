"use client"
import Image from 'next/image'
import Link from 'next/link'
import { lawyerData } from '@/data/slides'
import {  useMotionValue, useTransform, useAnimation, motion } from "framer";
import { useState } from 'react'



 function Matches() {
  const [data, setData] = useState(lawyerData)

   // To move the card as the user drags the cursor
  const motionValue = useMotionValue(0);
  // Framer animation hook
  const animControls = useAnimation();

  // To rotate the card as the card moves on drag
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
    // To decrease opacity of the card when swiped
    // on dragging card to left(-200) or right(200)
    // opacity gradually changes to 0
    // and when the card is in center opacity = 1
  const opacityValue = useTransform(
      motionValue,
      [-200, -150, 0, 150, 200],
      [0, 1, 1, 1, 0]
  );


  const Card = (
    <div className='App'>
    <motion.div
        // center={true}
        // Card can be drag only on x-axis
        drag='x'
        _dragX={motionValue}
        // rotate={rotateValue}
        // opacity={opacityValue}
        dragConstraints={{ left: -1000, right: 1000 }}
        onDragEnd={(event, info) => {

            // If the card is dragged only upto 150 on x-axis
            // bring it back to initial position
            if (Math.abs(info.point.x) <= 150) {
                animControls.start({ x: 0 });
            } else {

                // If card is dragged beyond 150
                // make it disappear

                // Making use of ternary operator
                animControls.start({ x: info.point.x < 0 ? -200 : 200 });
            }
        }}
    />
</div>
  )


  return (
    <div className='w-[430px] h-[932px] bg-[#382e3c] relative flex align-middle justify-center place-content-center place-items-center'>
      <Link href='/' className='absolute left-8 top-10'>
        <Image src='/back.svg' width={50} height={50} alt='back' />
      </Link>
      <div>
        <h1 className='text-white text-4xl font-medium'>Your Matches</h1>
        <motion.div
            drag='x'
            _dragX={motionValue}
                // transition={{ rotate: rotateValue, opacity: opacityValue}}
                // opacity={opacityValue}
                animate={animControls}

        className='container w-96 h-[400px] mx-auto flex relative'>
            {data.map((lawyer, index) => (
              
                <motion.div
                key={lawyer.id}
                dragConstraints={{ left: -1000, right: 1000 }}
                onDragEnd={(event, info) => {
                  // If the card is dragged only upto 150 on x-axis
                  // bring it back to initial position
                  if (Math.abs(info.point.x) <= 150) {
                      animControls.start({ x: 0 });
                  } else {
                      // If card is dragged beyond 150
                      // make it disappear
                      // Making use of ternary operator
                      animControls.start({ x: info.point.x < 0 ? -200 : 200 });
                  }
              }}
                className='w-80 h-full bg-white  rounded-2xl border-2 '>
                  <Image src={lawyer.image} width={80} height={80} alt='lawyer' />
                  <h3 className='text-white text-2xl font-medium '>{lawyer.name}</h3>
                  <div>
                    <button></button>
                    <button></button>
                  </div>
                </motion.div>

            ))}
        </motion.div>

      </div>
      
    </div>
  )
}

export default Matches
