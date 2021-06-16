/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { HummContext } from "@hummhive/react-web-data"
import Header from "./header"
import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children, header }) => {
  const { state, actions } = React.useContext(HummContext)

  React.useEffect(() => {
    if (!state.hive) init()
  }, [])

  const init = () => {
    actions.getHive()
    actions.getMe()
  }

  return (
    <>
      {header !== "no" && <Header />}
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
}

export default Layout
