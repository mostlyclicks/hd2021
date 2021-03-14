import React from 'react'
import Logo from "../images/Logo_1016px_white_edge_2.png"
import { motion } from "framer-motion"

const HeroLogo = () => {

    return (
        <>
            <motion.img src={Logo} className="xs:w-12/12 sm:w-8/12 m-auto"
                      initial={{opacity:0}}
                      animate={{opacity:1 }}
                      transition={{duration:1, delay:.5}}
            />
        </>

    )
}

export default HeroLogo