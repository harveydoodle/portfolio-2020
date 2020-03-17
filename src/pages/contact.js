import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import resume from "../files/resume.pdf"

const Contact = () => (
  <>
    <h2>Contact</h2>
    <span
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <Link
        rel="noopener noreferrer"
        style={{ fontSize: "2.5rem", margin: 10 }}
        target="_blank"
        href={resume}
      >
        <FontAwesomeIcon icon="file" style={{ color: "#000000" }} />
      </Link>
      <Link
        rel="noopener noreferrer"
        style={{ fontSize: "2.5rem", margin: 10 }}
        target="_blank"
        href="https://github.com/harveydoodle"
      >
        <FontAwesomeIcon
          icon={["fab", "github"]}
          style={{ color: "#000000" }}
        />
      </Link>
      <Link
        rel="noopener noreferrer"
        style={{ fontSize: "2.5rem", margin: 10 }}
        target="_blank"
        href="mailto:linye.zhang18@gmail.com"
      >
        <FontAwesomeIcon icon="envelope" style={{ color: "#000000" }} />
      </Link>
      <Link
        rel="noopener noreferrer"
        style={{ fontSize: "2.5rem", margin: 10 }}
        target="_blank"
        href="https://www.linkedin.com/in/annielyzhangs"
      >
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          style={{ color: "#000000" }}
        />
      </Link>
    </span>
  </>
)

export default Contact
