import React from "react"
import { Link } from "gatsby"
import MarketingHighlightImage from "./marketing-highlight-image";
import PropTypes from "prop-types";

import "../sass/marketing-highlight.scss"

const MarketingHighlight = ({ label, title, body, cta }) => (
    <Link to="/page-2/" className="marketing-highlight">
        <div className="marketing-highlight__image">
            <MarketingHighlightImage/>
        </div>
        <div className="marketing-highlight__body">
            <h3 className="marketing-highlight__type category-brand__text--knock-out"><span>{ label }</span></h3>
            <h3 className="marketing-highlight__title category-brand__text">{ title }</h3>
            <p>{ body }</p>
            <span className="marketing-highlight__cta category-brand__arrow">{ cta }</span>
        </div>
    </Link>
)

MarketingHighlight.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    cta: PropTypes.string,
}

export default MarketingHighlight
