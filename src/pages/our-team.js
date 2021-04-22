import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import HeroLevel2 from '../components/hero-level-2'
import HeroImage from '../images/DSC-0260.jpg'
import ContentTextPict from '../components/content-text-pict'
import KurtHulse from '../images/Staff-Kurt-Hulse.jpg'
import Payment from '../components/payment'
import FSTextBlock from "../components/content-fs-text-block"
import Staff from "../components/staff"


const DrKurtHulse = () => {

    return (
        <Layout>
            <SEO 
                title="Our Team | Hulse Dental, Onalaska WI"
                description="Learn more about Dr. Kurt Hulse and the team at Hulse Dental in Onalaska Wisconsin."
            />
            <Navbar transparent />
            <HeroLevel2 title="Our Team" image={HeroImage} minHeight="100vh" className="bm-10"/>
            <a id="section-2"></a>
            <FSTextBlock lgContainer customClasses="md:mt-16">
                <p className="">Dr. Hulse is an Onalaska local. He went on to study at Luther College in Decorah, IA and attended the University of Minnesota Dental School. Upon graduation, Dr. Hulse was admitted to the General Practice Residency program at Balboa Naval Hospital. His love of the Coulee Region brought him back to the area where he established Hulse Dental as a center for family dental care, restorative dentistry (fillings and crowns), and cosmetic dentistry, including teeth whitening, endodontic (root canal) &amp; orthodontic (braces/Invisalign) services. Dr Hulse is an active member of the Academy of Cosmetic Dentistry, a past professor at the University of Minnesota Dental School, former President of the La Crosse District Dental Society and the recent Director of the La Crosse area Give Kids a Smile Program for 15 years. Dr. Hulse and his wife Jeanne live in Onalaska and have three sons, Kyle, Garrett and Calvin. He has a love of learning, and in his free-time enjoys spending time with his family, creating art, and enjoys a passion for the outdoors, sports and travel.</p>
            </FSTextBlock>

            <section className="md:flex md:container md:flex-col lg:flex-row mx-auto p-dark border-t">
                <div className=" justify-center mt-7 px-6 md:w-full lg:w-1/3">
                    <img src={KurtHulse} alt="Kurt Hulse"  /> 
                </div>
                <div className="pb-6 p-6  text-base lg:w-1/3">
                <h3 className="text-lg">Education</h3>
                <ul className="list-outside list-disc ml-4">
                    <li>Onalaska High School - Onalaska WI</li>
                    <li>Luther College, Decorah IA 1986 - B.A. in Biology, Minor in Chemistry</li>
                    <li>University of Minnesota Dental School 1990 - Doctor of Dental Surgery</li>
                    <li>United States Navy General Practice Residency 1990-1993- Balboa Naval Hospital, San Diego CA</li>
                    <li>University of Minnesota Dental School 1993-2000 - Clinical Instructor</li>
                </ul>
                </div>
                <div className="p-6  text-base lg:w-1/3">
                    <h3 className="text-lg">Professional Associations</h3>
                    <ul className="list-outside list-disc ml-4">
                    <li>President, La Crosse District Dental Society</li>
                    <li>Wisconsin Dental Association</li>
                    <li>American Academy of Cosmetic Dentistry</li>
                    <li>American Academy of Operative Dentistry</li>
                    <li>Director, ADA "Give Kids a Smile" program</li>
                    </ul>
                </div>

            </section>

            <FSTextBlock>
            <hr/>
                <Staff />
            </FSTextBlock>

            <Payment />
        
        </Layout>
    )
}

export default DrKurtHulse