import React from 'react'

import StaffComponent from '../components/staff-component'

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

        </div>
    </div>

  )
}

export default Staff
