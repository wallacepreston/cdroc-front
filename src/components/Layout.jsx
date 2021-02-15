import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import HeaderLinks from "components/Header/HeaderLinks.jsx";

import '../assets/fonts.0.0.1.css';
import '../assets/cdroc-style.css';

{/* data.wordpressPage.title */}
{/* <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} /> */}
const Layout = ({children, metaTitle}) => {
  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{metaTitle}</title>
    </Helmet>
    {/* <!-- branding header --> */}
    <header id="branding" className="cdroc-header cdroc-has-search">
      <div className="cdroc-header-container">
        <div className="cdroc-header-crest-title">
          <div className="cdroc-header-crest">
            <Link to="/"><img className="cdroc-crest-svg" src="/logo.png" alt="Link to CDROC home page"/></Link>
          </div>
          
        </div>
        
      </div>
    </header>

    {/* <!-- Mobile menu button --> */}
    <button className="cdroc-mobile-menu-button-bar cdroc-mobile-menu-button-bar-reversed cdroc-is-closed " data-menu="cdroc-top-menus" aria-label="Open menu" aria-expanded="false" aria-controls="cdroc-top-menus">Menu<svg aria-hidden="true" focusable="false"></svg><svg aria-hidden="true" focusable="false"></svg></button>

    {/* <!-- Main and secondary nav menus --> */}
    <div id="cdroc-top-menus" className="cdroc-is-visible cdroc-horizontal" aria-hidden="false">
      <div className="cdroc-main-nav">
        <nav className="cdroc-nav-menu cdroc-nav-menu-reverse" aria-label="Main Menu">
          <ul id="cdroc-main-nav">
            <HeaderLinks />
          </ul>
        </nav>
      </div>
    </div>

    {/* <!-- main content --> */}
    <main id="main">

      {/* <!-- Page title --> */}
      <div className="cdroc-row-full cdroc-row-page-title">
        <div className="cdroc-row">
          <div className="cdroc-col">
          </div>
        </div>
      </div>
      {/* <!-- Page content --> */}
      <div className="cdroc-full-row">
        {children}
      </div>
    </main>

    <footer id="colophon" className="cdroc-footer">
      <div className="cdroc-footer-content">
        <div className="cdroc-logo">
          <Link to="/"><img className="cdroc-crest-svg" src="/logo-transp.png" alt="Link to CDROC home page"/></Link>
        </div>
        <div className="cdroc-footer-menu" role="complementary">
          <h3 className="cdroc-footer-header">Quick Links</h3>
          <ul>
            <HeaderLinks />
          </ul>
        </div>
            
        <div className="cdroc-footer-contact">
          <h3 className="cdroc-footer-header">Contact Us</h3>
          <ul className="cdroc-contact-list">
            <li className="cdroc-contact-item">Email: <Link to="mailto:email@cdroc.org">karenw@cdroc.org</Link></li>
            <li className="cdroc-contact-item">Phone: <Link to="tel:888-888-8888">888-888-8888</Link></li>
            <li>
              <ul className="cdroc-social-icons">
                <li id="cdroc-icon-twitter" className="cdroc-social-icon">
                  <Link aria-label="twitter" to="https://twitter.com"><svg aria-hidden="true" focusable="false"></svg></Link>
                </li>
                <li id="cdroc-icon-instagram" className="cdroc-social-icon">
                  <Link aria-label="instagram" to="https://www.instagram.com"><svg aria-hidden="true" focusable="false"></svg></Link>
                </li>
                <li id="cdroc-icon-facebook" className="cdroc-social-icon">
                  <Link aria-label="facebook" to="https://facebook.com/"><svg aria-hidden="true" focusable="false"></svg></Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="cdroc-copyright">
        <p className="cdroc-contact-item">Feedback, questions or accessibility issues: <Link to="mailto:wallace.preston@gmail.com">Preston Wallace</Link></p>
        <p>© Board of the <Link to="/">Corporate Directors Roundtable of Orange County</Link></p>
      </div>
    </footer>
    
  </>
}

export default Layout;
