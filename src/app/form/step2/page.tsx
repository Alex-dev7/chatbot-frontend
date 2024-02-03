import Image from "next/image"
import navScreen from "../../../../public/NavScreen1.svg"
import backArrow from "../../../../public/BackArrow.svg"
import Link from "next/link";

export default function Step2() {
  return (
    <div className="h-full pt-20 pb-5  flex flex-col justify-between bg-[#FFF]">
      <Image src={navScreen} alt="" className="w-[85%] mx-auto" />
      <div className="w-[80%] mx-auto py-9">
            <div className="w-fit pb-8">
                <span className="text-black text-2xl font-semibold font-['Lato']">
                    Tell us about yourself
                    <br />
                </span>
                <span className="text-gray-900 text-xl font-normal font-['Lato']">
                    Personal details:
                </span>
            </div>
        
            <div className="w-full flex flex-col space-y-4">
             <form className="space-y-2 pb-11">
                    <div className="w-full flex flex-col space-y-2">
                        <label htmlFor="sport" className="text-[#78707C] text-sm font-normal font-['Lato']">
                            Sport
                        </label>
                        <input type="text" id="sport"  className="w-full h-12 bg-transparent focus:outline-none focus:ring-1  border border-gray-300 rounded-lg px-4" />
                    </div>
                    <div className="w-full flex flex-col space-y-2">
                        <label htmlFor="position" className="text-[#78707C] text-sm font-normal font-['Lato']">
                            Position Played
                        </label>
                        <input type="text" id="position"  className="w-full h-12 bg-transparent focus:outline-none focus:ring-1  border border-gray-300 rounded-lg px-4" />
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="yearsPro" className="text-[#78707C] text-sm font-normal font-['Lato']">
                            # Years Pro
                            </label>
                            <input type="number" id="yearsPro"  className="w-full h-12 bg-transparent focus:outline-none focus:ring-1  border border-gray-300 rounded-lg px-4" />
                                
                        </div>
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="yearsCollege" className="text-[#78707C] text-sm font-normal font-['Lato']">
                            # Years College
                            </label>
                            <input type="number"  id="yearsCollege" className="w-full h-12 bg-transparent focus:outline-none focus:ring-1  border border-gray-300 rounded-lg px-4" />
                        </div>
                    </div>  
                    <div className="flex space-x-4">
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="agent" className="text-[#78707C] text-sm font-normal font-['Lato']">
                            Do you have an agent?
                            </label>
                            <select  name="agent" id="agent" size={1} className="w-full h-12 bg-transparent focus:outline-none focus:ring-1  border border-gray-300 rounded-lg px-4 ">
                                <option selected value="yes">Yes</option> 
                                <option selected value="no">No</option> 
                            </select>
                                    
                                
                        </div>
                        <div className="w-full flex flex-col space-y-2">
                            <label htmlFor="member" className="text-[#78707C] text-sm font-normal font-['Lato']">
                            Are you a member of X?
                            </label>
                            <select name="member" id="member" size={1} className="w-full h-12 bg-transparent focus:outline-none focus:ring-1  border border-gray-300 rounded-lg px-4 ">
                                <option selected value="yes">Yes</option> 
                                <option selected value="no">No</option> 
                            </select>
                        </div>
                    </div>  
   
                </form> 
                <Link href={'/form/step3'} className="w-[80%] h-14 bg-purple-950 rounded-xl text-white hover:bg-purple-800 transition-colors active:bg-purple-950 flex  justify-center place-items-center absolute bottom-24" >               
                                Continue
                </Link>        
            </div>
        </div>
        <footer className="w-[80%] mx-auto">
            <div className="w-full h-16  flex justify-between align-middle place-items-center">
                <Link href='/form' replace className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed flex space-x-2">
                    <Image src={backArrow} alt='back arrow icon' />
                    <span>Back</span>
                </Link>
                <Link href='/' className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed">
                    Save Progress & Exit
                </Link>
            </div>
        </footer>
    </div>
  );
}