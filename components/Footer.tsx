import Link from "next/link";
import { CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";
import { HiChevronRight } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import {
 Footer_Community,
 Footer_Company,
 Footer_Dropbox,
 Footer_Products,
 Footer_Support,
} from "../constants";

function Footer(): JSX.Element {
 return (
  <div className="text-white bg-black">
   <div className="flex flex-col justify-center p-20 mx-auto gap-y-8">
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-10">
     <ul>
      {Footer_Dropbox.map((link, index) => (
       <li
        key={index}
        className={`${
         index === 0 ? "pb-6 font-bold text-lg" : "text-sm"
        } py-2 `}
       >
        <Link href={`${link}`}>
         <a>{link}</a>
        </Link>
       </li>
      ))}
     </ul>
     <ul>
      {Footer_Products.map((link, index) => (
       <li
        key={index}
        className={`${
         index === 0 ? "pb-6 font-bold text-lg" : "text-sm"
        } py-2 `}
       >
        <Link href={`${link}`}>
         <a>{link}</a>
        </Link>
       </li>
      ))}
     </ul>
     <ul>
      {Footer_Support.map((link, index) => (
       <li
        key={index}
        className={`${
         index === 0 ? "pb-6 font-bold text-lg" : "text-sm"
        } py-2 `}
       >
        <Link href={`${link}`}>
         <a>{link}</a>
        </Link>
       </li>
      ))}
     </ul>
     <ul>
      {Footer_Community.map((link, index) => (
       <li
        key={index}
        className={`${
         index === 0 ? "pb-6 font-bold text-lg" : "text-sm"
        } py-2 `}
       >
        <Link href={`${link}`}>
         <a>{link}</a>
        </Link>
       </li>
      ))}
     </ul>
     <ul>
      {Footer_Company.map((link, index) => (
       <li
        key={index}
        className={`${
         index === 0 ? "pb-6 font-bold text-lg" : "text-sm"
        } py-2 `}
       >
        <Link href={`${link}`}>
         <a>{link}</a>
        </Link>
       </li>
      ))}
     </ul>
    </div>
    <div className="flex flex-col gap-y-8">
     <div className="flex pt-6 text-white gap-x-6">
      <CiTwitter className="w-7 h-7" />
      <CiFacebook className="w-7 h-7" />
      <CiYoutube className="w-7 h-7" />
     </div>
     <hr className="w-[160px]  text-gray-800" />
     <div className="flex text-white gap-x-4">
      <TfiWorld className="w-4 h-4" />
      English (United States)
      <HiChevronRight className="w-6 h-6" />
     </div>
    </div>
   </div>
  </div>
 );
}

export default Footer;
