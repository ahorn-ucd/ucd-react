import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import MarketingHighlight from "../components/marketing-highlight";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <MarketingHighlight label="Go" title="My Marketing Highlight" body="Lorem ipsum dolar sit amet" cta="Check it out."/>
  </Layout>
)

export default IndexPage
