import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <header className="l-header header" role="banner">
        <div className="header__bar">
            <a href="#primary-nav" className="nav-toggle js-nav-toggle" aria-controls="primary-nav"
               aria-expanded="false" aria-label="Toggle Main Menu">
                <span className="nav-toggle__icon nav-toggle__icon--menu">Menu</span>
            </a>
            <div className="header__fixed-site-name"><a href="#">SiteFarm</a></div>
            <div className="l-container"><a href="https://www.ucdavis.edu/" className=""><img
                src="..&#x2F;..&#x2F;images&#x2F;uc-logo-white.svg" className="ucd-logo" alt="UC Davis Logo"/></a>
            </div>
        </div>
        <div className="header__branding">
            <div className="l-container o-media">
                <div className="o-media__figure"><a href="#" className=""><img
                    src="..&#x2F;..&#x2F;images&#x2F;site-logo.svg" className="site-logo" alt="Site Logo"/></a>
                </div>
                <div className="o-media__body">
                    <h1 className="header__site-name">{siteTitle}</h1>
                    <div className="header__slogan">Websites Grown Here</div>
                </div>
            </div>
        </div>
        <div className="l-navbar navbar menu--closed">
            <div className="l-container--navigation off-canvas off-canvas--left">
                <div className="off-canvas__container">
                    <nav id="primary-nav" className="primary-nav primary-nav--superfish" aria-label="Main Menu">
                        <ul className="menu">
                            <li><a href="#">About Us<span className="submenu-toggle"><span
                                className="submenu-toggle__icon">+</span></span></a>
                                <ul className="menu">
                                    <li><a href="#">Our Story</a></li>
                                    <li><a href="#">Initiatives</a></li>
                                    <li><a href="#">Facts &amp; Rankings<span className="submenu-toggle"><span
                                        className="submenu-toggle__icon">+</span></span></a>
                                        <ul className="menu">
                                            <li><a href="#">Child Item</a></li>
                                            <li><a href="#">Child Item 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Locations &amp; Maps</a></li>
                                    <li><a href="#">Visit UC Davis</a></li>
                                    <li><a href="#">UC Davis Health</a></li>
                                    <li><a href="#">Administration</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Admissions</a></li>
                            <li><a href="#">Academics</a></li>
                            <li><a href="3">Research</a></li>
                            <li><a href="#">Campus Life</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </nav>
                    <div className="l-quick-links">
                        <h2><a href="#" className="quick-links__title" aria-controls="quick-links" aria-expanded="false"
                               aria-label="Toggle Quick Links Menu">
                            Quick Links<span className="submenu-toggle"><span className="submenu-toggle__icon">+</span></span>
                        </a></h2>
                        <nav id="quick-links" className="quick-links u-hidden--visually quick-links--home-site"
                             aria-label="Quick Links Menu">
                            <ul className="menu">
                                <li><a href="#">myucdavis</a></li>
                                <li><a href="#">myadmissions</a></li>
                                <li><a href="#">Make a Gift to UC Davis</a></li>
                                <li><a href="#">Calendar</a></li>
                                <li><a href="#">Campus Map</a></li>
                                <li><a href="#">Locations &amp; Parking</a></li>
                                <li><a href="#">Visit</a></li>
                                <li><a href="#">Apply</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Athletics</a></li>
                                <li><a href="#">Academic Dates</a></li>
                                <li><a href="#">SmartSite</a></li>
                                <li><a href="#">Course Catalog</a></li>
                                <li><a href="#">Schedule Builder</a></li>
                                <li><a href="#">Student Health</a></li>
                                <li><a href="#">Alumni</a></li>
                                <li><a href="#">UC Davis Stores</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
