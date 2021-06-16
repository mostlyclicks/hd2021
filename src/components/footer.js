import React from 'react'
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import LeafMap from "./leafmap.js"




const Footer = () => {


    return (
        <footer
            style={{minHeight:"40vh"}}
            className="
            flex
            flex-wrap
            p-10
            bg-gray-700
            text-white text-opacity-70
            
            "
        >

            <div className="mb-12 md:w-6/12 lg:w-4/12">
                <p>
                HULSE DENTAL<br/>
                1840 EAST MAIN STREET<br/>
                ONALASKA, WI 54650<br/>
                <a href="tel:608-783-1306">(608) 783-1306</a><br/>
                <a href="mailto:kurthulsedental@gmail.com">KURTHULSEDENTAL@GMAIL.COM</a><br />
               

                </p>
                <div className="flex py-4">
                     <a href="https://www.facebook.com/hulsedental"><FaFacebook className="mr-2" /></a>
                     <a href="https://www.instagram.com/hulse_dental/"><FaInstagram className="" /></a>
                     <a href="/contact-us"><FaEnvelope className="ml-2"/></a>
                </div>
                

            </div>
            <div className="w-full mb-12 md:w-6/12  lg:w-4/12">
                <table className="auto border-1 border-white w-full md:w-9/12 md:mx-auto lg:mx-0 divide-y-1 divide-light-blue-50">
                    <tr><td>Monday</td><td className="text-right">8am to 5pm</td></tr>
                    <tr><td>Tuesday</td><td className="text-right">8am to 5pm</td></tr>
                    <tr><td>Wednesday</td><td className="text-right">8am to 5pm</td></tr>
                    <tr><td>Thursday</td><td className="text-right">8am to 5pm</td></tr>
                    <tr><td>Friday</td><td className="text-right">8am to 12pm</td></tr>
                    <tr><td>Saturday</td><td className="text-right">closed</td></tr>
                    <tr><td>Sunday</td><td className="text-right">closed</td></tr>
                </table>
            </div>
            <div className="w-full  lg:w-4/12">

                {typeof window !== 'undefined' &&
                    <LeafMap
                        position={[43.88199, -91.20889]}
                        markerText={"Hulse Dental, Onalaska WI"}
                    />
                }

            {/* 
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.752720569731!2d-91.21119054867037!3d43.88167474554138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87feacca4493f169%3A0x8f5c2bbda8cce7f8!2sHulse%20Dental!5e0!3m2!1sen!2sus!4v1601947835391!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                ></iframe>
                */}
            </div>


             {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> */}

        </footer>
    )
}

export default Footer

