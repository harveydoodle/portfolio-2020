import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TextCard from "../components/textcard"

import resume from "../files/resume.pdf"

const Contact = () => (
  <>
    <h2>Contact</h2>
    <span
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <a
        style={{ fontSize: "2.5rem", margin: 10 }}
        target="_blank"
        href={resume}
      >
        <FontAwesomeIcon icon="file" style={{ color: "#000000" }} />
      </a>
      <a
        style={{ fontSize: "2.5rem", margin: 10 }}
        target="_blank"
        href="https://github.com/harveydoodle"
      >
        <FontAwesomeIcon
          icon={["fab", "github"]}
          style={{ color: "#000000" }}
        />
      </a>
      <a
        style={{ fontSize: "2.5rem", margin: 10 }}
        target="_blank"
        href="mailto:linye.zhang18@gmail.com"
      >
        <FontAwesomeIcon icon="envelope" style={{ color: "#000000" }} />
      </a>
      <a
        style={{ fontSize: "2.5rem", margin: 10 }}
        target="_blank"
        href="https://www.linkedin.com/in/annielyzhangs"
      >
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          style={{ color: "#000000" }}
        />
      </a>
    </span>
  </>
)

export default Contact
