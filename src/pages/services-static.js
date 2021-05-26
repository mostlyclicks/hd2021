import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar" 

import HeroImage from "../images/DSC0241.jpg"
import HeroLevel2 from "../components/hero-level-2"
import ContentTextPict from "../components/content-text-pict"
import Payment from "../components/payment"
import PreventativeImage from "../images/DSC0234.jpg"
import RestorativeImage from "../images/DSC0209.jpg"
import OrthodonticImage from "../images/IMG-1417.jpg"
import AdjunctImage from "../images/ceiling_tv.jpg"
import FullScreenSection from '../components/fullscreen-section'

const Services = () => {

    return (
        <Layout>
        <SEO 
            title="Services | Hulse Dental serving the Coulee region"
            description="Preventative, restorative and orthodontic services at Hulse Dental serving Onalaska, La Crosse and Holmen WI"
        />
        <Navbar transparent />
            <HeroLevel2 title="Services" image={HeroImage} minHeight="100vh" />
            <a id="section-2"></a>
            <ContentTextPict image={PreventativeImage}>
                <h3>Preventative Services</h3>
                <p>Preventative services are important in maintaining your overall health as well as your oral health. Did you know that bacteria in your mouth, if left untreated, can lead to periodontal disease and eventually systemic diseases? Regular checkups by your dentist are important to help preclude these health issues. We focus on quality preventive dental care individualized for each patient. By providing you with a dental treatment plan that fits your needs we can help you maintain the best dental health possible.</p>
                <p>Salt or Paste Cleanings, X-rays, Exams, Oral Cancer Screenings, Fluoride Treatments, Sealants, Periodontal Services, Retainers &amp; Mouth Guards are all important in providing you with the best dental care you deserve. All of theses are available at our dental clinic in Onalaska,&nbsp;WI.</p>
            </ContentTextPict>

            <FullScreenSection
                bgImage={RestorativeImage}
                layoutType="fs-left"
            >
                <h3>Restorative Services</h3>
                <p>Many different restorative services are available at Hulse Dental. We aim to provide the best dental care with results that are second to none. Unfortunately we all will probably need restorative care  (fillings and crowns) at some time during our life. And for that reason it is good to know that Dr. Hulse is an exceptional dentist providing exceptional dental care for you and your family. Whether you choose to whiten your teeth or are in the need of a crown, Hulse Dental is here to provide solutions that work for you!</p>
            </FullScreenSection>


            <ContentTextPict image={OrthodonticImage} positionOne lgContainer>
                <h3>Orthodontic Services</h3>
                <p>Straight teeth are important to a healthy vibrant smile! We all can see the cosmetic benefits to straightening our teeth, but did you know that there are dental benefits due to orthodontic treatment as well? Straight teeth are easier to clean, especially in maintaining good oral care between the teeth. Straight teeth can help you avoid tooth loss and also lower your disease risk. It keeps your jawbone healthy and can lead to reduced headaches. And most importantly for most people, straight teeth keep you smiling more, feeling happy and boosts your confidence. Research shows that smiling, even if it is a forced smile, actually makes you happier. So give Hulse Dental a call and schedule an appointment to find our how orthodontic treatment, like Invisalign, can help you!</p>
            </ContentTextPict>

            <ContentTextPict image={AdjunctImage} reversed lgContainer>
                <h3>Adjunct Services</h3>
                <p>What we do here at Hulse Dental is centered around you, the patient. We provide you with the best dental care in an atmosphere that is friendly, compassionate, and relaxing with state-of-the-art technology. Many people find it stressful to come to the dentist and we understand that feeling. We want you to know that we do everything we can to make your experience as enjoyable possible that puts you at ease for a lifetime of dental health. We want to be your choice for a family dentist  and also for any cosmetic services you may choose. Our above-chair TV's with headphones provide a distraction from the work we are doing, or you can listen to music while we are giving you the best dental care in the La Crosse-Onalaska area. Our One-Appointment Crowns (called Cerec) have been a welcomed benefit with our patients. We will do what we can to ensure your dental visit is as pleasurable as possible!</p>

                <p>Cerec One-Appt Crowns, Above-Chair TV's, Headphones, After Treatment Warm Cleansing Towel, Blankets, Back and Neck Pillows, Travel Size Brush-Paste-Floss, HD Chapstick, Yeti Water Warmers, Coffee/Hot Chocolate/Water Bar.</p>
            </ContentTextPict>

            <Payment />
        </Layout>
    )
}

export default Services


// PAYMENT

// Insurance Plans Accepted, 5% Cash discount, Visa, Mastercard, Discover, American Express, Insurance filing, Care Credit