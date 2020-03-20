import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"

import { workConstants } from "../constants/work"

import TextCard from "./textcard"
import ProjectImage from "./projectimage"

const ImageTextCard = ({ workData, visible }) => {
  if (!visible) {
    return null
  }
  return (
    <>
      <div
        key={workData.id}
        class="fadeMe"
        style={{ display: "flex", margin: "2rem 0" }}
      >
        <ProjectImage
          styles={{ flex: 1, margin: "0 1rem 2rem 1rem" }}
          image={workData.images[0]}
        />
        <ProjectImage
          styles={{ flex: 1, margin: "0 1rem 2rem 1rem" }}
          image={workData.images[1]}
        />
        <span style={{ flex: 2, margin: "0 1rem 2rem 1rem" }}>
          <ul>
            {workData.details.map(each => (
              <li key={each}>{each}</li>
            ))}
          </ul>
        </span>
      </div>
    </>
  )
}

const Work = () => {
  const [work, setWork] = useState(null)
  const [visible, setVisible] = useState(false)
  const workKey = Object.keys(workConstants)[work]
  const workData = workConstants[workKey]

  const projectRef = useRef(null)

  const scrollToBottom = () => {
    if (work) {
      projectRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(scrollToBottom, [work])

  const handleClick = key => {
    setVisible(true)
    setWork(key)
  }
  return (
    <div style={{ margin: "0 0 4rem 0" }}>
      <span
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {Object.values(workConstants).map((each, key) => (
          <TextCard {...each} key={key} onClick={() => handleClick(key)} />
        ))}
      </span>
      <div ref={projectRef}>
        <ImageTextCard workData={workData} visible={visible} />
      </div>
    </div>
  )
}

ImageTextCard.propTypes = {
  workData: PropTypes.shape({}),
  visible: PropTypes.bool,
}

ImageTextCard.defaultProps = {
  workData: {},
  visible: false,
}

export default Work
