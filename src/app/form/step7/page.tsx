import Image from "next/image"
import navScreen from "../../../../public/secondCheck.svg"
import backArrow from "../../../../public/BackArrow.svg"
import info from "../../../../public/Info.png"
import Link from "next/link";

export default function Step7() {

    const checkboxes = [
        { id: '1', text: 'Living  accomodations and furniture' },
        { id: '2', text: 'Food and nutrition' },
        { id: '3', text: 'Transportation (car, bike, public transporattion)' },
        { id: '4', text: 'Airplane tickets or travel stipend' },
        { id: '5', text: 'Additional medical coverage' },
        { id: '6', text: 'Injury clause' },
        { id: '7', text: 'Relocation allowance or arrangements' },
        { id: '8', text: 'Education allowance' },
        { id: '9', text: 'Care or schooling for children' },
        { id: '10', text: 'Support for spouse or partner' },
        { id: '11', text: 'Mental health support' },
        { id: '12', text: 'Visa arrangements and costs' },
      ];

  return (
    <div className="h-full pt-20 pb-5  flex flex-col justify-between bg-[#FFF]">
      <Image src={navScreen} alt="" className="w-[85%] mx-auto" />
      <div className="w-[80%] h-full mx-auto py-9">
            <div className="w-fit pb-8">
                <span className="text-black text-2xl font-semibold font-['Lato']">
                     Contract Details 
                    <br />
                </span>
                <span className="text-gray-900 text-base font-[400] font-['Lato']">
                     What are the clauses in your contract?
                </span>
            </div>
            <div className="w-full flex flex-col space-y-4">
            
             <form className="space-y-2 pb-11">
                    <div className="w-full flex flex-col space-y-4">
                        {checkboxes.map((checkbox) => (
                            <label key={checkbox.id} className="flex items-center space-x-2 text-sm text-[#3B4256]">
                                <input type="checkbox" id={checkbox.id} name={checkbox.id} className="checked:scale-125 w-5 h-5 accent-purple-600 " />
                                <span>{checkbox.text}</span>
                            </label>
                        ))}
                    </div>
                </form> 
                <Link href={'/form/step8'} className="w-[80%] h-14 bg-purple-950 rounded-xl text-white hover:bg-purple-800 transition-colors active:bg-purple-950 flex  justify-center place-items-center absolute bottom-24" >               
                                Continue
                </Link>        
            </div>
        </div>
        <footer className="w-[80%] mx-auto">
            <div className="w-full h-16  flex justify-between align-middle place-items-center">
                <Link href='/form/step6' replace className="text-zinc-500 text-base font-medium font-['Lato'] leading-relaxed flex space-x-2">
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