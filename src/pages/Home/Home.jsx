import React from "react";
import { Link } from 'gatsby'

import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Layout from "components/Layout.jsx";

{/* data.wordpressPage.title */}
{/* <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} /> */}
const Home = () => {
  return <>
    <Layout>
      
      <div className="cdroc-row cdroc-flex-reverse">

        {/* <!-- Body content --> */}
        <div className="cdroc-col cdroc-body">
          
          <h2>Celebrating 13 Years of Excellence in the Boardroom</h2>
          <h3>Upcoming Meetings</h3>
          <b>Quarterly Member Meetings – Wednesdays at 7:30 a.m.</b>
          <ul>
            <li>March 31, 2021</li>
            <li>March 31, 2021</li>
            <li>June 30, 2021</li>
            <li>September 29, 2021</li>
          </ul>
          <h3>Special Discussion Meetings &amp; Events</h3>
          <p>Our periodic “special discussion” meetings are scheduled during the year depending on the interests of our members, timeliness of topics, and the availability of invited speakers and our guests.</p>
          <h3>Scholarship Program</h3>
          <p>An academic scholarship award is granted each year by the CDROC to a high performing graduate student enrolled in The Paul Merage School of Business at UC Irvine. The 2019 Award Winner was Natalie Tincopa, and the 2020 Award Winner was Omar Ramil.</p>

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
