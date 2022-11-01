import type { NextPage } from "next";
import Features from "../components/Features";
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
   <Features />
   <More />
  </div>
 );
};

export default Home;
