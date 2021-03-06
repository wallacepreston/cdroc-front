import React from "react";
import Layout from "components/Layout.jsx";

const Home = () => {
  return <>
    <Layout metaTitle="Corporate Directors Roundtable of Orange County">
      {/* <!-- Page spacer --> */}
      <div className="cdroc-row-full cdroc-row-page-title">
        <div className="cdroc-row">
          <div className="cdroc-col">
          </div>
        </div>
      </div>
      <div className="cdroc-row cdroc-flex-reverse">

        {/* <!-- Body content --> */}
        <div className="cdroc-col cdroc-body">
          
          <h1 id="cdroc-home-title">Celebrating 13 Years of Excellence in the Boardroom</h1>
          <h3>Upcoming Meetings</h3>
          <b>Quarterly Member Meetings – Wednesdays at 7:30 a.m.</b>
          <ul>
            <li>June 30, 2021</li>
            <li>September 29, 2021</li>
            <li>January 5, 2022</li>
            <li>April 6, 2022</li>
          </ul>
          <h3>Special Discussion Meetings &amp; Events</h3>
          <p>Our special meetings and events are scheduled opportunistically during the year depending on the interests of our members, timeliness of topics, and the availability of invited speakers and guests.</p>
          <h3>Scholarship Program</h3>
          <p>An academic scholarship award is granted each year by the CDROC to a high performing graduate student enrolled in The Paul Merage School of Business at UC Irvine. The 2020 Award Winner was Omar Ramil, and the 2021 Award Winner was Hope Hart.</p>

          <b>Established In Orange County, California on October 1, 2008</b>

        </div>

        {/* <!-- Sidebar content --> */}
        <aside className="cdroc-col cdroc-sidebar">

          {/* <!-- Sidbar callout box --> */}
          <div className="cdroc-sidebar-box">
            <h3>Mission</h3>

            <p>By and for Board Members, the Corporate Directors Roundtable of Orange County’s objective is to enhance
  the performance of its member Directors in their business, legal and ethical responsibilities. This objective is
  addressed through interactive and candid discussions among its members, and with outside experts, on
  challenges, emerging trends and leading practices. Eligibility for membership is by invitation only, and is
  based on skills, experience, and potential contributions of candidates.</p>

          </div>

          {/* <!-- Sidbar secondary box --> */}
          <div className="cdroc-sidebar-box-secondary">
            <h3>Mentorship Program</h3>

            <p>The CDROC has a mentorship program with UC Irvine undergraduate students enrolled in either the School of
  Business or School of Computer Sciences. Currently four mentorships are active.</p>

          </div>

        </aside>
      </div>

    </Layout>
    
  </>
}

export default Home;
