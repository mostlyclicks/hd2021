import React from 'react'
import FullScreenSection from './fullscreen-section'
import ContentImage from "../images/DSC0090.jpg"

// pass text, image, reverse, 1/4, 1/2, 3/4, 4/4

const ContentTextPict = ({reversed}) => {
    
    
    

    return (
        <>
        <section className={`
            flex flex-col-reverse
            md:flex md:mx-auto
            ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'}
            
            lg:container
        `}>
            <div className={`p-dark md:w-6/12`}>
                We believe that we can make a difference for you by providing artistic restorative family dental care and cosmetic dental care supported by extraordinary preventive services. We believe in using the best in staff, clinical expertise and dental materials to provide the best dental care with dependable and calculable results. Our goal is to make you feel welcome from your first contact with us and leave you with the feeling that you want to be our dental patient for life. Our main focus is your oral health and we provide the highest quality preventative dentistry, family dentistry, and cosmetic dentistry for you. Your smile is in good hands!
            </div>
            <div className={`p-12 pb-0 md:w-6/12 md:p-12`}>
                <img src={ContentImage} />
            </div>
        </section>


    </>
    )
}

export default ContentTextPict