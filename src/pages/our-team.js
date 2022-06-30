import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from "prismic-reactjs"
import Layout from '../components/layout'
import Reviews from "../components/reviews"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import HeroLevel2 from "../components/hero-level-2"
import HeroImage from "../images/DSC-0260.jpg"
import KurtHulse from "../images/Staff-Kurt-Hulse.jpg"
import ZachCase from "../images/Zachary-Case.jpg"
import Staff from "../components/staff"
import Payment from "../components/payment"
// import { Renderer } from 'leaflet'

const OurTeam = ({data}) => {

  const document = data.allPrismicPage.nodes[0].data
  const seoTitle = document.seo_page_title
  const seoDescription = document.seo_meta_description
  const kurtHulseText = document.body[4].items[0].text_block.raw
  const zachCaseText = document.body[5].items[0].text_block.raw
  const zachCaseTitle = document.body[5].primary.text_block_title.text
  const educationText = document.body[2]
  const profAssociationsText = document.body[3]
  const allStaff = data.allPrismicStaffMember

  console.log(kurtHulseText)

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />
      <Navbar transparent />
      <HeroLevel2
        title="Our Team"
        image={HeroImage}
        minHeight="100vh"
        className="bm-10"
      />

      {/* 
      <Reviews />            
      */}

      <section
        className="md:flex md:container md:flex-col lg:flex-row mx-auto p-dark border-t "
        style={{ maxWidth: "1024px" }}
      >
        <div className=" justify-center flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <figure className="text-center ">
              <img src={KurtHulse} alt="Kurt Hulse" className="md:pr-12" />
              <figcaption className="p-4">Dr. Kurt Hulse</figcaption>
            </figure>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base lg:text-l">
              {RichText.render(kurtHulseText)}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 mt-0 p-0 text-base bg-gray-100">
        <div
          className=" justify-center flex flex-col md:flex-row mx-auto text-gray-500"
          style={{ maxWidth: "1024px" }}
        >
          <div className="w-full md:w-2/3 lg:w-1/2 text-sm p-8 ">
            <h3 className="text-lg">
              {educationText.primary.text_block_title.text}
            </h3>
            <ul className="list-outside list-disc ml-4">
              {RichText.render(educationText.items[0].text_block.raw)}
            </ul>
          </div>

          <div className="w-full md:w-2/3 lg:w-1/2 text-sm p-8 ">
            <h3 className="text-lg">
              {profAssociationsText.primary.text_block_title.text}
            </h3>
            <ul className="list-outside list-disc ml-4">
              {RichText.render(profAssociationsText.items[0].text_block.raw)}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="md:flex md:container md:flex-col lg:flex-row mx-auto p-12 md:p-10 pb-20 pt-20"
        style={{ maxWidth: "1024px" }}
      >
        <div className=" justify-center flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <figure className="text-center ">
              <img src={ZachCase} alt="Zachary Case" className="md:pr-12" />
              <figcaption className="p-4">{zachCaseTitle}</figcaption>
            </figure>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base lg:text-l text-gray-500">
              {RichText.render(zachCaseText)}
            </p>
          </div>
        </div>
      </section>

      <Staff allStaff={allStaff} />

      <Payment />
    </Layout>
  )
}

export default OurTeam


export const query = graphql`
  query {
    allPrismicPage(filter: { uid: { eq: "our-team" } }) {
      nodes {
        data {
          body {
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
            ... on PrismicPageBodyTextBlockWithTitle {
              id
              primary {
                text_block_title {
                  text
                }
              }
              items {
                text_block {
                  html
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
    allPrismicStaffMember {
      totalCount
      edges {
        node {
          id
          dataRaw
        }
      }
    }
  }
`