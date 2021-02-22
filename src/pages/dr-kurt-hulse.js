import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import HeroLevel2 from '../components/hero-level-2'
import HeroImage from '../images/DSC-0260.jpg'
import ContentTextPict from '../components/content-text-pict'
import KurtHulse from '../images/kurt_home.jpg'
import Payment from '../components/payment'


const DrKurtHulse = () => {

    return (
        <Layout>
            <SEO 
                title="Dr. Kurt Hulse | Hulse Dental, Onalaska WI"
                description="Learn more about Dr. Kurt Hulse of Hulse Dental in Onalaska Wisconsin."
            />
            <Navbar transparent />
            <HeroLevel2 title="Dr. Kurt Hulse" image={HeroImage} minHeight="100vh" className="bm-10"/>

            <ContentTextPict image={KurtHulse} positionOne lgContainer customClasses=" md:mt-16">
                <p>Dr. Hulse is an Onalaska native. He studied Biology and Chemistry at Luther College in Decorah IA where he also met his wife Jeanne. He attended Dental School at the University of Minnesota and entered the U.S. Navy upon his graduation as a general dentist. He completed a General Practice Residency program at Balboa Naval Hospital and served aboard the USS Fort McHenry. After completing his tour of duty, he returned to the coulee region to establish Hulse Dental as a center for family dental care, restorative dentistry (fillings and crowns), and cosmetic dentistry, including teeth whitening, endodontic (root canal) &amp; orthodontic (braces/Invisalign) services. Dr Hulse is an active member of the Academy of Cosmetic Dentistry, a past president of the LaCrosse District Dental Society and was the La Crosse area Director for the Give Kids a Smile program for 15 years. Dr, Hulse and his wife Jeanne live in Onalaska and have three sons, Kyle, Garrett and Calvin. In addition to dentistry, Dr. Hulse enjoys spending time with his family, art, outdoor recreation and travel.</p>
            </ContentTextPict>

            <section className="md:flex md:container mx-auto p-dark border-t">
                <div className="pb-6 md:p-6  text-base">
                <h3>Education</h3>
                <ul className="list-outside list-disc ml-4">
                    <li>Onalaska High School - Onalaska WI</li>
                    <li>Luther College, Decorah IA 1986 - B.A. in Biology, Minor in Chemistry</li>
                    <li>University of Minnesota Dental School 1990 - Doctor of Dental Surgery</li>
                    <li>United States Navy General Practice Residency 1990-1993- Balboa Naval Hospital, San Diego CA</li>
                    <li>University of Minnesota Dental School 1993-2000 - Clinical Instructor</li>
                </ul>
                </div>
                <div className="md:p-6  text-base">
                    <h3>Professional Associations</h3>
                    <ul className="list-outside list-disc ml-4">
                    <li>President, La Crosse District Dental Society</li>
                    <li>Wisconsin Dental Association</li>
                    <li>American Academy of Cosmetic Dentistry</li>
                    <li>American Academy of Operative Dentistry</li>
                    <li>Director, ADA "Give Kids a Smile" program</li>
                    </ul>
                </div>

            </section>

            <Payment />
        
        </Layout>
    )
}

export default DrKurtHulse