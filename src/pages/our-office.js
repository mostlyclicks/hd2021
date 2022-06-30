import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-modal-routing'
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
//import HeroImage from "../images/DSC0227.jpg"
import HeroLevel2 from "../components/hero-level-2"
import FSTextBlock from "../components/content-fs-text-block"
import ContentTextPict from "../components/content-text-pict"
import Payment from '../components/payment'
import DentalForms from '../components/dental-forms'
import { FaFileAlt } from 'react-icons/fa'
import Reviews from "../components/reviews"





const OurOffice = ({data}) => {

    const document = data.allPrismicPage.nodes[0].data

    const seoTitle = document.seo_page_title
    const seoDescription = document.seo_meta_description
    const heroTitle = document.body[0].primary.hero_title.text
    const heroImage = document.body[0].primary.hero_image.url

    const textHeroTitle = document.body[1].primary.text_hero_title.raw
    const textHeroBody = document.body[1].primary.text_hero_body.raw
    console.log(textHeroBody[0])

    const sectionOneTitle = document.body[2].primary.section_title.text
    const sectionOneImg = document.body[2].primary.image.url
    const sectionOneText = document.body[2].primary.section_text.raw

    // const sectionTwoTitle = document.body[3].primary.section_title.text
    const sectionTwoText = document.body[3].primary.section_text.raw
    const sectionTwoImg = document.body[3].primary.image.url

    const sectionThreeTitle = document.body[4].primary.section_title.text
    const sectionThreeText = document.body[4].primary.section_text.raw
    const sectionThreeImg = document.body[4].primary.image.url

    const sectionFourTitle = document.body[5].primary.section_title.text
    const sectionFourText = document.body[5].primary.section_text.raw
    const sectionFourImg = document.body[4].primary.image.url
    console.log(sectionOneTitle)


    return (
      <Layout>
        <SEO title={seoTitle} description={seoDescription} />
        <Navbar transparent />
        <HeroLevel2 title={heroTitle} image={heroImage} minHeight="100vh">
          <p className="">
            <a
              href="#online-forms"
              className="text-gray-50 uppercase font-bold hover:text-indigo-400"
            >
              <FaFileAlt className="text-5xl mb-4 text-white mx-auto my-8 hover:text-indigo-400" />
              Online Forms
            </a>
          </p>
        </HeroLevel2>
             {/* 
              <Reviews />            
             */}
        <a id="section-2"></a>
        <FSTextBlock bgColor="bg-gray-600" textColor="p-light">
          <h2 className="text-center mb-8 px-10">{textHeroTitle[0].text}</h2>
          <RichText render={textHeroBody[0].text} />
          <p>{textHeroBody[0].text}</p>
          <p className="text-center">
            <Link
              to="/modal/covid/"
              asModal
              style={{
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              COVID-19 UPDATE
            </Link>
          </p>
        </FSTextBlock>

        <ContentTextPict image={sectionOneImg}>
          <RichText render={sectionOneText} />
        </ContentTextPict>

        <ContentTextPict image={sectionTwoImg} reversed positionOne>
          <RichText render={sectionTwoText} />
        </ContentTextPict>

        <ContentTextPict image={sectionThreeImg}>
          <h3 id="online-forms">{sectionThreeTitle}</h3>
          <RichText render={sectionThreeText} />
        </ContentTextPict>

        <ContentTextPict image={sectionFourImg}>
          <h3>{sectionFourTitle}</h3>
          <RichText render={sectionFourText} />
          <DentalForms />
        </ContentTextPict>

        <Payment />
      </Layout>
    )
}

export default OurOffice


export const query = graphql`
query {
  allPrismicPage(filter: {uid: {eq: "our-office"}}) {
    nodes {
      data {
        body {
          ... on PrismicPageBodyHeroSection {
            id
            primary {
              hero_image {
                url
                alt
              }
              hero_title {
                text
              }
            }
          }
          ... on PrismicPageBodyTextImageSection {
            id
            primary {
              section_title {
                text
              }
              section_text {
                raw
              }
              image {
                url
                alt
              }
            }
          }
          ... on PrismicPageBodyTextHero {
            id
            primary {
              text_hero_title {
                raw
              }
              text_hero_body {
                raw
              }
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

