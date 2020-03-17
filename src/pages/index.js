import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/layout"

// sections
import Work from '../pages/work';
import Contact from '../pages/contact';
import About from '../pages/about';

const text = [
  
]

const IndexPage = () => (
  <Layout>
    <About />
    <Work />
    <Contact />
  </Layout>
)

export default IndexPage
