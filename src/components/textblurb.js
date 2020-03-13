import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const TextBlurb = ({ text = '' }) => {
    return (
        // make responsive
        <div>
            <h3 style={{ margin: 0 }}>
                {text}
            </h3>
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
