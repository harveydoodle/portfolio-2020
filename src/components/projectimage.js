import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const findImageName = (element, image) =>
  element.node.fluid.src.split('/').pop() === image;

export default class ProjectImage extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    alt: '',
    style: undefined,
    className: undefined,
  };

  render() {
    const { image } = this.props;

    // if (!constants.USE_LOCAL) {s

    return (
      <StaticQuery
        query={graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const images = data.allImageSharp.edges;
          const node =
            images.find(element =>
              // Match string after final slash
              findImageName(element, image),
            ) ||
            images.find(element => findImageName(element, 'placeholder.jpg'));
          if (!node) return null;
          return (
            <Image
              {...this.props}
              style={{
                flex:1,
                height:'100%',
                width:'100%',
                maxWidth: 920,
                margin: '0 auto', // Used to center the image
              }}
              fluid={node.node.fluid}
            />
          );
        }}
      />
    );
  }
}
