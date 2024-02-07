"use client"
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import Infos from "@/app/form/components/Infos";
import { useDataContext } from "@/context/DataContext";
import Image from "next/image";

export default function Result({response}: any) {
  const [closed, setClosed] = useState(false)
  const { data } = useDataContext()


function closedInfo(){
  setClosed(true)
}


  return (
    <>
    {
       closed ?
       <div className="p-5 h-full top-0 absolute bg-custom-gradient flex flex-col justify-between overflow-scroll ">
            <div className="w-full mt-10   flex flex-col  space-y-4 my-2">
                <h1 className="text-3xl font-bold my-2">Contract Review</h1>
                <h3 className="font-semibold">Contract Rating</h3>
                <div className="w-full flex space-x-8 align-middle place-items-center">
                    <Image width={30} height={30} src='/warning.svg' alt="warning icon" />
                    <span>Warning/Caution</span>
                </div>
              
                <hr /> 
                <h4 className="font-semibold my-4">Key Points</h4>  
            </div>  
           <div className="pl-2 d">
           <ReactMarkdown>
                {data?.messages[0][0].text.value}
          </ReactMarkdown>           
           </div>
            <div>
                <h4 className="font-semibold my-4">Salary Range</h4>  
                <Image width={500} height={150} src='/blured.png' alt="img placeholder" className="" />
                <button className="w-[80%] h-12 mx-auto bg-purple-950 rounded-xl text-white hover:bg-purple-800 transition-colors active:bg-purple-950 flex  justify-center place-items-center" >               
                        Speek to a Lawyer
                </button>  
            </div>
          
       </div>
       :
         <Infos closed={closedInfo} />
    }
    </>
 
  )
}



const markdExample = `### Player-Agent Contract Review:\n\n1. **Representation:**\n   - **Beneficial:** The Agent is appointed as the exclusive agent for a period of five years. 🟩\n   \n2. **Compensation of Agent:**\n   - **Detrimental:** The Agent's commission of 25% is high and exceeds the typical industry standard of 10%. 🟥\n\n3. **Exclusivity:**\n   - **Noteworthy:** The Player agrees not to appoint another agent during the contract term. 🟨\n\n4. **Endorsement Deals:**\n   - **Beneficial:** The Agent has the authority to negotiate endorsement deals and activities. 🟩\n\n5. **Termination:**\n   - **Detrimental:** A termination fee of $500,000 is required if Player terminates the agreement. 🟥\n\n6. **Governing Law:**\n   - **Noteworthy:** The agreement is governed by the laws of California. 🟨\n\n### Summary:\nThe contract grants exclusive representation to the Agent for five years with a high commission rate of 25%. The Player cannot appoint another agent during this period. The Agent has the authority over endorsement deals. However, there is a significant termination fee for the Player and the agreement is governed by California law.\n\nIf you need further details or revisions on specific clauses, feel free to ask.`