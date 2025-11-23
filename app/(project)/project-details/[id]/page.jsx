import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Cta from "@/components/common/Cta";
import ProjectDetails from "@/components/otherPages/project/ProjectDetails";
import Link from "next/link";
import { allProjects } from "@/data/projects";
export const metadata = {
  title:
    "Project Details || Virtual Sys Technologies - Our Portfolio",
  description: "Explore detailed project information from Virtual Sys Technologies portfolio. See how we've helped businesses with web, mobile, and enterprise solutions.",
};
export default function Page({ params }) {
  const projectItem =
    allProjects.filter((elm) => elm.id == params.id)[0] || allProjects[0];
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
                  {projectItem.title}
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
                  <li>Project Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ProjectDetails projectItem={projectItem} />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
