import React from 'react'
// import { graphql } from 'gatsby'
// import Image from 'gatsby-image'
// import HeroImage from "../images/DSC0104.jpg"
import { motion } from "framer-motion"
import HeroLogo from "../components/hero-logo"


const Hero = ({data, title, children}) => {

  console.log(data)

    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center w-full h-screen "
            style={{
              minHeight: "100vh"
            }}>
          <motion.div 
            animate={{ scale: 1, opacity: 1 }} 
            initial={{opacity: 0, scale: 1.1}}
            transition={{duration:.8}}
            className="absolute top-0 w-full h-full bg-center bg-cover ">

            <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-black"></span>
          
          </motion.div>
          {children}
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div>
                    <h1 className="text-white font-semibold text-5xl hidden">
                        Hulse Dental {title}                 
                    </h1>
                    <HeroLogo />
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >  
          </div>
        </div>
    )
}

export default Hero

// export const sectionImages = graphql`
//   fragment sectionImage on File {
//     childImageSharp {
//       fluid {
//         ...GatsbyImageSharpFluid
//       }
//       fixed {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// `

// export const query = graphql`
//   query {
//       heroImage: file(relativePath: { eq: "DSC0104.jpg" }) {
//         ...sectionImage
//       }
//   }
// `