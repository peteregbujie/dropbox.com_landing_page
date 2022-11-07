import Image, { StaticImageData } from "next/image";
import { Fragment, useMemo, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { Accordion_Data } from "../constants";

type Accordion = {
 id: string;
 isOpen: boolean;
 title: string;
 text: string;
 img: StaticImageData;
 bgColor: string;
};

function Features(): JSX.Element {
 const [disclosures, setDisclosures] = useState<Accordion[]>(Accordion_Data);

 const handleClick = (id: string) => {
  setDisclosures((pre) =>
   [...pre].map((_it) => ({
    ..._it,
    isOpen: _it.id === id ? _it.isOpen || true : false,
   }))
  );
 };

 const currentImg = useMemo(() => {
  return disclosures.find((item) => item.isOpen)!.img;
 }, [disclosures]);

 return (
  <section className="bg-gray-100">
   <div className="flex flex-col py-16 text-center">
    <h2 className="pb-6 text-4xl font-bold">What can Dropbox help you do?</h2>
    <p>
     Dropbox brings everything—traditional files, cloud content, and web
     shortcuts—together in one place.
    </p>
   </div>
   <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="text-gray-900 bg-white">
     <div className="px-12 py-16 mx-auto ">
      {disclosures.map(({ id, isOpen, title, text, img }) => (
       <Fragment key={id}>
        <button
         className={`${
          !isOpen
           ? " hover:bg-orange-50 border-b-2 border-gray-400  "
           : "border-none hover-none"
         } flex justify-between w-full px-4 py-8 text-base font-bold text-left text-gray-800 bg-white   focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75  gap-y-8`}
         onClick={() => handleClick(id)}
         aria-expanded={isOpen}
         {...(isOpen && { "aria-controls": id })}
        >
         {title}
         <HiChevronDown
          className={`${
           isOpen ? "rotate-180 transform" : ""
          } h-5 w-5 text-gray-800`}
         />
        </button>
        {isOpen && (
         <div className="flex flex-col items-start p-4 mx-auto border-b-2 border-gray-400 gap-y-8">
          <p>{text}</p>
          <span className="underline decoration-gray-400 hover:decoration-white underline-offset-4 ">
           Learn more
          </span>
          <div
           className={`${
            img.src === "/_next/static/media/pane 1.407b47ef.png"
             ? "bg-cyan-300"
             : img.src === "/_next/static/media/pane 2.3cc85755.jpg"
             ? "bg-orange-600"
             : img.src === "/_next/static/media/pane 3.9063e32c.png"
             ? "bg-amber-300"
             : img.src === "/_next/static/media/pane 4.e71e9a3d.jpg"
             ? "bg-red-300"
             : img.src === "/_next/static/media/pane 5.73a5ecb4.png"
             ? "bg-orange-400"
             : img.src === "/_next/static/media/pane 6.dfbf009b.png"
             ? "bg-lime-400"
             : img.src === "/_next/static/media/pane 7.72a5ad39.svg"
             ? "bg-blue-200"
             : img.src === "/_next/static/media/pane 8.6668834b.png"
             ? "bg-violet-300"
             : ""
           }  w-full justify-center items-center p-8 flex lg:hidden`}
          >
           <Image src={img} alt="dropbox" width={415} height={279} />
          </div>
         </div>
        )}
       </Fragment>
      ))}
     </div>
    </div>
    <div
     className={`${
      currentImg.src === "/_next/static/media/pane 1.407b47ef.png"
       ? "bg-cyan-300"
       : currentImg.src === "/_next/static/media/pane 2.3cc85755.jpg"
       ? "bg-orange-600"
       : currentImg.src === "/_next/static/media/pane 3.9063e32c.png"
       ? "bg-amber-300"
       : currentImg.src === "/_next/static/media/pane 4.e71e9a3d.jpg"
       ? "bg-red-300"
       : currentImg.src === "/_next/static/media/pane 5.73a5ecb4.png"
       ? "bg-orange-400"
       : currentImg.src === "/_next/static/media/pane 6.dfbf009b.png"
       ? "bg-lime-400"
       : currentImg.src === "/_next/static/media/pane 7.72a5ad39.svg"
       ? "bg-blue-200"
       : currentImg.src === "/_next/static/media/pane 8.6668834b.png"
       ? "bg-violet-300"
       : ""
     } items-center justify-center hidden w-full p-8 lg:flex `}
    >
     <Image
      src={currentImg.src ?? "./img/defaultimage.png"}
      alt="dropbox"
      width={665}
      height={`${
       currentImg.src === "/_next/static/media/pane 1.407b47ef.png"
        ? 466
        : currentImg.src === "/_next/static/media/pane 2.3cc85755.jpg"
        ? 446
        : currentImg.src === "/_next/static/media/pane 3.9063e32c.png"
        ? 549
        : currentImg.src === "/_next/static/media/pane 4.e71e9a3d.jpg"
        ? 445
        : currentImg.src === "/_next/static/media/pane 5.73a5ecb4.png"
        ? 670
        : currentImg.src === "/_next/static/media/pane 6.dfbf009b.png"
        ? 392
        : currentImg.src === "/_next/static/media/pane 7.72a5ad39.svg"
        ? 580
        : currentImg.src === "/_next/static/media/pane 8.6668834b.png"
        ? 448
        : ""
      } `}
      objectFit="cover"
     />
     ;
    </div>
   </div>
  </section>
 );
}

export default Features;
