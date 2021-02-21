import React from 'react'
import HeroLevel2 from '../components/hero-level-2'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import HeroImage from "../images/reception_home_2.jpg"

const ContactUs = () => {

    return (
        <Layout>
            <HeroLevel2 title="Contact Us" image={HeroImage} minHeight="40vh"/>
            <Navbar transparent />
            <div style={{minHeight:'30vh'}} className="p-10 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
                <p>If you have any questions please feel free to drop us a note. We'll get back to you as soon as possible.</p>
                <p>Thank you!</p>
            <form name="contact" netlify>
            <p>
                <label>Name <input type="text" name="name" className="w-full rounded text-2xl" /></label>
            </p>
            <p>
                <label>Email <input type="email" name="email" className="w-full rounded text-2xl" /></label>
            </p>
            <p>
                <label>Message <textarea name="message" rows="5" className="w-full rounded text-2xl" /></label>
            </p>
            <p>
                <button type="submit" className="p-4 bg-gray-300 w-full rounded hover:bg-gray-700 hover:text-white ">Send</button>
            </p>
            </form>
            </div>
        </Layout>
    )
}

export default ContactUs