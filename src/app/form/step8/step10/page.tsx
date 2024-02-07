"use client"
import Image from "next/image"
import Link from "next/link";
import { useFileContext } from "@/context/FileContext";
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation'
import { useDataContext } from "@/context/DataContext";



// get Assistant API thread id
async function getThreadId() {
    const res = await fetch('http://localhost:4000/thread')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }



export default function Step10() {
const [thread, setThread] = useState({id: 'thread_rSIPT2D71TGQ9ahM7du8Mk2Z'})
const [response, setResponse] = useState(false)
const hasRun = useRef(false)
const [isLoading, setLoading] = useState(false)
const router = useRouter()
const { file } = useFileContext()
const { setData } = useDataContext()

// console.log("-----------", file)

// useEffect(() => {
//     if (!hasRun.current) {
//         const fetchData = async () => {
//           const data = await getThreadId();
//           setThread({id: data.threadId})
//           console.log(data);
//         };
    
//         fetchData();
//         hasRun.current = true;
//       }
// }, [])



const handleClick = async () => {
    if (!file) return

    try {
        setLoading(true)
        const data = new FormData()
        data.set('file', file)
        data.append('message', ' using the color coded system. Give a short answer in markdown format.')
        data.append('threadId', thread.id)

        const res = await fetch('http://localhost:4000/message', {
            method: 'POST',
            body: data,
        })

        if (!res.ok) {
            throw new Error(await res.text())
        }
        const responseData = await res.json();
        console.log(responseData)
        setData(responseData);
        setResponse(true)

    } catch (error) {
        console.error('Failed to upload the file', error)
    }
    setLoading(false)
}


        if (isLoading) return <div className="loader" />
        if (response) return router.push('/form/step8/step10/result')


  return (
    <> 
        <div className="w-[80%] h-full mx-auto py-[30%]  ">
            <div className="w-full   flex flex-col  place-content-center place-items-center ">
                <div className="flex flex-col  items-center justify-around w-full h-64 p-6 shadow-xl rounded-lg bg-green-50 ">
                    <Image width={50} height={50} src="/check.svg" alt="check icon" className="rounded-full border-2 border-green-600" />
                    <h2 className="text-xl font-normal text-green-600">Success!</h2>
                    <p className="text-zinc-500 text-sm text-center">Your contract is submitted. We will get back to you soon.</p>
                </div>
                <button onClick={handleClick} className="w-[80%] h-14 bg-purple-950 rounded-xl text-white hover:bg-purple-800 transition-colors active:bg-purple-950 flex  justify-center place-items-center absolute bottom-24" >               
                            Review
                </button>        
            </div>
        </div>
        <footer className="w-[80%] mx-auto ">
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