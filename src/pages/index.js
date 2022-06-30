import React from "react"
import { Link, graphql } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Reviews from "../components/reviews"

import FullScreenSection from "../components/fullscreen-section"
import Payment from '../components/payment'
import HeroSection from "../components/hero-section"
import FullscreenImage from "../components/fullscreen-image"
import SEO from "../components/seo"
import HeroLogo from "../components/hero-logo"
import ScrollArrow from "../components/scroll-arrow"


const IndexPage = ({data}) => {


  const document = data.allPrismicHomepage.nodes[0].data

  const seoTitle = document.seo_page_title
  const seoDescription = document.seo_meta_description

  const heroContent = document.body[0].primary.hero_content
  const heroImage = document.body[0].primary.hero_background_image.url
  const heroImageAlt = document.body[0].primary.hero_background_image.alt

  const sectionTwoText = document.body[1].primary.full_screen_text[0].text
  const sectionTwoImage = document.body[1].primary.full_screen_image.url
  const sectionTwoImageAlt = document.body[1].primary.full_screen_image.alt

  const sectionThreeText = document.body[2].primary.full_screen_text[0].text
  const sectionThreeImage = document.body[2].primary.full_screen_image.url
  const sectionThreeImageAlt = document.body[2].primary.full_screen_image.alt

  const sectionFourText = document.body[3].primary.full_screen_text[0].text
  const sectionFourImage = document.body[3].primary.full_screen_image.url
  const sectionFourImageAlt = document.body[3].primary.full_screen_image.alt

  const sectionFiveText = document.body[4].primary.full_screen_text[0].text
  const sectionFiveImage = document.body[4].primary.full_screen_image.url
  const sectionFiveImageAlt = document.body[4].primary.full_screen_image.alt


return (
  <Layout>
    <SEO title={seoTitle} description={seoDescription} />

    <Navbar transparent />

    <HeroSection title="Home">
      <div className="relative min-h-screen w-full h-full bg-gray-500">
        <div className="relative z-10 flex justify-center h-screen w-full">
          <div className="self-center flex flex-col">
            <HeroLogo />
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="self-center text-gray-400 text-2xl text-center"
            >
              {heroContent}
            </motion.h3>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.25 }}
            >
              <ScrollArrow
                destination="#section-2"
                destinationName="Introduction"
              />
            </motion.div>
          </div>
        </div>
        <FullscreenImage>
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="object-fill object-center h-screen w-screen"
          />
        </FullscreenImage>
      </div>
    </HeroSection>

    <a id="section-2" aria-label={sectionTwoImageAlt} />
    <FullScreenSection
      bgImage={sectionTwoImage}
      imgAlt={sectionTwoImageAlt}
      layoutType="fs-centerBottom"
      className="flex"
    >
      {sectionTwoText}
      <ScrollArrow
        destination="#section-3"
        destinationName="About Hulse Dental"
      />
    </FullScreenSection>

    <a id="section-3" aria-label={sectionTwoImageAlt} />
    <FullScreenSection
      bgImage={sectionThreeImage}
      imgAlt={sectionThreeImageAlt}
      layoutType="fs-right"
    >
      {sectionThreeText}
      <ScrollArrow
        destination="#section-4"
        destinationName="Hulse Dental Team & Services"
      />
    </FullScreenSection>

    <a id="section-4" aria-label={sectionTwoImageAlt}></a>
    <FullScreenSection
      bgImage={sectionFourImage}
      imgAlt={sectionFourImageAlt}
      layoutType="fs-left"
    >
      {sectionFourText}
      <ScrollArrow
        destination="#section-5"
        destinationName="Hulse Dental technologies and expertise"
      />
    </FullScreenSection>

    <a id="section-5" aria-label={sectionTwoImageAlt}></a>
    <FullScreenSection
      bgImage={sectionFiveImage}
      imgAlt={sectionFiveImageAlt}
      layoutType="container-center-content"
    >
      {sectionFiveText}
      <div>
        <Link to="/services">
          <button className="bg-gray-500 text-white py-4 px-8 text-base font-light m-8 hover:bg-gray-700">
            Learn More About Our Services
          </button>
        </Link>
      </div>
    </FullScreenSection>
    {/* 
    <Reviews />            
    */}
    <Payment />
  </Layout>
)
}

export default IndexPage



export const query = graphql`
query {
  allPrismicHomepage {
    nodes {
      data {
        body {
          primary {
            hero_content
            hero_background_image {
              url
            }
            full_screen_layout
            full_screen_text {
              text
            }
            full_screen_title {
              text
            }
            
            full_screen_image {
              url
              alt
            }
          }
        }
        seo_meta_description
        seo_page_title
      }
    }
  }
}
`

