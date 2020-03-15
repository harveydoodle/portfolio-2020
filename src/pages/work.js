import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { workConstants } from '../constants/work'
import TextCard from '../components/textcard'


const Work = () => (
    <>
        <SEO title="Page two" />
        <h2>Work & Projects</h2>
        <span style={{display:'flex'}}>
          {Object.values(workConstants).map((each, key) => <TextCard {...each} />)}
        </span>
    </>
)

export default Work
