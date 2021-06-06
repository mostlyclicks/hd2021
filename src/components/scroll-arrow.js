import React from "react"
import { FaAngleDown } from 'react-icons/fa'
import scrollTo from 'gatsby-plugin-smoothscroll'

const ScrollArrow = ({destination, destinationName="next section"}) => {
    
    return (
        <div className="flex mt-8">
            <div className="self-center mx-auto">
                <a onClick={() => scrollTo(`${destination}`)} href={`${destination}`} className="self-center text-white" aria-label={destinationName}>
                    <FaAngleDown className="text-5xl "/>
                </a>
            </div>
        </div>
    )
}

export default ScrollArrow


