import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TextCard from '../components/textcard'

const Contact = () => (
    <>
        <SEO title="Contact info" />
        <h2>Contact</h2>
        <span style={{display:'flex', justifyContent:'center'}}>
            <span style={{fontSize: '2rem', margin: '0 6px'}}>
                <i class="fa fa-file"></i>
            </span>
            <span style={{fontSize: '2rem', margin: '0 6px'}}>
                <i class="fa fa-github"></i>
            </span>
            <span style={{fontSize: '2rem', margin: '0 6px'}}>
                <i class="fa fa-envelope"></i>
            </span>
            <span style={{fontSize: '2rem', margin: '0 6px'}}>
                <i class="fa fa-linkedin"></i>
            </span>
        </span>
    </>
)

export default Contact
