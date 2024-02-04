import Image from "next/image"
import Link from "next/link";

export default function Step6() {
  return (
    <>
      <div className="w-[80%] h-full mx-auto py-9">
            <div className="w-fit pb-8">
                <span className="text-black text-2xl font-semibold font-['Lato']">
                     Contract Details 
                    <br />
                </span>
                <span className="text-gray-900 text-base font-[400] font-['Lato']">
                     What are they offering?
                </span>
            </div>
            <div className="w-full flex flex-col space-y-4">
            
             <form className="space-y-2 pb-11">
             <Image width={40} height={40} src='/Info.png' alt='info icon' className="my-4"/>
                    <div className="w-full flex flex-col space-y-2">
                        <label htmlFor="length" className="text-[#78707C] text-sm font-normal font-['Lato']">
                            Length of Contract (in months)
                        </label>
                        <input type="number" id="length" placeholder="Contract length (Months)"  className="w-full h-12 bg-transparent focus:outline-none focus:ring-1  border border-gray-300 rounded-lg px-4" />
                    </div>
                    <div className="w-full flex flex-col space-y-2">
                        <label htmlFor="salary" className="text-[#78707C] text-sm font-normal font-['Lato']">
                            Salary
                        </label>
                        <input type="number" id="salary" placeholder="Salary"  className="w-full h-12 bg-transparent focus:outline-none focus:ring-1  border border-gray-300 rounded-lg px-4" />
                    </div>
                    <div className=" flex flex-col space-y-2">
                        <label htmlFor="bonus" className="text-[#78707C] text-sm font-normal font-['Lato']">
                            Signing Bonus
                        </label>
                        <input type="number" id="bonus" placeholder="Signing Bonus"  className="w-full h-12 bg-transparent focus:outline-none focus:ring-1  border border-gray-300 rounded-lg px-4" />
                    </div>
                    <div className=" flex flex-col space-y-2">
                        <label htmlFor="bonusPerf" className="text-[#78707C] text-sm font-normal font-['Lato']">
                            Performance Bonus
                        </label>
                        <input type="number" id="bonusPerf" placeholder="Performance Bonus"  className="w-full h-12 bg-transparent focus:outline-none focus:ring-1  border border-gray-300 rounded-lg px-4" />
                    </div>

                </form> 
                <Link href={'/form/step7'} className="w-[80%] h-14 bg-purple-950 rounded-xl text-white hover:bg-purple-800 transition-colors active:bg-purple-950 flex  justify-center place-items-center absolute bottom-24" >               
                                Continue
                </Link>        
            </div>
        </div>
        <footer className="w-[80%] mx-auto">
            <div className="w-full h-16  flex justify-between align-middle place-items-center">
                <Link href='/form/step5' replace className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed flex space-x-2">
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