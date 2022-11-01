import Image from "next/image";
import { HiChevronRight } from "react-icons/hi";
import { personal, work } from "../assets";
import { integrations } from "../constants";

function More(): JSX.Element {
 return (
  <section className="bg-[#f7f5f2] text-gray-800">
   <div className="max-w-screen-xl py-16 mx-auto sm:px-6 lg:px-8 ">
    <h2 className="pb-12 text-3xl text-center sm:text-4xl">
     How will you use Dropbox?
    </h2>
    <div className="grid grid-cols-1 pb-12 mx-auto lg:grid-cols-2">
     <div className="flex flex-col overflow-hidden border-r-2 border-gray-600">
      <Image
       src={work}
       alt="dropbox"
       width={590}
       height={197}
       objectFit="cover"
      />
      <div className="flex flex-col p-6 bg-white gap-y-8">
       <h2 className="text-3xl">For Work</h2>
       <p>
        Work efficiently with teammates and clients, stay in sync on projects,
        and keep company data safe—all in one place.
       </p>
       <button className="flex items-center justify-between px-4 py-6 text-lg font-bold text-white bg-blue-600 hover:opacity-75">
        Get Dropbox for work
        <HiChevronRight className="w-6 h-6" />
       </button>
      </div>
     </div>

     <div className="flex flex-col overflow-hidden">
      <Image
       src={personal}
       alt="dropbox"
       width={590}
       height={197}
       objectFit="cover"
      />
      <div className="flex flex-col p-6 bg-white gap-y-8">
       <h2 className="text-3xl ">For personal use</h2>
       <p>
        Work efficiently with teammates and clients, stay in sync on projects,
        and keep company data safe—all in one place.
       </p>
       <button className="flex items-center justify-between px-4 py-6 text-lg font-bold text-white bg-blue-600 hover:opacity-75">
        Get Dropbox for work
        <HiChevronRight className="w-6 h-6" />
       </button>
      </div>
     </div>
    </div>
    <div className="max-w-3xl mx-auto text-center">
     <h2 className="text-3xl font-bold sm:text-4xl">
      Get more out of Dropbox by connecting with the tools you love
     </h2>
     <p className="my-6 text-gray-800 underline decoration-gray-400 hover:decoration-white underline-offset-4">
      Learn more about partner integrations
     </p>
    </div>

    <div className="grid grid-cols-2 gap-8 px-8 py-12 lg:py-8 md:mt-16 lg:grid-cols-4">
     {integrations.map(({ image, name, about }) => (
      <div key={name} className="flex flex-col items-start mb-12 gap-y-6">
       <Image src={image} alt="logo" width={50} height={50} />
       <span className="font-bold">{name}</span>
       <p>{about}</p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}

export default More;
