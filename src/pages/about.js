import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
    <>
        <SEO title="Home" />
        <h2>Hi <Emoji symbol="👋" label="wave"/> I'm Annie</h2>
        <div style={{ display:'flex', flexDirection: 'row' }}>
        <Blurb text="about me" summary='I am a software developer based in Toronto with a background in finance. Currently, I am working at a startup focused on improving hyperlocal communities.'/>
        <Blurb text="tech stack" summary="JavaScript / HTML / CSS / React / React Native / Redux / PostgreSQL / MongoDB / Jest / Detox / XCode / Android Studio / Git"/>
        <Blurb text="interests" summary="Outside of work, you can find me hiking with my dog, listening to podcasts, and training for my first 10k."/>
        </div>
    </>
)

export default About
