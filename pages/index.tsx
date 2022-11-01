import type { NextPage } from "next";
import Hero from "../components/Hero";
import More from "../components/More";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home: NextPage = () => {
 return (
  <div>
   <Navbar />
   <Hero />
   <Products />
   <More />
  </div>
 );
};

export default Home;
