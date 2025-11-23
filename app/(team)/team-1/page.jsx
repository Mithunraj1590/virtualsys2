import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Cta from "@/components/common/Cta";
import Team1 from "@/components/otherPages/team/Team1";
import Link from "next/link";
export const metadata = {
  title: "Our Team || Virtual Sys Technologies - Expert Development Team",
  description: "Meet the expert team at Virtual Sys Technologies - dedicated professionals delivering exceptional offshore development services and IT solutions.",
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
                  Team 01
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
                  <li>Team 01</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Team1 />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
