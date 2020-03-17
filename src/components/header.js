import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({}) => (
  <header
    style={{
      position: "fixed",
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: "flex",
        margin: `0 auto`,
        flex: 1,
        justifyContent: "flex-end",
        width: "100vw",
        padding: `1.45rem 2rem 1.0875rem 0`,
      }}
    >
      <p style={{ margin: "0 .5rem" }}>About</p>
      <p style={{ margin: "0 .5rem" }}>Work</p>
      <p style={{ margin: "0 .5rem" }}>Contact</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
