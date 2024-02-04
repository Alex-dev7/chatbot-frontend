import Image from "next/image";
import Link from "next/link";


export default function result() {
  return (
    <> 
    <div className="w-[80%] h-full mx-auto   ">
          
          <div className="w-full   flex flex-col  space-y-3 my-2">
              <h1 className="text-2xl font-bold my-2">Contract Review</h1>
              <h3 className="font-semibold">Contract Rating</h3>
              <div className="w-full flex space-x-8 align-middle place-items-center">
                    <Image width={30} height={30} src='/warning.svg' alt="warning icon" />
                    <span>Warning/Caution</span>
              </div>
           </div>  
            <hr />

              <Link href={'#'} className="w-[80%] h-14 bg-purple-950 rounded-xl text-white hover:bg-purple-800  active:bg-purple-950 flex  justify-center place-items-center absolute bottom-10" >               
                             Contact Us
              </Link>        
          
      </div>
      <footer className="w-[80%] mx-auto">
          <div className="w-full h-16  flex justify-between align-middle place-items-center">
              {/* <Link href='/form/step9' replace className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed flex space-x-2">
                  <Image width={17} height={17} src='/backArrow.svg' alt='back arrow icon' />
                  <span>Back</span>
              </Link>
              <Link href='/' className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed">
                  Save Progress & Exit
              </Link> */}
          </div>
      </footer>
  </>
  )
}

