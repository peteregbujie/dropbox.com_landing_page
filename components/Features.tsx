import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";
import { pane1 } from "../assets";
import { Accordion_Data } from "../constants";

function Features(): JSX.Element {
 return (
  <section className="bg-[#f7f5f2]">
   <div className="flex flex-col py-12 text-center">
    <h2 className="pb-6 text-4xl font-bold">What can Dropbox help you do?</h2>
    <p>
     Dropbox brings everything—traditional files, cloud content, and web
     shortcuts—together in one place.
    </p>
   </div>
   <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="text-gray-900 bg-white">
     <div className="px-12 py-16 mx-auto ">
      {Accordion_Data.map(({ title, text, img, bgColor }, index) => (
       <div
        key={index}
        className="p-4 border-b-2 border-gray-900  hover:bg-[#EADDCA]"
       >
        {img === pane1 ? (
         <details className="mb-4 group" open>
          <summary className="flex justify-between py-4 list-none ">
           <div className="w-full font-bold">{title}</div>
           <HiChevronDown className="w-6 h-6 transform group-open:rotate-180" />
          </summary>
          <div className="flex flex-col items-start p-4 mx-auto gap-y-8">
           <p>{text}</p>
           <span className="underline decoration-gray-400 hover:decoration-white underline-offset-4">
            Learn more
           </span>
           <div className=" bg-[#14c8eb] w-full justify-center items-center p-8 flex">
            <Image src={img} alt="dropbox" width={415} height={279} />
           </div>
          </div>
         </details>
        ) : (
         <details className="mb-4 group ">
          <summary className="flex justify-between py-4 list-none ">
           <div className="w-full font-bold">{title}</div>
           <HiChevronDown className="w-6 h-6 transform group-open:rotate-180" />
          </summary>
          <div className="flex flex-col items-start p-4 mx-auto gap-y-8">
           <p>{text}</p>
           <span className="underline decoration-gray-400 hover:decoration-white underline-offset-4">
            Learn more
           </span>
           <div
            className={`${bgColor} w-full justify-center items-center p-8 flex`}
           >
            <Image src={img} alt="dropbox" width={415} height={279} />
           </div>
          </div>
         </details>
        )}
       </div>
      ))}
     </div>
    </div>
    <div className="hidden lg:flex">
     <Image src={pane1} alt="dropbox" width={415} height={279} />
    </div>
   </div>
  </section>
 );
}

export default Features;
