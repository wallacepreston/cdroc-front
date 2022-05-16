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
          <b>Quarterly Member Meetings - Wednesdays at 7:30 a.m.</b>
          <ul>
            <li>October 5, 2022</li>
            <li>January 4, 2023</li>
            <li>April 5, 2023</li>
            <li>June 28, 2023</li>
          </ul>
          <h3>Special Discussion Meetings &amp; Events</h3>
          <p>Our special meetings and events are scheduled opportunistically during the year depending on the interests of our members, timeliness of topics, and the availability of invited speakers and guests.</p>
          <h3>Scholarship Program</h3>
          <p>Two academic scholarship are granted annually by the CDROC to Latinx students enrolled at UC Irvine's Schools of Business and Computer Sciences.</p>

          <b>Established In Orange County, California on October 1, 2008</b>
          <br/><br/>

        </div>

        {/* <!-- Sidebar content --> */}
        <aside className="cdroc-col cdroc-sidebar">

          {/* <!-- Sidbar callout box --> */}
          <div className="cdroc-sidebar-box">
            <h3>Mission</h3>

            <p>By and for Board Members, the Corporate Directors Roundtable of Orange County's objective is to enhance
  the performance of its member Directors in their business, legal and ethical responsibilities. This objective is
  addressed through interactive and candid discussions among its members, and with outside experts, on
  challenges, emerging trends and leading practices. Eligibility for membership is by invitation only, and is
  based on skills, experience, and potential contributions of candidates.</p>

          </div>

          {/* <!-- Sidbar secondary box --> */}
          {/* <div className="cdroc-sidebar-box-secondary">
            placeholder for what was mentorship program
          </div> */}

        </aside>
      </div>

    </Layout>
    
  </>
}

export default Home;
