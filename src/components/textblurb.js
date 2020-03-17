import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const TextBlurb = ({ text = '', summary = '' }) => {
    return (
        <div style={{ flex: 1, margin: '0 10px' }}>
            <h3 style={{ margin: 0 }}>
                {text}
            </h3>
            <p>
              {summary}
            </p>
      </div>
    );
};

TextBlurb.propTypes = {
  siteTitle: PropTypes.string,
}

TextBlurb.defaultProps = {
  siteTitle: ``,
}

export default TextBlurb
