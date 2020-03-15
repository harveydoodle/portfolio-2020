import PropTypes from "prop-types"
import React from "react"

import Image from './image';

const ImageTextCard = ({ text = '', title = '' }) => {
    return (
        // make responsive
        <span style={{ display: 'flex', margin: '10px' }}>
            <Image style={{flex:1, height:50, width: 50, maxWidth:50}} />
            <Image style={{flex:1, height:50, width: 50, maxWidth:50}} />
            <span style={{flex:2,  margin: 0 }}>
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

ImageTextCard.propTypes = {
  siteTitle: PropTypes.string,
}

ImageTextCard.defaultProps = {
  siteTitle: ``,
}

export default ImageTextCard
