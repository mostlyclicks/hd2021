import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import { RichText } from "prismic-reactjs"
import HeroLevel2 from '../components/hero-level-2'
import HeroImage from '../images/DSC-0260.jpg'
import KurtHulse from '../images/Staff-Kurt-Hulse.jpg'
import Payment from '../components/payment'
import FSTextBlock from "../components/content-fs-text-block"
import Staff from "../components/staff"


const DrKurtHulse = ({data}) => {

    const document = data.allPrismicPage.nodes[0].data

    const seoTitle = document.seo_page_title
    const seoDescription = document.seo_meta_description

    const mainText = document.body[0].primary.text
    
    const allStaff = data.allPrismicStaffMember
    


    return (
        <Layout>
            <SEO 
                title={seoTitle}
                description={seoDescription}
            />
            <Navbar transparent />
            <HeroLevel2 title="Our Team" image={HeroImage} minHeight="100vh" className="bm-10"/>
            <a id="section-2"></a>

            <section className="md:flex md:container md:flex-col lg:flex-row mx-auto p-dark border-t " style={{maxWidth:'1024px'}}>

              <div className=" justify-center flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <figure className="text-center ">
                        <img src={KurtHulse} alt="Kurt Hulse" className="md:pr-12" /> 
                        <figcaption className="p-4">Dr. Kurt Hulse</figcaption>
                    </figure>
                  </div>
                  <div className="w-full md:w-1/2">
                    <p className="text-base lg:text-xl">{mainText.text}</p>
                  </div>
              </div>
            </section>


            <section className="mb-12 mt-0 p-0 text-base bg-gray-100">
              <div className=" justify-center flex flex-col md:flex-row mx-auto text-gray-500" style={{maxWidth:'1024px'}}>
                  <div className="w-full md:w-2/3 lg:w-1/2 text-sm p-8 ">
                    <h3 className="text-lg">Education</h3>
                    <ul className="list-outside list-disc ml-4">
                        <li>Onalaska High School - Onalaska WI</li>
                        <li>Luther College, Decorah IA 1986 - B.A. in Biology, Minor in Chemistry</li>
                        <li>University of Minnesota Dental School 1990 - Doctor of Dental Surgery</li>
                        <li>United States Navy General Practice Residency 1990-1993- Balboa Naval Hospital, San Diego CA</li>
                        <li>University of Minnesota Dental School 1993-2000 - Clinical Instructor</li>
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

           
            
              <Staff allStaff={allStaff} />

            <FSTextBlock>
            <hr/>
                
            </FSTextBlock>

            <Payment />
        
        </Layout>
    )
}

export default DrKurtHulse

export const query = graphql`
query {
  allPrismicPage(filter: {uid: {eq: "our-team"}}) {
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
          ... on PrismicPageBodyText {
            id
            primary {
              text {
                raw
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
  
}

`






            {/* 
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

              */}