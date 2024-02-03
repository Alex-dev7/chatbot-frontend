import Link from "next/link"
import Image from "next/image"
import navScreen from "../../../../public/NavScreen1.svg"
import backArrow from "../../../../public/BackArrow.svg"


export default function FileUpload() {
  return (
    <div className="h-full pt-20 flex flex-col justify-between bg-[#FFF]">
    <Image src={navScreen} alt="" className="w-[85%] mx-auto" />

      <footer className="w-[80%] mx-auto">
          <div className="w-full h-16  flex justify-between align-middle place-items-center">
              <Link href='/' className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed flex space-x-2">
                  <Image src={backArrow} alt='back arrow icon' />
                  <span>Back</span>
              </Link>
              <Link href='/' className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed">
                  Save Progress & Exit
              </Link>
          </div>
      </footer>
  </div>
  )
}


