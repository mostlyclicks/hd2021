import React from 'react'
import Image from 'gatsby-image'
import Hero from "../components/hero"

const HeroSection = ({children, image}) => {

    console.log(image)

    return (
        <>
            
            {children}
           
        </>
    )
}

export default HeroSection
