import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"
import Blurb from "../components/textblurb"

// sections
import Work from '../pages/work';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Some text blah blah.</h2>
    <p>Now go build something great.</p>
    <div style={{ display:'flex', flexDirection: 'row' }}>
      <Blurb text="first blurb"/>
      <Blurb text="first blurb"/>
      <Blurb text="first blurb"/>
    </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Work />
  </Layout>
)

export default IndexPage
