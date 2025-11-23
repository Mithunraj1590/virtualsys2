import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-1/About";
import Facts from "@/components/homes/home-1/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Process from "@/components/homes/home-1/Process";
import Services2 from "@/components/homes/home-1/Services2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import VideoBox from "@/components/homes/home-1/VideoBox";
export const metadata = {
  title: "Home || Virtual Sys Technologies - Dedicated Offshore Development Teams",
  description: "Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams. 17+ years of experience in IT staffing and managed software services.",
};
export default function Home1() {
  return (
    <>
      <Header1 />
      <main className="main position-relative" id="mains">
        <Hero />
        <About />
        <Services2 />
        <VideoBox />
        <Process />
        <Facts />
        <Testimonials />
      </main>
      <Footer1 />
    </>
  );
}
