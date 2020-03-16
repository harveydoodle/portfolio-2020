import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TextCard from '../components/textcard'

import resume from '../files/resume.pdf'

const Contact = () => (
    <>
        <SEO title="Contact info" />
        <h2>Contact</h2>
        <span style={{display:'flex', justifyContent:'center'}}>
            <a style={{fontSize: '2rem', margin: '0 6px'}} target="_blank" href={resume}>
                <FontAwesomeIcon icon="file" style={{color:"#000000"}} />
            </a>
            <a style={{fontSize: '2rem', margin: '0 6px'}} target="_blank" href="https://github.com/harveydoodle">
                <FontAwesomeIcon icon={["fab", "github"]} style={{color:"#000000"}} />
            </a>
            <a style={{fontSize: '2rem', margin: '0 6px'}} target="_blank" href="mailto:linye.zhang18@gmail.com">
                <FontAwesomeIcon icon="envelope" style={{color:"#000000"}} />
            </a>
            <a style={{fontSize: '2rem', margin: '0 6px'}} target="_blank" href="https://www.linkedin.com/in/annielyzhangs">
                <FontAwesomeIcon icon={["fab", "linkedin"]} style={{color:"#000000"}} />
            </a>
        </span>
    </>
)

export default Contact
