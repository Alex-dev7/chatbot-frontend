import Image from "next/image"
import Link from "next/link";


export default function Step5() {
  return (
    <>
      <div className="w-[80%] h-full mx-auto py-9">
            <div className="w-fit pb-8">
                <span className="text-black text-2xl font-semibold font-['Lato']">
                Tell us about the team that wants to sign you
                    <br />
                </span>
            </div>
            <div className="w-full flex flex-col space-y-4">
             <form className="space-y-2 pb-11">
                    <div className="w-full flex flex-col space-y-2">
                        <label htmlFor="team" className="text-[#78707C] text-sm font-normal font-['Lato']">
                            Team Name
                        </label>
                        <input type="text" id="team"  className="w-full h-12 bg-transparent focus:outline-none focus:ring-1  border border-gray-300 rounded-lg px-4" />
                    </div>
                    <div className="w-full flex flex-col space-y-2">
                        <label htmlFor="country" className="text-[#78707C] text-sm font-normal font-['Lato']">
                            Country
                        </label>
                        <input type="text" id="country"  className="w-full h-12 bg-transparent focus:outline-none focus:ring-1  border border-gray-300 rounded-lg px-4" />
                    </div>
                    <div className="w-[50%] flex flex-col space-y-2">
                        <label htmlFor="league" className="text-[#78707C] text-sm font-normal font-['Lato']">
                            League
                        </label>
                        <input type="text" id="league"  className="w-full h-12 bg-transparent focus:outline-none focus:ring-1  border border-gray-300 rounded-lg px-4" />
                    </div>

                </form> 
                <Link href={'/form/step6'} className="w-[80%] h-14 bg-purple-950 rounded-xl text-white hover:bg-purple-800 transition-colors active:bg-purple-950 flex  justify-center place-items-center absolute bottom-24" >               
                                Continue
                </Link>        
            </div>
        </div>
        <footer className="w-[80%] mx-auto">
            <div className="w-full h-16  flex justify-between align-middle place-items-center">
                <Link href='/form/step4' replace className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed flex space-x-2">
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