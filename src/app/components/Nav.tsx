import Image from "next/image"
import cellular from "../../../public/cellular.svg"
import battery from "../../../public/Battery.svg"
import wifi from "../../../public/Wifi.svg"

function Nav() {
  return (
    <nav className="w-full h-fit absolute  p-[25px] flex justify-between align-middle">
        <span className="text-[#78707C] text-[22px]">
            9:41
        </span>
        <ul className="flex space-x-2">
            <li className="flex ">
                <Image src={cellular} priority alt="cellular connection" />
            </li>
            <li className="flex ">
                <Image src={wifi} priority alt="cellular connection" />
            </li>
            <li className="flex ">
                <Image src={battery} priority alt="cellular connection" />
            </li>
        </ul>
    </nav>
  )
}

export default Nav