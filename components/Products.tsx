import Image from "next/image";
import { barchart, signature } from "../assets";

function Products(): JSX.Element {
 return (
  <section className="bg-[white] grid grid-cols-1 gap-x-2 lg:grid-cols-2 py-2">
   <div className="bg-[#14c8eb] text-gray-800 mb-2 lg:mb-0">
    <div className="flex flex-col items-center justify-center max-w-md py-16 mx-auto text-center gap-y-8">
     <span className="font-bold">Dropbox Sign</span>
     <h2 className="text-4xl font-bold text-center">
      Add eSignature to your workflows
     </h2>
     <p>
      Dropbox Sign is the simple and secure way to send and request legally
      binding signatures online
     </p>
     <div className="flex pb-6 font-bold gap-x-8">
      <span className="underline decoration-gray-400 hover:decoration-gray-700 underline-offset-4">
       Learn more
      </span>
      <span className="underline decoration-gray-400 hover:decoration-gray-700 underline-offset-4">
       Try for free
      </span>
     </div>
     <Image src={signature} alt="dropbox" width={415} height={279} />
    </div>
   </div>
   <div className="bg-[#007891] text-white">
    <div className="flex flex-col items-center justify-center max-w-md py-16 mx-auto text-center gap-y-8">
     <span className="font-bold">DocSend, a Dropbox company</span>
     <h2 className="text-4xl font-bold">Send a link and open doors</h2>
     <p>
      Use DocSend to share, manage, and optimize business-critical documents by
      simply sending a link.
     </p>
     <div className="flex pb-6 font-bold gap-x-8">
      <span className="underline decoration-gray-400 hover:decoration-white underline-offset-4">
       Learn more
      </span>
      <span className="underline decoration-gray-400 hover:decoration-white underline-offset-4">
       Try for free
      </span>
     </div>
     <Image src={barchart} alt="dropbox" width={415} height={279} />
    </div>
   </div>
  </section>
 );
}

export default Products;
