import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ImageTextCard from '../components/imagetextcard'

const Work = () => (
    <>
        <SEO title="Page two" />
        <h2>Work & Projects</h2>
        <span>
            <ImageTextCard title="Quartermaster" text="Web and mobile apps that help homeowners digitally organize their home and connect with their commuinty, and pros to connect with homeowners and improve their neighbourhood presence."/>
            <ImageTextCard title="TENA" text="Web and mobile apps that tracks wetness of briefs to help caregivers provide better assistance."/>
            <ImageTextCard title="The Harvey App" text="iOS app inspired by my dog"/>
        </span>
    </>
)

export default Work
