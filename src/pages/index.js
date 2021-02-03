import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Hero2 from "../components/hero-2"
import Hero3 from "../components/hero-3"
import Hero4 from "../components/hero-4"
import Section5 from "../components/section-5"

// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar transparent/>
    <Hero />
    <Hero2 />
    <Hero3 />
    <Hero4 />
    <Section5 />
  </Layout>
)

export default IndexPage
