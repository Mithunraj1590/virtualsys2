import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import About from "@/components/homes/home-2/About";
import Contact from "@/components/homes/home-2/Contact";
import Facts from "@/components/homes/home-2/Facts";
import Hero from "@/components/homes/home-2/Hero";
import Skills from "@/components/homes/home-2/Skills";
import Testimonials from "@/components/homes/home-2/Testimonials";
import TextSlider from "@/components/homes/home-2/TextSlider";
import VideoBox from "@/components/homes/home-2/VideoBox";
import React from "react";
export const metadata = {
  title: "Home 2 || Virtual Sys Technologies - Dedicated Offshore Development Teams",
  description: "Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams. 17+ years of experience in IT staffing and managed software services.",
};
export default function page() {
  return (
    <>
      <Header2 />
      <main className="main position-relative" id="mains">
        <Hero />
        <Facts />
        <About />
        <TextSlider />
        <VideoBox />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer1 />
    </>
  );
}
