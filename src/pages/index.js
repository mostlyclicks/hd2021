import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Hero2 from "../components/hero-2"
import Hero3 from "../components/hero-3"
import Hero4 from "../components/hero-4"
import Section5 from "../components/section-5"
import FullScreenSection from "../components/fullscreen-section"
import SectionOneImage from "../images/DSC0090.jpg"
import SectionTwoImage from "../images/DSC0126.jpg"

// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar transparent/>
    <Hero />
    {/* <FullScreenSection
      bgImage={SectionOneImage}
      layoutType="centerBottom"
    >
      Hulse Dental is Onalaska’s choice for dental care, providing state-of-the-art family dentistry and cosmetic dentistry services by Dentist Kurt Hulse.

    </FullScreenSection>

    <FullScreenSection
      bgImage={SectionTwoImage}
      layoutType="right"
    >
      SECTION 2 - Hulse Dental is Onalaska’s choice for dental care, providing state-of-the-art family dentistry and cosmetic dentistry services by Dentist Kurt Hulse.

    </FullScreenSection> */}
      
    
    
    <Hero2 />
    <Hero3 />
    <Hero4 />
    <Section5 />
  </Layout>
)

export default IndexPage
