import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"
import Blurb from "../components/textblurb"

// sections
import Work from '../pages/work';
import Contact from '../pages/contact';

const text = [
  
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <h2>Hi, I'm Annie</h2>
    <div style={{ display:'flex', flexDirection: 'row' }}>
      <Blurb text="about me" summary='I am a software developer based in Toronto with a background in finance. Currently, I am working at a startup focused on improving hyperlocal communities.'/>
      <Blurb text="tech stack" summary="JavaScript / HTML / CSS / React / React Native / Redux / PostgreSQL / MongoDB / Jest / Detox / XCode / Android Studio / Git"/>
      <Blurb text="interests" summary="Outside of work, you can find me hiking with my dog, listening to podcasts, and training for my first 10k."/>
    </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Work />
    <Contact />
  </Layout>
)

export default IndexPage
