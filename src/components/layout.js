/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import BackToTop from "./back-to-top"
import "./layout.css"

const Layout = ({ children }) => {


  return (
     
    <div>
      <main>{children}
        <BackToTop />
      </main>
      
      <Footer />
    </div>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
