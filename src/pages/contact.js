import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TextCard from '../components/textcard'

const Contact = () => (
    <>
        <SEO title="Contact info" />
        <h2>Contact</h2>
        <span style={{display:'flex', justifyContent:'center'}}>
            <span style={{fontSize: '2rem', margin: '0 6px'}}>
                <FontAwesomeIcon icon="file" style={{color:"#000000"}} />
            </span>
            <span style={{fontSize: '2rem', margin: '0 6px'}}>
                <FontAwesomeIcon icon={["fab", "github"]} style={{color:"#000000"}} />
            </span>
            <span style={{fontSize: '2rem', margin: '0 6px'}}>
                <FontAwesomeIcon icon="envelope" style={{color:"#000000"}} />
            </span>
            <span style={{fontSize: '2rem', margin: '0 6px'}}>
                <FontAwesomeIcon icon={["fab", "linkedin"]} style={{color:"#000000"}} />
            </span>
        </span>
    </>
)

export default Contact
