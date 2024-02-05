"use client"
import Image from "next/image"
import Link from "next/link";
import { useFileContext } from "@/context/FileContext";
import { useState, useEffect } from "react";

// async function getThreadId() {
//     const res = await fetch('http://localhost:4000/thread')
   
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }

//     return res.json()
//   }

// useEffect(() => {
//     const fetchData = async () => {
//         const data = await getThreadId();
//         setFile(thread);
//       };
    
//       fetchData();
//     console.log(thread)
// }, [])

export default function Step10() {
const [thread, setThread] = useState({id: 'thread_rnyT5FlyAVTKJEW6VgPIySWs'})

const { file } = useFileContext()

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // if (!file) return

    // try {
    //     const data = new FormData()
    //     data.set('file', file)
    //     data.append('message', 'Review this contract using the color coded system.')
    //     data.append('threadId', thread.id)

    //     const res = await fetch('http://localhost:4000/message', {
    //         method: 'POST',
    //         body: data,
    //     })

    //     if (!res.ok) {
    //         throw new Error(await res.text())
    //     }
    // } catch (error) {
    //     console.error('Failed to upload the file', error)
    // }

}

console.log("-----------", file)
  return (
    <> 
      <div className="w-[80%] h-full mx-auto py-[30%]  ">
            <div className="w-full   flex flex-col  place-content-center place-items-center ">
                <div className="flex flex-col  items-center justify-around w-full h-64 p-6 shadow-xl rounded-lg bg-green-50 ">
                    <Image width={50} height={50} src="/check.svg" alt="check icon" className="rounded-full border-2 border-green-600" />
                    <h2 className="text-xl font-normal text-green-600">Success!</h2>
                    <p className="text-zinc-500 text-sm text-center">Your contract is submitted. We will get back to you soon.</p>
                </div>
                <Link href={'/form/step8/result'} className="w-[80%] h-14 bg-purple-950 rounded-xl text-white hover:bg-purple-800 transition-colors active:bg-purple-950 flex  justify-center place-items-center absolute bottom-24" >               
                               Review
                </Link>        
            </div>
        </div>
        <footer className="w-[80%] mx-auto">
            <div className="w-full h-16  flex justify-between align-middle place-items-center">
                <Link href='/form/step9' replace className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed flex space-x-2">
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