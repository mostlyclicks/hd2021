import React from 'react'

import StaffComponent from '../components/staff-component'

import StaffJane from "../images/Staff-Jane-OfficeManager.jpg"
import StaffJeanne from "../images/Staff-Jeanne-ClinicManager.jpg"
import StaffAlisha from "../images/Staff-Alisha-Dental-Assistant.jpg"
import StaffAmy from "../images/Staff-Amy-Hygienist.jpg"
import StaffSandra from "../images/Staff-Sandra-Dental-Hygienist.jpg"
import StaffSarah from "../images/Staff-SarahPic2.jpg"
import StaffTara from "../images/Staff-TaraPic2b.jpg"
import StaffKate from "../images/Staff-Kate.jpg"

  

const Staff = (props) => {

  const allStaff = props.allStaff

  return (
    <div className=" staff my-18">
        <h3 className="text-center">Meet Our Team</h3>
        <div className="flex flex-wrap mx-auto" style={{maxWidth:'1024px'}}>
        {/*  flex flex-wrap mx-auto py-20 lg:container max-w-screen-lg */}


        {allStaff.edges.map((staff) => {
            const firstName = staff.node.dataRaw.first_name[0].text
            const staffImage = staff.node.dataRaw.staff_image.url
            const description = staff.node.dataRaw.about[0].text
            const bgColor = staff.node.dataRaw.staff_image.copyright || "#bfab86"
            // const bgColor = "#bfab86"

          return (
            <StaffComponent 
              name={firstName}
              image={staffImage}
              bgColor={bgColor}
              description={description}
            />
          )
        })}


        {/* 
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
          description="I enjoy working behind the scenes at Hulse Dental while still having an opportunity to get to know our patients. I have been a part of Hulse Dental since it opened and enjoy the team atmosphere!"
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
          description="I am very lucky to work with such a great group of people that make the work day fun! I have been at Hulse Dental since 2002 & I obviously love it here. My favorite thing about Hulse Dental are the awesome patients! It has been a pleasure getting to know them."
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
          description="I enjoy learning new things about the dental field daily and the relationships I get to build with the patients. I came from a completely different career and the change to dental care has been wonderful!"
        />
        
        */}
        </div>
    </div>

  )
}

export default Staff
