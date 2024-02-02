import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[370px] h-[690px] mx-auto mt-5 bg-white rounded-2xl border border-zinc-500">




      <div className="w-[80%]">
        <span className="text-zinc-500 text-xl font-bold font-['Lato'] leading-7">
          WEVOLY’s contract tool will guide you through a contract review
          step-by-step. <br />
        </span>
        <span className="text-zinc-500 text-base font-normal font-['Lato'] leading-snug">
          <br />
        </span>
        <span className="text-zinc-500 text-base font-semibold font-['Lato'] leading-snug">
          Here’s what you will need to get started:
        </span>
        <br /><br/>
        <span className="text-zinc-500 text-base font-bold font-['Lato'] leading-snug">
          1. Your contract.
        </span>
        <span className="text-zinc-500 text-base font-normal font-['Lato'] leading-snug">
          {" "}
          Have it open on a screen so you can answer questions that will make it
          easier for us to do our review quickly and thoroughly.
          <br />
        </span>
        <span className="text-zinc-500 text-base font-bold font-['Lato'] leading-snug">
          2. An idea of what is important to you.{" "}
        </span>
        <span className="text-zinc-500 text-base font-normal font-['Lato'] leading-snug">
          We will guide you through setting these priorities but you might want
          to think about them first.{" "}
        </span>
      </div>
    </div>
  );}





// 