import Image from "next/image"
import Link from "next/link";

export default function Step9() {



  return (
    <>
      <div className="w-[80%] h-full mx-auto py-9">
            <div className="w-fit pb-8">
                <span className="text-black text-2xl font-semibold font-['Lato']">
                    Over 80 percent of athletes who used this review joined the Contract Coalition.
                    <br />
                </span>
                <span className="text-gray-900 text-sm font-[400] font-['Lato']">
                    Wevolv is on a mission to empower athletes with everything they need to protect themselves and know their worth. You can help by allowing us to collect and share your contract information. This information will be anonymous and entered into our database where it can help more athletes to protect themselves and know their worth.
                </span>
            </div>
            <div className="w-full flex flex-col  place-content-center place-items-center">
            
                <form className="space-y-2 pb-11">
                    <label  className="flex items-center space-x-2 text-base text-[#3B4256]">
                            <input type="checkbox"  name='coalition' className="checked:scale-125 w-5 h-5 accent-purple-600 " />
                            <span>Yes, I will join Wevolv’s Contract Coalition</span>
                    </label>

                </form>         

                <div className="w-[85%] h-fit flex space-x-2 ">
                    <Image width={40} height={40} src='/shield.png' alt="security shield icon"/>
                    <p className="text-zinc-500 h-fit text-lg font-medium font-['Lato'] flex place-self-center leading-7">Read about our commitment <br/>to data privacy and security</p>
                </div>
                <Link href={'/form/step8/step10'} className="w-[80%] h-14 bg-purple-950 rounded-xl text-white hover:bg-purple-800 transition-colors active:bg-purple-950 flex  justify-center place-items-center absolute bottom-24" >               
                                Continue
                </Link>        
            </div>
        </div>
        <footer className="w-[80%] mx-auto">
            <div className="w-full h-16  flex justify-between align-middle place-items-center">
                <Link href='/form/step8' replace className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed flex space-x-2">
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