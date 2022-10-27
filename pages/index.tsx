import type { NextPage } from "next";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home: NextPage = () => {
 return (
  <div>
   <Navbar />
   <Hero />
   <Products />
  </div>
 );
};

export default Home;
