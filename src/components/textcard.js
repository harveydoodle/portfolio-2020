import PropTypes from "prop-types"
import React from "react"

const TextCard = ({ text, title, color, onClick }) => {
  return (
    <span
      key={text}
      onClick={onClick}
      style={{
        flex: 1,
        backgroundColor: color,
        padding: "2rem",
        margin: ".8rem 0",
        borderRadius: 6,
        minWidth: 450,
        height: 380,
        position: "relative",
        maxWidth: 450,
        cursor: "pointer",
      }}
    >
      <span style={{ margin: 0 }}>
        <>
          <h3>{title}</h3>
          <p style={{ margin: 0 }}>{text}</p>
        </>
        <p
          style={{
            bottom: "2rem",
            left: "2rem",
            margin: 0,
            fontStyle: "italic",
            position: "absolute",
          }}
        >
          Learn more
        </p>
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
