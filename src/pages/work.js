import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { workConstants } from "../constants/work"

import TextCard from "../components/textcard"
import ProjectImage from "../components/projectimage"

const ImageTextCard = ({ workData, visible }) => {
  if (!visible) {
    return null
  }
  return (
    <>
      <div
        key={workData.id}
        class="fadeMe"
        style={{ display: "flex", margin: 20 }}
      >
        <ProjectImage
          styles={{ flex: 1, margin: "0 10px" }}
          image={workData.images[0]}
        />
        <ProjectImage
          styles={{ flex: 1, margin: "0 10px" }}
          image={workData.images[1]}
        />
        <span style={{ flex: 2, margin: "0 10px" }}>
          <h3>{workData.text}</h3>
          <ul>
            {workData.details.map(each => (
              <li>{each}</li>
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

  const handleClick = key => {
    setVisible(true)
    setWork(key)
  }
  return (
    <>
      <h2>Work & Projects</h2>
      <span style={{ display: "flex", flexWrap: "wrap" }}>
        {Object.values(workConstants).map((each, key) => (
          <TextCard {...each} key={key} onClick={() => handleClick(key)} />
        ))}
      </span>
      <ImageTextCard workData={workData} visible={visible} />
    </>
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
