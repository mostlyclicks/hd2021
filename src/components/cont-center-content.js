import React from 'react'
// import HeroImage from "../images/DSC-0260.jpg"


const ContainerCenterContent = ({children, heroImage}) => {

    return (
        <div 
          className="flex flex-col"
          style={{minHeight:"70vh", backgroundColor:"#D8D9DD"}}  
        >
        <div className="
          mx-auto py-10
          xs:w-10/12
          sm:w-8/12 sm:pt-20 sm:pb-20
          md:py-32
          "
        >
          <div>
            <img src={heroImage} alt="Dr. Kurt Hulse" />
          </div>
          <div className="text-center">
            <p className="
              text-3xl font-extralight text-center py-10 text-opacity-70
              lg:w-8/12 lg:mx-auto
            ">
              {children}
            </p>
            <button className="bg-gray-500 text-white py-4 px-8 text-2xl font-light">
              Learn More
            </button>
          </div>
        </div>
      </div>
    )
}

export default ContainerCenterContent