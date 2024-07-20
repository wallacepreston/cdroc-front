/**
 * External dependencies
 */
import React, { useState } from 'react';

/**
 * Internal dependencies
*/
import Layout from "components/Layout.jsx";
import Login from './Login';

const MembersOnly = ({data}) => {
	const [ user, setUser ] = useState( null );

  return <>
    <Layout metaTitle={`${data.wordpressPage.title} - Corporate Directors Roundtable of Orange County`}>
      {/* <!-- Page Spacer --> */}
      <div className="cdroc-row-full cdroc-row-page-title">
        <div className="cdroc-row">
          <div className="cdroc-col">
          </div>
        </div>
      </div>
      <div className="cdroc-row">
        <div className="cdroc-col">
					{
						!user ? (
								<Login data={data} setUser={setUser} />
							) : (
								<>
									<h1>{data.wordpressPage.title}</h1>
									<div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
								</>
							)
					}
        </div>
      </div>
    </Layout>
  </>
}

export default MembersOnly;

export const pageQuery = graphql`
  query {
    wordpressPage(slug: { eq: "members-only" }) {
      title
      excerpt
      content
    }
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Member"}}}}) {
      edges {
        node {
          slug
          wordpress_id
          acf {
            bio
            image
            name
            affiliations
            title
            email
            member_passcode
          }
          type
          categories {
            name
          }
        }
      }
    }
  }
`