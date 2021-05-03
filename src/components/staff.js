import React from 'react'

import StaffComponent from '../components/staff-component'

import StaffJane from "../images/Staff-Jane-OfficeManager.jpg"
import StaffJeanne from "../images/Staff-Jeanne-ClinicManager.jpg"
import StaffAlisha from "../images/Staff-Alisha-Dental-Assistant.jpg"
import StaffAmy from "../images/Staff-Amy-Hygienist.jpg"
import StaffSandra from "../images/Staff-Sandra-Dental-Hygienist.jpg"
import StaffSarah from "../images/Staff-SarahPic2.jpg"
import StaffTara from "../images/Staff-TaraPic2b.jpg"
import StaffKate from "../images/KateFPO.jpg"

 

const Staff = () => {

  return (
    <div className=" staff my-18">
        <h3 className="text-center">Our Staff</h3>
        <div className="flex flex-wrap lg:container">
        
        <StaffComponent 
          name="Jane - Office Manager" 
          image={StaffJane} 
          bgColor="#bfab86"
          description="I joined the Hulse Dental team in 2000. I love greeting and helping patients at the front desk as well as assisting with Dr. Hulse. It has been a pleasure to work in an office where the patients have become friends."
        />

        <StaffComponent
          name="Jeanne - Clinic Manager"
          image={StaffJeanne}
          bgColor="#796a72"
          description="I have been with Hulse Dental since it opened. I enjoy working behind the scenes to ensure Hulse Dental runs smoothly and efficiently so our team can focus on patient care."
        />

        <StaffComponent
          name="Alisha - Dental Assistant"
          image={StaffAlisha}
          bgColor="#9b937a"
          description="I began with Hulse Dental after my clinical rotation here 12 years ago. I love the relationships that I have built with my patients and making a difference in healthy smiles. I also love working with the Hulse Dental team!"
        />

        <StaffComponent
          name="Amy - Dental Hygienist"
          image={StaffAmy}
          bgColor="#6c6856"
          description=" I have loved treating and getting to know my patients over the years, and it's exciting to meet new ones as well! I truly enjoy helping people achieve beautiful smiles and excellent oral health."
        />

        <StaffComponent
          name="Sandra - Dental Hygienist"
          image={StaffSandra}
          bgColor="#a8907b"
          description="Details coming soon"
        />

        <StaffComponent
          name="Sarah - Dental Hygienist"
          image={StaffSarah}
          bgColor="#5e5e5e"
          description="Details coming soon"
        />

        <StaffComponent
          name="Tara - Dental Hygienist"
          image={StaffTara}
          bgColor="#90887b"
          description="I joined Hulse Dental after graduating from dental hygiene school in 2018. I enjoy working with a great group of people to help patients improve their oral health."
        />

        <StaffComponent
          name="Kate - Assistant"
          image={StaffKate}
          bgColor="#90887b"
          description="I joined Hulse Dental in 2020 after being in a completely different career.  I enjoy learning about the dental field daily and the relationships I get to build with patients."
        />

        </div>
    </div>

  )
}

export default Staff
