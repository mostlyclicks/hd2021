import React from 'react'
import { Link } from 'gatsby'
import Logo from "../images/Logo_1016px_Wide_light_purple_text.png"

const HeroLevel2 = ({title, image, minHeight}) => {

    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: `${minHeight}`
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${image})`
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div>
                    <h1 className="text-white font-semibold text-5xl hidden">
                        Hulse Dental - {title}                 
                    </h1>
                    <Link to="/"><img src={Logo} className="xs:w-12/12 sm:w-8/12 m-auto"  /></Link>
                    <h2 className="text-white font-500 text-3xl">{title}</h2>
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

export default HeroLevel2