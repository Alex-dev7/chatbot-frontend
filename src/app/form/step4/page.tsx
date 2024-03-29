import Image from "next/image"
import Link from "next/link";


export default function Step4() {
  return (
    <>
      <div className="w-[80%] h-full mx-auto py-9">
            <div className="w-fit ">
                <span className="text-black text-2xl font-semibold font-['Lato']">
                    What matters to you in your contract?
                    <br />
                </span>
                <span className="text-gray-900 text-[14px] font-[300] font-['Lato']">
                    Set your priorities from most important to least important
                </span>
            </div>
        
            <div className="w-full flex flex-col space-y-4">
             <form className="space-y-2 pb-11">
                    <div className="flex space-x-4">
                        <div className="w-full flex flex-col space-y-2">
                            <Image width={40} height={40} src='/Info.png' alt='info icon' className="my-4"/>
                            <ol className="w-[85%] mx-auto space-y-5 font-light text-zinc-800 text-sm">
                                <li className="list-decimal">
                                    <select name="member"   size={1} className="w-full h-12 bg-transparent focus:outline-none  focus:ring-1  border border-gray-300 rounded-lg px-4 ">
                                        <option  value="" className="" >Select one</option> 
                                        <option value="Duration of Contract" >Duration of Contract</option>
                                        <option value="Flexibility in termination options">Flexibility in termination options</option>
                                        <option value="Scope of Agent duties">Scope of Agent duties</option>
                                        <option value="Exclusivity">Exclusivity</option>
                                        <option value="Dispute Resolution">Dispute Resolution</option>
                                    </select>
                                </li>
                                <li className="list-decimal">
                                    <select name="member"  size={1} className="w-full h-12 bg-transparent focus:outline-none  focus:ring-1  border border-gray-300 rounded-lg px-4 ">
                                        <option  value="">Select one</option> 
                                        <option value="Duration of Contract" >Duration of Contract</option>
                                        <option value="Flexibility in termination options">Flexibility in termination options</option>
                                        <option value="Scope of Agent duties">Scope of Agent duties</option>
                                        <option value="Exclusivity">Exclusivity</option>
                                        <option value="Dispute Resolution">Dispute Resolution</option>
                                    </select>
                                </li>
                                <li className="list-decimal">
                                    <select name="member"  size={1} className="w-full h-12 bg-transparent focus:outline-none  focus:ring-1  border border-gray-300 rounded-lg px-4 ">
                                        <option  value="">Select one</option> 
                                        <option value="Duration of Contract" >Duration of Contract</option>
                                        <option value="Flexibility in termination options">Flexibility in termination options</option>
                                        <option value="Scope of Agent duties">Scope of Agent duties</option>
                                        <option value="Exclusivity">Exclusivity</option>
                                        <option value="Dispute Resolution">Dispute Resolution</option>
                                    </select>
                                </li>
                                <li className="list-decimal">
                                    <select name="member"  size={1} className="w-full h-12 bg-transparent focus:outline-none  focus:ring-1  border border-gray-300 rounded-lg px-4 ">
                                        <option  value="">Select one</option> 
                                        <option value="Duration of Contract" >Duration of Contract</option>
                                        <option value="Flexibility in termination options">Flexibility in termination options</option>
                                        <option value="Scope of Agent duties">Scope of Agent duties</option>
                                        <option value="Exclusivity">Exclusivity</option>
                                        <option value="Dispute Resolution">Dispute Resolution</option>  
                                    </select>
                                </li>
                                <li className="list-decimal">
                                    <select name="member"  size={1} className="w-full h-12 bg-transparent focus:outline-none  focus:ring-1  border border-gray-300 rounded-lg px-4 ">
                                        <option  value="">Select one</option> 
                                        <option value="Duration of Contract" >Duration of Contract</option>
                                        <option value="Flexibility in termination options">Flexibility in termination options</option>
                                        <option value="Scope of Agent duties">Scope of Agent duties</option>
                                        <option value="Exclusivity">Exclusivity</option>
                                        <option value="Dispute Resolution">Dispute Resolution</option>
                                    </select>
                                </li>
                            </ol>

                        </div>
                    </div>  
   
                </form> 
                <Link href={'/form/step5'} className="w-[80%] h-14 bg-purple-950 rounded-xl text-white hover:bg-purple-800 transition-colors active:bg-purple-950 flex  justify-center place-items-center absolute bottom-24" >               
                                Continue
                </Link>        
            </div>
        </div>
        <footer className="w-[80%] mx-auto">
            <div className="w-full h-16  flex justify-between align-middle place-items-center">
                <Link href='/form/step3' replace className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed flex space-x-2">
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