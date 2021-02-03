import React from 'react'
import HeroImage from "../images/DSC0126.jpg"


const Hero3 = () => {

    return (
        <div className="relative flex items-stretch justify-start"
            style={{
              minHeight: "100vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-left sm:bg-center bg-cover"
              style={{
                backgroundImage: `url(${HeroImage})`
              }}>
            
          </div>
         
          <div className="flex text-black text-opacity-80
              xs:w-10/12 xs:mx-auto xs:my-10 
              sm:w-8/12 sm:my-4 sm:py-4
              md:w-6/12 md:mr-0 md:my-0 md:py-0.5
              lg:w-6/12 relative bg-black opacity-80 lg:py-16
              xl:w-3/12" 
              style={{backgroundColor:"#EEE5D9"}}
              
              >
              <div className="items-center">
                <div className="w-full md:w-12/12 lg:w-10/12 xs:p-8 lg:px-4 ml-auto mr-auto text-left ">
                  <div>
                    
                    <p className=" text-3xl text- leading-10 font-extralight"

                    >
                    We are glad you are taking the time to learn more about us and our dental care and services. Our goal is to make sure that you’re comfortable and receive the best care possible throughout your dental visit. We offer pleasant surroundings with state-of-the-art technology along with other amenities to provide a relaxed yet professional family dental environment to improve and maintain your oral health. From the moment you enter our dental office, you are treated with courtesy and respect in a warm, friendly setting where your comfort is a top priority. We are fortunate to be easily accessible from the Onalaska, La Crosse, Holmen, West Salem and other coulee region areas.
                    </p>
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

export default Hero3