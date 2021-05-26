import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar" 
import { RichText } from "prismic-reactjs"

import HeroLevel2 from "../components/hero-level-2"
import ContentTextPict from "../components/content-text-pict"
import Payment from "../components/payment"
import FullScreenSection from '../components/fullscreen-section'

const ServicesPrismic = ({data}) => {

  const document = data.allPrismicPage.nodes[0].data

  const seoTitle = document.seo_page_title
  const seoDescription = document.seo_meta_description
  const heroTitle = document.body[0].primary.hero_title.text
  const heroImage = document.body[0].primary.hero_image.url

  const sectionOneTitle = document.body[1].primary.section_title.text
  const sectionOneImage = document.body[1].primary.image.url
  const sectionOneImageAlt = document.body[1].primary.image.alt
  const sectionOneText = document.body[1].primary.section_text

  const sectionTwoTitle = document.body[2].primary.section_title.text
  const sectionTwoImage = document.body[2].primary.image.url
  const sectionTwoText = document.body[2].primary.section_text

  const sectionThreeTitle = document.body[3].primary.section_title.text
  const sectionThreeImage = document.body[3].primary.image.url
  const sectionThreeText = document.body[3].primary.section_text

  const sectionFourTitle = document.body[4].primary.section_title.text
  const sectionFourImage = document.body[4].primary.image.url
  const sectionFourText = document.body[4].primary.section_text

  console.log(sectionTwoTitle)
  
  
    return (
        <Layout>
        <SEO 
            title={seoTitle}
            description={seoDescription}
        />
        <Navbar transparent />
            <HeroLevel2 title={heroTitle} image={heroImage} minHeight="100vh" />

            <a id="section-2"></a>
            <ContentTextPict image={sectionOneImage} alt={sectionOneImageAlt}>
                <h3>{sectionOneTitle}</h3> 
                <RichText render={sectionOneText.raw} />
            </ContentTextPict>

            <FullScreenSection
                bgImage={sectionTwoImage}
                layoutType="fs-left"
            >
                <h3>{sectionTwoTitle}</h3>
                <RichText render={sectionTwoText.raw} />
            </FullScreenSection>

            <ContentTextPict image={sectionThreeImage} positionOne lgContainer>
                <h3>{sectionThreeTitle}</h3>
                <RichText render={sectionThreeText.raw} />
            </ContentTextPict>

            <ContentTextPict image={sectionFourImage} reversed lgContainer>
                <h3>{sectionFourTitle}</h3>
                <RichText render={sectionFourText.raw} />
            </ContentTextPict>

            <Payment />
        </Layout>
    )
}

export default ServicesPrismic


// PAYMENT

// Insurance Plans Accepted, 5% Cash discount, Visa, Mastercard, Discover, American Express, Insurance filing, Care Credit


export const query = graphql`
query {
  allPrismicPage(filter: {uid: {eq: "services"}}) {
    nodes {
      uid
      data {
        seo_page_title
        page_title {
          text
        }
        body {
          ... on PrismicPageBodyHeroSection {
            id
            primary {
              hero_title {
                text
              }
              hero_image {
                url
              }
            }
          }
          ... on PrismicPageBodyTextImageSection {
            id
            
            primary {
              image {
                url
                alt
              }
              section_text {
                html
                raw
              }
              section_title {
                text
              }
            }
          }
        }
      }
    }
  }
}
`