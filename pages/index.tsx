import type { NextPage } from "next";
import {
 Features,
 Hero,
 More,
 Navbar,
 Products,
 Testimonials,
} from "../components";

const Home: NextPage = () => {
 return (
  <div>
   <Navbar />
   <Hero />
   <Products />
   <Features />
   <More />
   <Testimonials />
  </div>
 );
};

export default Home;
