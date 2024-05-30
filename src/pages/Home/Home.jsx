import React from "react";
import Layout from "components/Layout.jsx";

const Home = () => {
  const now = new Date();
  const past = new Date('2008-10-01');
  const diffInMilliSeconds = Math.abs(now - past);
  const diffInYears = Math.floor(diffInMilliSeconds / (1000 * 60 * 60 * 24 * 365));
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
          
          <h1 id="cdroc-home-title">Celebrating {diffInYears} Years of Excellence in the Boardroom</h1>
          
          <h3>Special Discussion Meetings &amp; Events</h3>
          <p>Our special meetings and events are scheduled opportunistically during the year depending on the interests of our members, timeliness of topics, and the availability of invited speakers and guests.</p>
          <h3>Scholarship Program</h3>
          <p>Two academic scholarship are granted annually by the CDROC to Latinx students enrolled at UC Irvine's Schools of Business and Computer Sciences.</p>
          <h3>Mentorship Program</h3>
          <p>The CDROC has a mentorship program with UC Irvine undergraduate students enrolled in either the School of Business or School of Computer Sciences. Currently four mentorships are active.</p>

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
