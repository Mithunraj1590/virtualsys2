import Footer1 from "@/components/footers/Footer1";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-3/About";
import DownloadApp from "@/components/homes/home-3/DownloadApp";
import Features from "@/components/homes/home-3/Features";
import Hero from "@/components/homes/home-3/Hero";
import Screenshoots from "@/components/homes/home-3/Screenshoots";
import Service2 from "@/components/homes/home-3/Service2";
import Skills from "@/components/homes/home-3/Skills";
import Testimonials from "@/components/homes/home-3/Testimonials";
export const metadata = {
  title: "Home 3 || Virtual Sys Technologies - Dedicated Offshore Development Teams",
  description: "Virtual Sys Technologies empowers global businesses to design, build, and scale digital products through dedicated offshore development teams. 17+ years of experience in IT staffing and managed software services.",
};
export default function Page() {
  return (
    <>
      <Header1 />
      <main className="main position-relative" id="mains">
        <Hero />
        <About />
        <Features />
        <Service2 />
        <Screenshoots />
        <Skills />
        <Testimonials />
        <DownloadApp />
      </main>
      <Footer2 />
    </>
  );
}
