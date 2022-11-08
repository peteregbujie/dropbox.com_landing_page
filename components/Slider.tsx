import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Testimonials_Data } from "../constants";

type TestimonialProps = {
 testimonial: string;
 image: StaticImageData;
 name: string;
};

function Slider(): JSX.Element {
 const [slides, setSlides] = useState<TestimonialProps[]>(Testimonials_Data);
 const [current, setCurrent] = useState<number>(0);
 const length = slides.length;

 const nextSlide = () => {
  setCurrent(current === 0 ? length - 1 : current - 1);
 };

 const prevSlide = () => {
  setCurrent(current === length - 1 ? 0 : current + 1);
 };

 return (
  <section className="relative flex flex-col items-center justify-center mx-auto text-white group">
   <HiChevronRight
    className="invisible h-[50px] w-[50px]  group-hover:visible p-12 bg-[#1E1919]  hover:opacity-75  place-items-center absolute top-[30%] right-0 transition-colors delay-300 ease-linear duration-300 z-10 cursor-pointer "
    onClick={nextSlide}
   />
   <HiChevronLeft
    className=" invisible h-[50px] w-[50px]  group-hover:visible p-12 bg-[#1E1919]  hover:opacity-75  place-items-center absolute top-[30%] left-0 transition-colors delay-300 ease-linear duration-300 z-10 cursor-pointer"
    onClick={prevSlide}
   />
   {slides.map((slide, index) => {
    const { testimonial, name, image } = slide;
    return (
     <article
      className={`${
       index === current
        ? "duration-1000 opacity-100"
        : " duration-1000opacity-0"
      } relative `}
      key={index}
     >
      {index === current && (
       <div className="grid grid-cols-2">
        <Image
         src={image}
         alt="testimonial"
         width={620}
         height={453}
         objectFit="cover"
        />
        <div
         className={`${
          image.src === "/_next/static/media/slide1.5450bbfa.jpg"
           ? "bg-rose-800"
           : image.src === "/_next/static/media/slide2.29f735c9.jpg"
           ? "bg-orange-600"
           : image.src === "/_next/static/media/slide3.3ff39151.jpg"
           ? "bg-cyan-700"
           : image.src === "/_next/static/media/slide4.fafe2feb.jpg"
           ? "bg-lime-400"
           : image.src === "/_next/static/media/slide5.6c5626a9.jpg"
           ? "bg-fuchsia-900"
           : image.src === "/_next/static/media/slide6.c5b42aed.jpg"
           ? "bg-red-300"
           : image.src === "/_next/static/media/slide7.e730ecc1.jpg"
           ? "bg-amber-300"
           : ""
         } flex flex-col justify-between py-6 pl-4 `}
        >
         <div className="max-w-lg">
          <blockquote>
           <p className="pb-4 text-lg font-semibold">{testimonial}</p>
          </blockquote>
          <span className="underline decoration-gray-300 hover:decoration-white underline-offset-4 ">
           Read the full story
          </span>
         </div>
         <div>
          <figcaption>
           <p>{name}</p>
          </figcaption>
         </div>
        </div>
       </div>
      )}
     </article>
    );
   })}
   <div className="flex mx-auto mt-12">
    <HiChevronLeft
     className=" h-[40px] w-[40px]  p-2  hover:opacity-75 transition duration-300 z-10 cursor-pointer "
     onClick={nextSlide}
    />
    <div className="pt-2">
     {current + 1}
     {""}/{length}
    </div>

    <HiChevronRight
     className="h-[40px] w-[40px]  p-2  hover:opacity-75   transition duration-300 z-10 cursor-pointer"
     onClick={prevSlide}
    />
   </div>
  </section>
 );
}

export default Slider;
