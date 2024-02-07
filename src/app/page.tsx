import Image from "next/image";
import Link from "next/link";

export default function Home() {


  return (
    <div className="w-[370px] h-[690px] mx-auto mt-28 py-4 bg-white rounded-2xl border border-zinc-500 flex flex-col justify-evenly align-middle place-items-center relative  transition-transform duration-200 shadow-lg">
      <Image width={23} height={23} src='/Frame.svg' alt="#" className="absolute  top-5 right-5 hover:size-6 transition-all cursor-pointer" />
      <Image width={65} height={70} src='/Group 1990.svg' alt="contract icon" className="shadow-lg"/>



      <div className="w-[85%] mx-auto text-zinc-500 font-['Lato']">
        <span className=" text-xl font-bold  leading-7">
          WEVOLY’s contract tool will guide you through a contract review
          step-by-step. <br />
        </span>
        <div className="text-[16px]"> 
          <span className="  font-normal  leading-snug">
            <br />
          </span>
          <span className="  font-semibold  leading-snug">
            Here’s what you will need to get started:
          </span>
          <br /><br/>
          <span className="  font-bold  leading-snug">
            1. Your contract.
          </span>
          <span className="  font-normal  leading-snug">
            {" "}
            Have it open on a screen so you can answer questions that will make it
            easier for us to do our review quickly and thoroughly.
            <br />
          </span>
          <span className="  font-bold  leading-snug">
            2. An idea of what is important to you.{" "}
          </span>
          <span className="  font-normal  leading-snug">
            We will guide you through setting these priorities but you might want
            to think about them first.{" "}
          </span>         
        </div>

      </div>
      <div className="w-[85%] h-fit flex space-x-2 ">
        <Image width={40} height={40} src='/shield.png' alt="security shield icon"/>
        <p className="text-zinc-500 h-fit text-lg font-medium font-['Lato'] flex place-self-center leading-7">Read about our commitment <br/>to data privacy and security</p>
      </div>
      <Link href={'/form'} className="w-[85%]  h-14 bg-purple-950 rounded-xl text-white hover:bg-purple-800 transition-colors active:bg-purple-950 flex justify-center place-items-center"
  
      >   
            Start
      </Link>
    </div>
  );}





// 