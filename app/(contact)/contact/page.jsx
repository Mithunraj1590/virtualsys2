import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Cta from "@/components/common/Cta";
import Contact from "@/components/otherPages/contact/Contact";
import Map from "@/components/otherPages/contact/Map";
import Link from "next/link";
export const metadata = {
  title: "Contact Us || Virtual Sys Technologies - Get In Touch",
  description: "Contact Virtual Sys Technologies at our Infopark, Kerala office. Reach us at +91 6238 933 006, +91 478 255 4004 or email info@vstbiz.com",
};
export default function Page() {
  return (
    <>
      <Header1 />
      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Contact
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link scroll={false} href={`/`}>
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-chevrons-right" />
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Map />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
