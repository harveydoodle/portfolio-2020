import PropTypes from "prop-types"
import React from "react"

import Image from "./image"
import ProjectImage from "./projectimage"

const colors = ["pink", "grey", "lightblue"]

const TextCard = ({ text, title, color, onClick }) => {
  return (
    <span
      key={text}
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 0 1.45rem 15px",
        flex: 1,
        backgroundColor: color,
        padding: "15px",
        borderRadius: 6,
        height: "8rem",
      }}
    >
      <span style={{ margin: 0 }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
      </span>
    </span>
  )
}

TextCard.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

TextCard.defaultProps = {}

export default TextCard
