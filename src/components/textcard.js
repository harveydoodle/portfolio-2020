import PropTypes from "prop-types"
import React from "react"

import Image from './image';
import ProjectImage from './projectimage';

const colors = ['pink','grey','lightblue']

const TextCard = ({ text = '', title = '', color, onClick }) => {
    return (
        // make responsive
        <span key={text} onClick={onClick} style={{ display: 'flex', justifyContent:'center', alignItems:'center',margin: '10px', flex: 1, backgroundColor:color, padding: "10px", borderRadius: 6, height: '8rem' }}>
            <span style={{ margin: 0 }}>
              <h3 style={{ margin: 0 }}>
                  {title}
              </h3>
              {/* <p style={{ margin: 0 }}>
                  {text}
              </p> */}
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
