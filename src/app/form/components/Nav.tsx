'use client'
import Image from "next/image"
import { usePathname } from 'next/navigation'

type NavUrlsType = Record<string, string>;

function Nav() {
    const pathname = usePathname()

    
    const navUrls: NavUrlsType = {
        '/form': '/checkNav.svg',
        '/form/step2': '/checkNav.svg',
        '/form/step3': '/checkNav.svg',
        '/form/step4': '/checkNav.svg',
        '/form/step5': '/firstCheck.svg',
        '/form/step6': '/secondCheck.svg',
        '/form/step7': '/secondCheck.svg',
        '/form/step8': '/thirdCheck.svg',
        '/form/step9': '/fourthCheck.svg',
        '/form/step8/step10': '/fifthCheck.svg',
    }

  return (
    <>
       {pathname !== '/form/result' ?   <Image width={80} height={20} src={navUrls[pathname]} priority  alt="navigation bar image" className="w-[85%] mx-auto" /> : "" }
    </>
  )
}

export default Nav