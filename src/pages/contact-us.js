import React from 'react'
import HeroLevel2 from '../components/hero-level-2'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import HeroImage from "../images/reception_home_2.jpg"
import SEO from "../components/seo"

const ContactUs = () => {

    return (
        <Layout>
            <SEO 
                title="Contact Us | Hulse Dental, Onalaska WI"
                description="Any questions or comments about Hulse Dental? Please drop us a message!"
            />
            <HeroLevel2 title="Contact Us" image={HeroImage} minHeight="40vh"/>
            <Navbar transparent />
            <a id="section-2"></a>
            <div style={{minHeight:'30vh'}} className="p-10 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
                <p>If you have any questions please feel free to drop us a note. We'll get back to you as soon as possible.</p>
                <p>You can also call us at <a href="tel:608-783-1306">(608) 783-1306</a> or email us: <a href="mailto:kurthulsedental@gmail.com">KURTHULSEDENTAL@GMAIL.COM</a></p>
                <p>Thank you!</p>
            <form name="Contact Form" method="post" data-netlify="true" action="/thank-you">

                <input type="hidden" name="form-name" value="Contact Form" arial-label="Contact Form" />

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