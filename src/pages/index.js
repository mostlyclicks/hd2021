import React from "react"
import { Link, graphql } from "gatsby"
import { motion } from "framer-motion"


import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Image from 'gatsby-image'
import ContentTextPict from "../components/content-text-pict.js"

import FullScreenSection from "../components/fullscreen-section"
import SectionOneImage from "../images/DSC0090.jpg"
import SectionTwoImage from "../images/DSC0126.jpg"
import SectionThreeImage from "../images/DSC0095.jpg"
import SectionFourImage from "../images/DSC-0260.jpg"
import Payment from '../components/payment'
import HeroSection from "../components/hero-section"
import FullscreenImage from "../components/fullscreen-image"
import SEO from "../components/seo"
import HeroLogo from "../components/hero-logo"
import ScrollArrow from "../components/scroll-arrow"


const IndexPage = ({data}) => (
  <Layout>
    <SEO 
      title="Welcome to Hulse Dental of Onalaska WI"
      description="Learn more about Hulse Dental, our services, our office and Dr. Kurt Hulse."  
    />

    <Navbar transparent/>

    <HeroSection title="Home">
      <div className="relative min-h-screen w-full h-full bg-gray-500">
        <div className="relative z-10 flex justify-center h-screen w-full">
            <div className="self-center flex flex-col">
              <HeroLogo />
              <motion.h3 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1, delay:1}}
                className="self-center text-gray-400 text-2xl text-center"
              >
                Welcome to Hulse Dental, Onalaska Wisconsin
              </motion.h3>
              <motion.div
                animate={{opacity:1}}
                initial={{opacity:0}}
                transition={{duration:1, delay:1.25}}
              >
                <ScrollArrow destination="#section-2" />
              </motion.div>
            </div>
            
        </div>     
        <FullscreenImage>
          <Image fluid={data.heroImage.childImageSharp.fluid} className="object-fill object-center h-screen" alt="Hulse Dental Interior"/>
        </FullscreenImage>
      </div>
    </HeroSection>

    <a id="section-2"  />
    <FullScreenSection
      bgImage={SectionOneImage}
      layoutType="fs-centerBottom"
      className="flex"
    >
      Hulse Dental is Onalaska’s choice for dental care, providing state-of-the-art family dentistry and cosmetic dentistry services by Dentist Kurt Hulse.
      <ScrollArrow destination="#section-3" />  
    </FullScreenSection>
    

    <a id="section-3"></a>
    <FullScreenSection
      bgImage={SectionTwoImage}
      layoutType="fs-right"
    >
      We are glad you are taking the time to learn more about us and our dental care and services. Our goal is to make sure that you’re comfortable and receive the best care possible throughout your dental visit. We offer pleasant surroundings with state-of-the-art technology along with other amenities to provide a relaxed yet professional family dental environment to improve and maintain your oral health. From the moment you enter our dental office, you are treated with courtesy and respect in a warm, friendly setting where your comfort is a top priority. We are fortunate to be easily accessible from the Onalaska, La Crosse, Holmen, West Salem and other coulee region areas.
      <ScrollArrow destination="#section-4" />  
    </FullScreenSection>
      
    <a id="section-4"></a>  
    <FullScreenSection
      bgImage={SectionThreeImage}
      layoutType="fs-left"
    >
      Whether you come to our office for a routine check-up, cleaning &amp; dental care, restorative dentistry, dental implants, teeth whitening, cosmetic dentistry, or any other specialty service, we all are focused on providing you with a visit to the dentist that is smooth and pleasant, and that your dental care is designed specifically to meet your unique needs and goals. Our team of professionals is proud of the care they provide and the exceptional service they deliver to our patients and community.
      <ScrollArrow destination="#section-5" /> 
    </FullScreenSection>

    <a id="section-5"></a>  
    <FullScreenSection
      bgImage={SectionFourImage}
      layoutType="container-center-content"
    >
      Hulse Dental’s expertise and state-of-the-art technologies allows us to offer preventative, restorative and orthodontic services all in-house.
      <div>
      <Link to="/services">
        <button className="bg-gray-500 text-white py-4 px-8 text-base font-light m-8 hover:bg-gray-700">
              Learn More About Our Services
        </button>
      </Link>
      </div>
    </FullScreenSection> 

    <Payment />
  </Layout>
)

export default IndexPage


export const indexImages = graphql`
  fragment indexImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "DSC0104.jpg" }) {
      ...indexImage
    }
    section1: file(relativePath: { eq: "DSC0090.jpg" }) {
      ...indexImage
    }
    section2: file(relativePath: { eq: "DSC0095.jpg" }) {
      ...indexImage
    }
    section3: file(relativePath: { eq: "DSC0126.jpg" }) {
      ...indexImage
    }
    section4: file(relativePath: { eq: "DSC-0260.jpg" }) {
      ...indexImage
    }


  }
`

