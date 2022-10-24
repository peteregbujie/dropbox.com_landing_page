import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
 HiChevronDown,
 HiChevronRight,
 HiMenu,
 HiOutlineX,
} from "react-icons/hi";
import { logo } from "../assets";
import {
 Contact,
 navLinks1,
 navLinks2,
 Products,
 Solutions,
 Why,
} from "../constants";

function Navbar() {
 const [nav, setNav] = useState<boolean>(false);

 const handleNav = () => setNav((prevState) => !prevState);

 return (
  <header aria-label="Site Header" className="max-w-[1640] mx-auto bg-white">
   <div className="items-center justify-between hidden w-[full] md:flex">
    <nav
     aria-label="Site Nav"
     className="flex items-center justify-around px-4"
    >
     <Image src={logo} alt="dropbox" width={124} height={32} />
     <ul className="flex items-center justify-around px-4 text-lg">
      {navLinks1.map((link, index) => (
       <li key={link.id}>
        <Link href={`${link.id}`}>
         <a className="p-5 text-gray-700 hover:bg-zinc-300">{link.title}</a>
        </Link>
       </li>
      ))}
     </ul>
    </nav>
    <nav
     aria-label="Site Nav"
     className="flex items-center justify-around px-4"
    >
     <ul className="flex items-center justify-around px-4 text-lg">
      {navLinks2.map((link) => (
       <li key={link.id}>
        <Link href={`${link.id}`}>
         <a className="p-5 text-gray-700 hover:bg-zinc-300">{link.title}</a>
        </Link>
       </li>
      ))}
     </ul>
     <button className="flex justify-between items-center py-2 px-4 text-white text-lg font-bold  bg-blue-600 w-[180px] hover:opacity-75">
      Get started <HiChevronRight />
     </button>
    </nav>
   </div>
   {/* overlay */}
   {nav ? (
    <div className="hidden lg:fixed top-[80px] z-10 w-full h-screen bg-black/60"></div>
   ) : (
    ""
   )}
   {/* mobile nav */}
   <div className="flex justify-between w-full p-4 md:hidden">
    <Image src={logo} alt="dropbox" width={124} height={32} />
    <div className="flex">
     <ul className="flex items-center px-4 text-lg">
      {navLinks2.map((link) => (
       <li key={link.id}>
        <Link href={`${link.id}`}>
         <a className="p-5 text-gray-700 hover:bg-zinc-300">{link.title}</a>
        </Link>
       </li>
      ))}
     </ul>

     <div
      className="flex items-center justify-end flex-1 lg:hidden"
      onClick={handleNav}
     >
      {nav ? (
       <HiOutlineX className="w-7 h-7" />
      ) : (
       <HiMenu className="w-7 h-7" />
      )}
     </div>
    </div>
   </div>

   <div
    className={
     !nav
      ? "hidden"
      : " bg-[#f7f5f2] flex flex-col justify-center items-center w-full py-8 md:hidden"
    }
   >
    <div>
     <Disclosure>
      {({ open }) => (
       <>
        <Disclosure.Button className="flex justify-between w-full py-2 text-sm font-medium text-left text-gray-500">
         <span className="text-lg"> Why Dropbox?</span>
         <HiChevronDown
          className={`${open ? "rotate-180 transform" : ""} h-6 w-6`}
         />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-blue-500">
         <ul>
          {Why.map((link) => (
           <li
            key={link.id}
            className={` pb-4 ${
             link.id == "resources" ? "font-bold" : "font-normal"
            }`}
           >
            <Link href={`${link.id}`}>
             <a
              className={`text-gray-700 hover:bg-zinc-300 ${
               link.id == "overview" ? "pb-6" : "pb-2"
              }`}
             >
              {link.title}
             </a>
            </Link>
           </li>
          ))}
         </ul>
        </Disclosure.Panel>
       </>
      )}
     </Disclosure>

     <Disclosure as="div" className="mt-2">
      {({ open }) => (
       <>
        <Disclosure.Button className="flex justify-between w-full py-2 text-sm font-medium text-left text-gray-500">
         <span className="text-lg">Products</span>
         <HiChevronDown
          className={`${open ? "rotate-180 transform" : ""} h-6 w-6`}
         />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
         <span className="font-bold ">Do more than store with Dropbox</span>
         <ul className="flex flex-col items-start pt-4">
          {Products.map(({ title, img, subtitle }) => (
           <li key={title} className="flex self-start pb-4 text-sm gap-x-4">
            <Image src={img} alt="dropbox" width={40} height={32} />
            <div className="flex flex-col gap-y-2">
             <span>{title}</span>
             <span>{subtitle}</span>
            </div>
           </li>
          ))}
         </ul>
        </Disclosure.Panel>
       </>
      )}
     </Disclosure>

     <Disclosure as="div" className="mt-2">
      {({ open }) => (
       <>
        <Disclosure.Button className="flex justify-between w-full py-2 text-sm font-medium text-left text-gray-500">
         <span className="text-lg">Solutions</span>
         <HiChevronDown
          className={`${open ? "rotate-180 transform" : ""} h-6 w-6`}
         />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
         <ul>
          {Solutions.map((link, index) => (
           <li key={index} className="pb-4">
            <Link href={`${link}`}>
             <a className="text-gray-700 hover:bg-zinc-300">{link}</a>
            </Link>
           </li>
          ))}
         </ul>
        </Disclosure.Panel>
       </>
      )}
     </Disclosure>

     <Disclosure as="div" className="mt-2">
      {({ open }) => (
       <>
        <Disclosure.Button className="flex justify-between w-full py-2 text-sm font-medium text-left text-gray-500">
         <span className="text-lg">Contact</span>
         <HiChevronDown
          className={`${open ? "rotate-180 transform" : ""} h-6 w-6`}
         />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
         <ul>
          {Contact.map((link, index) => (
           <li key={index} className="pb-4">
            <Link href={`${link.title}`} className="pb-4">
             <a className="text-gray-700 hover:bg-zinc-300 ">{link.title}</a>
            </Link>
           </li>
          ))}
         </ul>
        </Disclosure.Panel>
       </>
      )}
     </Disclosure>

     <Disclosure as="div" className="mt-2">
      {({ open }) => (
       <>
        <Disclosure.Button className="flex justify-between w-full py-2 text-sm font-medium text-left text-gray-500">
         <span className="text-lg">Get app</span>
         <HiChevronDown
          className={`${open ? "rotate-180 transform" : ""} h-6 w-6`}
         />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
         <ul className="flex flex-col gap-y-4">
          <li>
           <Link href="">
            <a className="text-gray-700 hover:bg-zinc-300 ">Desktop app</a>
           </Link>
          </li>
          <li>
           <Link href="">
            <a className="text-gray-700 hover:bg-zinc-300 ">Mobile app</a>
           </Link>
          </li>
         </ul>
        </Disclosure.Panel>
       </>
      )}
     </Disclosure>
     <hr className="w-full py-8 " />
     <hr className="w-full" />
     <button className="flex justify-between w-[80vw] items-center py-6 px-4 text-white text-lg font-bold  bg-blue-600 hover:opacity-75">
      Get started <HiChevronRight className="w-6 h-6" />
     </button>
    </div>
   </div>
  </header>
 );
}

export default Navbar;
