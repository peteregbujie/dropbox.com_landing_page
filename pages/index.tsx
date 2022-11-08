import type { NextPage } from "next";
import {
 Features,
 Footer,
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
   <Footer />
  </div>
 );
};

export default Home;
