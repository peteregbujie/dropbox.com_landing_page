import Image from "next/image";
import { HiChevronRight } from "react-icons/hi";
import { cloud, dropbox_gallery, shield, smile, twinkle } from "../assets";

export default function Hero(): JSX.Element {
 return (
  <section className="text-white bg-[#1e1919]">
   <div className="max-w-screen-xl px-8 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center gap-y-12">
     <div>
      <h2 className="text-4xl font-bold">
       Join over 700 million registered users who trust Dropbox
      </h2>
      <p className="mt-4 text-lg text-gray-300">
       Easy to use, reliable, private and secure. It&apos;s no wonder Dropbox is
       the choice for storing and sharing your most important files.
      </p>{" "}
     </div>
     <button className="flex items-center justify-between px-6 py-6 text-lg font-bold text-gray-700 bg-blue-400 hover:opacity-75">
      FInd your plan <HiChevronRight />
     </button>
     <Image
      src={dropbox_gallery}
      alt="dropbox_gallery"
      width={581.1}
      height={417.56}
     />

     <h2 className="text-2xl font-bold text-center">
      See what sets Dropbox apart
     </h2>
    </div>
    <div className="grid grid-cols-2 gap-8 mt-8 md:mt-16 lg:grid-cols-4">
     <div className="flex flex-col items-start gap-y-6">
      <Image src={smile} alt="smile emoji" width={50} height={50} />
      <span>Your files, not ours</span>
      <p>
       WIth Dropbox, your files belong to you, not us, so you can be sure
       we&apos;re not reselling your data.
      </p>
     </div>
     <div className="flex flex-col items-start gap-y-6">
      <Image src={cloud} alt="smile emoji" width={50} height={50} />
      <span>All your files in one place</span>
      <p>
       Store computer backups, photo libraries, thousands of documents—all your
       files, in the same place.
      </p>
     </div>
     <div className="flex flex-col items-start gap-y-6">
      <Image src={twinkle} alt="smile emoji" width={50} height={50} />
      <span>One-of-a-kind functionality</span>
      <p>
       Store files as large as 2 TB each, sync at light speed, and allow anyone
       to preview nearly 200 file types.
      </p>
     </div>
     <div className="flex flex-col items-start gap-y-6">
      <Image src={shield} alt="smile emoji" width={50} height={50} />
      <span>Ease of use and security</span>
      <p>
       2/3 of surveyed users say Dropbox keeps their files more secure and we’re
       a leader in ease of use.
      </p>
     </div>
    </div>
   </div>
  </section>
 );
}
