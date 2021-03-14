import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import FullscreenImage from '../components/fullscreen-image'

import HeroSection from "../components/hero-section"

const TestPage = ({data}) => {

    return (
        
        <HeroSection>
            <div className="relative min-h-screen w-full h-full bg-gray-500">
                <div className="relative z-10 flex justify-center h-screen w-full">
                    <div className="self-center">
                        <h1>Hero Section Title</h1>
                        <p>This is the hero section paragraph where text will go.</p>
                    </div>
                </div>
                <FullscreenImage>
                    <Image fluid={data.heroImage.childImageSharp.fluid} className="object-fill object-center h-screen" />
                </FullscreenImage>

            </div>
        </HeroSection>
    )
}

export default TestPage


export const sectionImages = graphql`
  fragment sectionImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
      fixed {
          ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
      heroImage: file(relativePath: { eq: "DSC0104.jpg" }) {
        ...sectionImage
      }
  }
`