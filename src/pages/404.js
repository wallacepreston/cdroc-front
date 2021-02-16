import React from "react";

import Layout from "components/Layout.jsx";

const NotFound = () => {
  return <>
    <Layout metaTitle={`404 - Corporate Directors Roundtable of Orange County`}>
      {/* <!-- Page Spacer --> */}
      <div className="cdroc-row-full cdroc-row-page-title">
        <div className="cdroc-row">
          <div className="cdroc-col">
          </div>
        </div>
      </div>
      <div className="cdroc-row cdroc-col">
        <div>
          <h1>Oops!</h1>
          <div>There must be a mistake; we couldn't find that page! Try selecting from the menu above.</div>
        </div>
      </div>
    </Layout>
  </>
}

export default NotFound;
