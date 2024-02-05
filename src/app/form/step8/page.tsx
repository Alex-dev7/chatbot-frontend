"use client"
import { useFileContext } from "@/context/FileContext";
import { revalidatePath } from "next/cache";
import Image from "next/image"
import Link from "next/link";
import React, { useState } from "react"

// revalidatePath('/form/step8')



export default function Step8() {
const [toggle, setToggle] = useState(false)
const { setFile } = useFileContext()


function onChangeHandler(e: any){
    setToggle(true)
    const target = e.target as typeof e.target & HTMLInputElement;
    if (target.files) {
        setFile(target.files[0])
        console.log(target.files[0])
    }

}


  return (
    <>
      <div className="w-[80%] h-full mx-auto py-9">
      <Image width={40} height={40} src='/shield.png' alt='shield icon'/>
            <div className="w-fit pb-8">
                <span className="text-black text-2xl font-semibold font-['Lato']">
                    Almost done,
                    <br />
                </span>
                <span className="text-gray-900 text-base font-[400] font-['Lato']">
                    You just need to upload your contract now.
                </span>
            </div>
            <div className="w-full flex flex-col space-y-4">
            
             <form className="space-y-2 pb-11" >
                <span  className="text-[#78707C] text-sm font-normal font-['Lato']">
                                Attach Document From Phone
                 </span>
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 ">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            { 
                            toggle ? (<Image width={60} height={60} src='/check.svg' alt="check icon" className="rounded-full " />)  :   (
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>)
                            }
                            <p className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400"> + Add New</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">.doc, .docx and pdf</p>
                        </div>
                        <input  type="file" id="file" name="file" className="hidden" onChange={onChangeHandler}/>
                    </label>
                </div> 
                        <button type="submit"  className={toggle ? `flex` : 'hidden'}>Upload</button>       
                 
            </form>  
                 <Link href={'/form/step9'} className="w-[80%] h-14 bg-purple-950 rounded-xl text-white hover:bg-purple-800 transition-colors active:bg-purple-950 flex  justify-center place-items-center absolute bottom-24" > 
                     Continue              
                  </Link>                  
            </div>
        </div>
        <footer className="w-[80%] mx-auto">
            <div className="w-full h-16  flex justify-between align-middle place-items-center">
                <Link href='/form/step7' replace className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed flex space-x-2">
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