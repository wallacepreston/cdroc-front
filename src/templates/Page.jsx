import React from "react";
import { graphql } from "gatsby";

import Layout from "components/Layout.jsx";

const Page = ({data}) => {
  return <>
    <Layout metaTitle={`${data.wordpressPage.title} - Corporate Directors Roundtable of Orange County`}>
      {/* <!-- Page title --> */}
      <div className="cdroc-row-full cdroc-row-page-title">
        <div className="cdroc-row">
          <div className="cdroc-col">
          </div>
        </div>
      </div>
      <div className="cdroc-row cdroc-col">
        <div>
          <h1>{data.wordpressPage.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
        </div>
      </div>
    </Layout>
  </>
}

export default Page;

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    }
  }
`