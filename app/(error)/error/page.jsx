import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Cta from "@/components/common/Cta";
import NotFound from "@/components/otherPages/NotFound";
import Link from "next/link";
export const metadata = {
  title:
    "Page Not Found || Virtual Sys Technologies",
  description: "The page you are looking for could not be found. Visit Virtual Sys Technologies homepage for dedicated offshore development teams and IT solutions.",
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
                  Page Not Found
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
                  <li>Page Not Found</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <NotFound />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
