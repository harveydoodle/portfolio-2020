import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ navHandler }) => (
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
      <Link
        to="/"
        style={{ margin: "0 .5rem", textDecoration: "none", color: "#464646" }}
        s
      >
        About
      </Link>
      <Link
        to="/contact"
        style={{ margin: "0 .5rem", textDecoration: "none", color: "#464646" }}
      >
        Contact
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  navHandler: PropTypes.func.isRequired,
}

Header.defaultProps = {}

export default Header
