import React from "react";
import Hero from "../Components/Layout/hero";
import Counter from "../Components/UI/Counter";
import WhoWeAre from "../Components/Layout/WhoWeAre";
import Brands from "../Components/Layout/Brands";
import Services from "../Components/Layout/Services";
import Cta from "../Components/Layout/Cta";
import OurApproach from "../Components/Layout/OurApproach";
import OurFeedbacks from "../Components/Layout/OurFeedbacks";
import Navbar from "../Components/Layout/NavBar";
import BlogSection from "../Components/Layout/BlogSection";

export default function Home() {
  return (
    <div>
       <Navbar />
        <Hero/>
        <Counter/>
        <WhoWeAre/>
        <Brands/>
        <Services/>
        <Cta/>  
        <OurApproach/>
        <OurFeedbacks/>
        <BlogSection/>
    </div>
  );
}