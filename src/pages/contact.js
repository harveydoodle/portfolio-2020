import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import resume from "../files/resume.pdf"

const Contact = () => (
  <>
    <span style={{ display: "flex", flexWrap: "wrap", margin: "0 0 4rem 0" }}>
      <a
        rel="noopener noreferrer"
        style={{ fontSize: "2.5rem", margin: "0 1.1rem" }}
        target="_blank"
        href={resume}
      >
        <FontAwesomeIcon icon="file" style={{ color: "#464646" }} />
      </a>
      <a
        rel="noopener noreferrer"
        style={{ fontSize: "2.5rem", margin: "0 1.1rem" }}
        target="_blank"
        href="https://github.com/harveydoodle"
      >
        <FontAwesomeIcon
          icon={["fab", "github"]}
          style={{ color: "#464646" }}
        />
      </a>
      <a
        rel="noopener noreferrer"
        style={{ fontSize: "2.5rem", margin: "0 1.1rem" }}
        target="_blank"
        href="mailto:linye.zhang18@gmail.com"
      >
        <FontAwesomeIcon icon="envelope" style={{ color: "#464646" }} />
      </a>
      <a
        rel="noopener noreferrer"
        style={{ fontSize: "2.5rem", margin: "0 1.1rem" }}
        target="_blank"
        href="https://www.linkedin.com/in/annielyzhangs"
      >
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          style={{ color: "#464646" }}
        />
      </a>
    </span>
  </>
)

export default Contact
