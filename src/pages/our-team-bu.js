import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import { RichText } from "prismic-reactjs"
import HeroLevel2 from '../components/hero-level-2'
import HeroImage from '../images/DSC-0260.jpg'
import KurtHulse from '../images/Staff-Kurt-Hulse.jpg'
import ZachCase from '../images/Zachary-Case.jpg'
import Payment from '../components/payment'
import FSTextBlock from "../components/content-fs-text-block"
import Staff from "../components/staff"


const DrKurtHulse = ({data}) => {

    const document = data.allPrismicPage.nodes[0].data

    const seoTitle = document.seo_page_title
    const seoDescription = document.seo_meta_description

    //const mainText = document.body[0].primary.text
    
    const allStaff = data.allPrismicStaffMember

    const kurtHulse2 = data.allPrismicPageBodyTextImageSection.nodes[0].primary.section_text.raw
    


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

        <section
          className="md:flex md:container md:flex-col lg:flex-row mx-auto p-dark border-t "
          style={{ maxWidth: "1024px" }}
          id="section-2"
        >
          <div className=" justify-center flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <figure className="text-center ">
                <img src={KurtHulse} alt="Kurt Hulse" className="md:pr-12" />
                <figcaption className="p-4">Dr. Kurt Hulse</figcaption>
              </figure>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-base lg:text-l">{/*mainText.text*/}</p>
            </div>
          </div>
        </section>

        <section className="mb-12 mt-0 p-0 text-base bg-gray-100">
          <div
            className=" justify-center flex flex-col md:flex-row mx-auto text-gray-500"
            style={{ maxWidth: "1024px" }}
          >
            {RichText.render(kurtHulse2)}
          </div>
        </section>

        <section className="mb-12 mt-0 p-0 text-base bg-gray-100">
          <div
            className=" justify-center flex flex-col md:flex-row mx-auto text-gray-500"
            style={{ maxWidth: "1024px" }}
          >
            <div className="w-full md:w-2/3 lg:w-1/2 text-sm p-8 ">
              <h3 className="text-lg">Education</h3>
              <ul className="list-outside list-disc ml-4">
                <li>Onalaska High School - Onalaska WI</li>
                <li>
                  Luther College, Decorah IA 1986 - B.A. in Biology, Minor in
                  Chemistry
                </li>
                <li>
                  University of Minnesota Dental School 1990 - Doctor of Dental
                  Surgery
                </li>
                <li>
                  United States Navy General Practice Residency 1990-1993-
                  Balboa Naval Hospital, San Diego CA
                </li>
                <li>
                  University of Minnesota Dental School 1993-2000 - Clinical
                  Instructor
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/2 text-sm p-8">
              <h3 className="text-lg">Professional Associations</h3>
              <ul className="list-outside list-disc ml-4">
                <li>President, La Crosse District Dental Society</li>
                <li>Wisconsin Dental Association</li>
                <li>American Academy of Cosmetic Dentistry</li>
                <li>American Academy of Operative Dentistry</li>
                <li>Director, ADA "Give Kids a Smile" program</li>
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
                <figcaption className="p-4">Dr. Zachary Case</figcaption>
              </figure>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-base lg:text-l text-gray-500">
                Dr. Case became well acquainted with the coulee region while in
                college at the University of Wisconsin La Crosse where he
                studied biology and chemistry. Originally from Harmony, MN, Dr.
                Case elected to complete his dental education away from the area
                and attend Creighton University in Omaha, Nebraska. While there,
                he enjoyed spending his free time attending Creighton basketball
                games and running the trails along the Missouri River. Following
                his graduation, he was happy to come back to the Coulee Region
                which he had called home during his college years. Dr. Case is
                an active member of the American Dental Association, the
                Wisconsin Dental Association and the La Crosse Dental
                Association.
              </p>
              <p className="text-gray-500">
                He loves his roots in Harmony and also enjoys spending his free
                time with friends and family, enjoying sports, and staying
                healthy physically. Dr. Case is a through and through Minnesota
                sports fan and he will gladly welcome any criticism that comes
                along with it. Dr. Case has a strong passion for delivering high
                quality care to his patients and is looking forward to continued
                growth at Hulse Dental in Onalaska.
              </p>
            </div>
          </div>
        </section>

        <Staff allStaff={allStaff} />

        <FSTextBlock>
          <hr />
        </FSTextBlock>

        <Payment />
      </Layout>
    )
}

export default DrKurtHulse

export const query = graphql`
  query {
    allPrismicPage(filter: { uid: { eq: "our-team" } }) {
      nodes {
        data {
          seo_meta_description
          seo_page_title
          body {
            ... on PrismicPageBodyTextImageSection {
              id
              primary {
                image {
                  alt
                  fluid {
                    src
                  }
                }
                section_text {
                  html
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
    allPrismicStaffMember {
      totalCount
      edges {
        node {
          id
          dataRaw
        }
      }
    }

    allPrismicPageBodyTextImageSection(
      filter: { primary: { section_title: { text: { eq: "Dr. Kurt Hulse" } } } }
    ) {
      nodes {
        primary {
          section_text {
            html
            text
            raw
          }
          section_title {
            text
          }
        }
        id
      }
    }
  }
`






            {
              /* 


            ... on PrismicPageBodyText {
              id
              primary {
                text {
                  raw
                  text
                }
              }
            }



              <div className="lg:w-3/3">
                    
                <div className="flex">
                  <div className="pb-6 pr-6  text-base w-screen lg:w-1/2">
                    <h3 className="text-lg">Education</h3>
                    <ul className="list-outside list-disc ml-4">
                        <li>Onalaska High School - Onalaska WI</li>
                        <li>Luther College, Decorah IA 1986 - B.A. in Biology, Minor in Chemistry</li>
                        <li>University of Minnesota Dental School 1990 - Doctor of Dental Surgery</li>
                        <li>United States Navy General Practice Residency 1990-1993- Balboa Naval Hospital, San Diego CA</li>
                        <li>University of Minnesota Dental School 1993-2000 - Clinical Instructor</li>
                    </ul>
                  </div>

                <div className=" text-base w-screen lg:w-1/2">
                    <h3 className="text-lg">Professional Associations</h3>
                    <ul className="list-outside list-disc ml-4">
                        <li>President, La Crosse District Dental Society</li>
                        <li>Wisconsin Dental Association</li>
                        <li>American Academy of Cosmetic Dentistry</li>
                        <li>American Academy of Operative Dentistry</li>
                        <li>Director, ADA "Give Kids a Smile" program</li>
                    </ul>
                </div>


                 </div>
              </div>

              */
            }