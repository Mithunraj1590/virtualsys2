import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Cta from "@/components/common/Cta";
import TeamDetails from "@/components/otherPages/team/TeamDetails";
import Link from "next/link";
import { allTeammembers } from "@/data/team";
export const metadata = {
  title:
    "Team Member || Virtual Sys Technologies - Expert Development Team",
  description: "Learn more about our team member at Virtual Sys Technologies - dedicated professionals delivering exceptional offshore development services.",
};
export default function Page({ params }) {
  const teamMember =
    allTeammembers.filter((elm) => elm.id == params.id)[0] || allTeammembers[0];
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
                  {teamMember.name}
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
                  <li>Team Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <TeamDetails teamMember={teamMember} />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
