import PropTypes from "prop-types"
import React from "react"

import Image from './image';
import ProjectImage from './projectimage';

const colors = ['pink','grey','lightblue']

const TextCard = ({ text = '', title = '', color }) => {
    return (
        // make responsive
        <span style={{ display: 'flex', margin: '10px', flex: 1, backgroundColor:color, padding: "10px", borderRadius: 6 }}>
            <span style={{ margin: 0 }}>
              <h4 style={{ margin: 0 }}>
                  {title}
              </h4>
              <p style={{ margin: 0 }}>
                  {text}
              </p>
            </span>
      </span>
    );
};

TextCard.propTypes = {
  siteTitle: PropTypes.string,
}

TextCard.defaultProps = {
  siteTitle: ``,
}

export default TextCard
