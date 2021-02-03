import React from 'react'
import HeroImage from "../images/DSC0104.jpg"
import Logo from "../images/Logo_1016px_Wide_light_purple_text.png"

const Hero = () => {

    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "100vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${HeroImage})`
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div>
                    <h1 className="text-white font-semibold text-5xl hidden">
                        Hulse Dental                  
                    </h1>
                    <img src={Logo} className="xs:w-12/12 sm:w-8/12 m-auto"  />
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