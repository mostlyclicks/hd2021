import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import HeroImage from "../images/DSC0227.jpg"
import HeroLevel2 from "../components/hero-level-2"
import FSTextBlock from "../components/content-fs-text-block"
import ContentTextPict from "../components/content-text-pict"
import Payment from '../components/payment'

const OurOffice = () => {

    return (
        <Layout>
        <SEO title="Our Office | Hulse Dental, Onalaski WI" />
        <Navbar transparent />
            <HeroLevel2 title="Our Office" image={HeroImage} minHeight="100vh" />
            <FSTextBlock bgColor="bg-gray-600" textColor="p-light">
                <h2 className="text-center mb-8 px-10" >DENTIST KURT HULSE AND HIS TEAM<br />WELCOME YOU TO OUR ONALASKA OFFICE</h2>
                <p>
                It is our pleasure to welcome you and your family to our Hulse Dental and offer you a virtual tour of our services. Dr. Hulse has been a dentist in the area for over 20 years and is honored to be practicing dentistry in the Onalaska/La Crosse/Coulee Region helping people find their smiles and improving their oral health.
                </p>
            </FSTextBlock>

            <ContentTextPict image={HeroImage}>
                <p>We believe that we can make a difference for you by providing artistic restorative family dental care and cosmetic dental care supported by extraordinary preventive services. We believe in using the best in staff, clinical expertise and dental materials to provide the best dental care with dependable and calculable results. Our goal is to make you feel welcome from your first contact with us and leave you with the feeling that you want to be our dental patient for life. Our main focus is your oral health and we provide the highest quality preventative dentistry, family dentistry, and cosmetic dentistry for you. Your smile is in good hands!</p>
            </ContentTextPict>

            <ContentTextPict image={HeroImage} reversed positionOne>
                <p>Our goal is to make you feel welcome from the first appointment and leave you with the feeling that you want to be a patient for life. We hope you will choose us for your dental care! We would be honored to be your Onalaska Dentist and provide you with the utmost in dental health. To learn more about our services, click the above tab to be directed to our solutions page.</p>

                <p>We invite you to contact us directly or just stop in to say hello.</p>
            </ContentTextPict>

            <ContentTextPict image={HeroImage}>
                <h3>New Patient Forms For Hulse Dental</h3>
                <p>For your convenience, we have provided these dental forms and policies for you to read and fill out before your visit to see the dentist or staff at Hulse Dental. It is our pleasure to provide you with the convenience of completing these forms prior to your visit, or come to our office where we can help you with this process. We are proud to present the highest level of professionalism and dental care while staying focused on providing the utmost in confidentiality to our patients. Whether you visit the us for a routine procedure or a more systemic issue, our team at Hulse Dental respects you and your privacy. We are honored to be trusted with your care. It is our pleasure to serve you! If you have any questions, please feel free to call Hulse Dental in Onalaska at 608.783.1306 or email us at kurthulsedental@gmail.com</p>
            </ContentTextPict>

            <ContentTextPict image={HeroImage}>
                <h3>Patient Forms For Dental Care</h3>
                <p>Please click on the following links to access the dental forms necessary for your appointment. Feel free to complete the forms and email them to us at kurthulsedental@gmail.com, send them in the mail, or bring them with you to your dental appointment. If you have any questions for the dentist or office staff prior to your appointment, you can call us at 608.783.1306 or email your questions along with your paperwork. We follow all HIPPA privacy requirements and do everything possible to maintain your privacy.</p>
                <ul>
                    <li>New Patient Form</li>
                    <li>Health Information Consent and Use Form</li>
                    <li>Dental Insurance Policy Form</li>
                </ul>
            </ContentTextPict>
            <Payment />

        </Layout>
    )
}

export default OurOffice