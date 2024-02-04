"use client"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";


export default function Step3() {
    const [selectedOption, setSelectedOption] = useState('')

    const options = ['Player X Team', 'Player X Agent', 'Team Rules', 'Other'];

  return (
    <>
 
      <div className="w-[80%] h-full pt-20 pb-9  mx-auto ">
            <div className="w-fit pb-8">
                <span className="text-black text-2xl font-semibold font-['Lato']">
                What kind of contract are we reviewing for you?
                    <br />
                </span>
            </div>
        
            <div className="w-full flex flex-col space-y-4">
                <div className="w-full flex flex-col space-y-2">
                {options.map((option) => (
                    <div
                        key={option}
                        onClick={() => setSelectedOption(option)}
                        className={`w-full h-12 border border-gray-300 rounded-lg px-4 cursor-pointer flex justify-center place-items-center ${selectedOption === option ? 'border-purple-500  bg-purple-300 text-white' : ''}`}
                    >
                        {option}
                    </div>
                ))}
                </div>
                <Link href={'/form/step4'} className="w-[80%] h-14 bg-purple-950 rounded-xl text-white hover:bg-purple-800 transition-colors active:bg-purple-950 flex  justify-center place-items-center absolute bottom-24" >               
                                Continue
                </Link>        
            </div>
        </div>
        <footer className="w-[80%] mx-auto relative">
            <div className="w-full h-16  flex justify-between align-middle place-items-center">
                <Link href='/form/step2' replace className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed flex space-x-2">
                    <Image width={17} height={17} src='/backArrow.svg' alt='back arrow icon' />
                    <span>Back</span>
                </Link>
                <Link href='/' className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed">
                    Save Progress & Exit
                </Link>
            </div>
        </footer>
    </>
  );
}