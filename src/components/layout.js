/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import Header from "./header"
import SEO from "./seo"

import "./layout.css"

library.add(fab, faFile, faLinkedin, faEnvelope, faGithub)

const Layout = ({ children }) => {
  const navHandler = () => {
  }
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header navHandler={navHandler} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `7rem 0.5rem 5rem 0.5rem`,
        }}
      >
        <SEO title="Annie Zhang | Software Developer" />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
