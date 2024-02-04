import Image from "next/image"
import Link from "next/link";

export default function Step10() {



  return (
    <> 
      <div className="w-[80%] h-full mx-auto py-[30%]  ">
            <div className="w-full   flex flex-col  place-content-center place-items-center ">
                <div className="flex flex-col  items-center justify-around w-full h-64 p-6 shadow-xl rounded-lg bg-green-50 ">
                    <Image width={50} height={50} src="/check.svg" alt="check icon" className="rounded-full border-2 border-green-600" />
                    <h2 className="text-xl font-normal text-green-600">Success!</h2>
                    <p className="text-zinc-500 text-sm text-center">Your contract is submitted. We will get back to you soon.</p>
                </div>
                <Link href={'/form/step9'} className="w-[80%] h-14 bg-purple-950 rounded-xl text-white hover:bg-purple-800 transition-colors active:bg-purple-950 flex  justify-center place-items-center absolute bottom-24" >               
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