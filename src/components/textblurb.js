import PropTypes from "prop-types"
import React from "react"

const TextBlurb = ({ text = "", summary = "" }) => {
  return (
    <div style={{ flex: 1, margin: "0 1rem 4rem 1rem" }}>
      <h4 style={{ margin: 0 }}>{text}</h4>
      <p>{summary}</p>
    </div>
  )
}

TextBlurb.propTypes = {
  siteTitle: PropTypes.string,
}

TextBlurb.defaultProps = {
  siteTitle: ``,
}

export default TextBlurb
