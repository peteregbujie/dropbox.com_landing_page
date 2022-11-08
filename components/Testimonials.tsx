import { HiChevronRight } from "react-icons/hi";
import Slider from "./Slider";

function Testimonials(): JSX.Element {
 return (
  <section className="bg-[#1E1919] text-white h-50rem]">
   <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
     <h2 className="text-3xl font-bold sm:text-4xl">
      Trusted by over 700 million registered users and 600,000 teams
     </h2>
     <p className="my-6 underline underline-offset-4 decoration-white hover:no-underline ">
      View more customer stories
     </p>
    </div>
    <div className="py-8">
     <Slider />
    </div>

    <div className="z-10 flex flex-col justify-between pt-8 lg:flex-row gap-y-6">
     <h2 className="text-3xl font-bold text-center sm:text-4xl ">
      For all things worth sharing.
     </h2>
     <button className="flex items-center justify-between w-full px-4 py-6 text-lg text-gray-800 bg-blue-600 hover:opacity-75">
      Explore plans
      <HiChevronRight className="w-6 h-6" />
     </button>
    </div>
   </div>
  </section>
 );
}

export default Testimonials;
