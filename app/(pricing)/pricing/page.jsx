import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Cta from "@/components/common/Cta";
import Pricing from "@/components/homes/home-3/Pricing";
import Link from "next/link";
export const metadata = {
  title: "Pricing || Virtual Sys Technologies - Transparent Pricing Plans",
  description: "Virtual Sys Technologies offers flexible pricing models - Dedicated Teams, Managed Software, or Fixed Projects. Transparent pricing and performance-driven results.",
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
                  Pricing
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
                  <li>Pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Pricing />
        <div className="pb-300"></div>
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
