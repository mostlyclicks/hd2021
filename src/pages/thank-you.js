import React from 'react'
import HeroLevel2 from '../components/hero-level-2'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import HeroImage from "../images/reception_home_2.jpg"
import SEO from "../components/seo"

const ThankYou = () => {

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
                <p>Thank you for your message. We'll contact you shortly.</p>
                <p>You can also call us at <a href="tel:608-783-1306">(608) 783-1306</a> or email us: <a href="mailto:kurthulsedental@gmail.com">KURTHULSEDENTAL@GMAIL.COM</a></p>
                <p>Thank you!</p>
            
            </div>
        </Layout>
    )
}

export default ThankYou