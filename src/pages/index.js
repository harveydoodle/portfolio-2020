import React from "react"

import Layout from "../components/layout"

// sections
import Work from "../pages/work"
import Contact from "../pages/contact"
import About from "../pages/about"

const IndexPage = () => (
  <Layout>
    <About />
    <Work />
    <Contact />
  </Layout>
)

export default IndexPage
