import React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion"
import HeroLogo from "../components/hero-logo"
import ScrollArrow from "../components/scroll-arrow"

const HeroLevel2 = ({title, image, minHeight}) => {

    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: `${minHeight}`
            }}>
          <motion.div 
            animate={{ scale: 1.0, opacity: 1 }} 
            initial={{opacity: 0, scale: 1.1}}
            transition={{duration:.8}}
          
            className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${image})`
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-black"></span>
            <span id="hidden-image" className="hidden">
              <img src={image} alt={title} />
            </span>
          </motion.div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div>
                    <h1 className="text-white font-semibold text-5xl hidden">
                        Hulse Dental - {title}                 
                    </h1>
                    <Link to="/"><HeroLogo /></Link>
                    <motion.div 
                      animate={{ opacity: [0,0,1], scale:1 }} 
                      initial={{opacity: 0, scale:1.1}}
                      transition={{duration:1.9}}
                      >
                        <h2 className="text-white font-500 text-3xl">{title}</h2>
                    </motion.div>
                    <motion.div
                      animate={{opacity:1}}
                      initial={{opacity:0}}
                      transition={{duration:1, delay:1.25}}
                    >
                      <ScrollArrow destination="#section-2" />
                    </motion.div>
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