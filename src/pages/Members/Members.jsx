import React from "react";

import TeamSection from "./Sections/TeamSection.jsx";

import Layout from "components/Layout.jsx";


const Members = ({ classes, data, myName, ...rest }) => {
  
  return <>
    <Layout metaTitle="Members - Corporate Directors Roundtable of Orange County">
      <div className="cdroc-row cdroc-col">
        <div>
          <h2>Our Members</h2>
          <h5>
            The Corporate Directors Roundtable of Orange County’s objective is to enhance the performance of its member Directors in their business, legal and ethical responsibilities.  This objective is addressed through interactive and candid discussions among its members, and with outside experts, on challenges, emerging trends and leading practices.  Eligibility for membership is by invitation only, and is based on skills, experience, and potential contributions of candidates.  
          </h5>
          <TeamSection members={data && data.allWordpressPost.edges}/>
        </div>
      </div>
    </Layout>
  </>
}

export default Members;
