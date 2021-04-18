import React from 'react'

import StaffKurt from "../images/Staff-Kurt-Hulse.jpg"
import StaffJane from "../images/Staff-Jane-OfficeManager.jpg"
import StaffJeanne from "../images/Staff-Jeanne-ClinicManager.jpg"
import StaffAlisha from "../images/Staff-Alisha-Dental-Assistant.jpg"
import StaffAmy from "../images/Staff-Amy-Hygienist.jpg"
import StaffSandra from "../images/Staff-Sandra-Dental-Hygienist.jpg"

const Staff = () => {

  return (
    <div className=" staff my-18">
        <h3 className="text-center">Our Staff</h3>
        <div className="flex flex-wrap lg:container">
        <figure><img src={StaffKurt} alt="Dr. Kurt Hulse"/><figcaption>Dr. Kurt Hulse</figcaption></figure>
        <figure><img src={StaffJane} alt="Jane - Office Manager"/><figcaption>Jane - Office Manager</figcaption></figure>
        <figure><img src={StaffJeanne} alt="Jeanne - Clinic Manager"/><figcaption>Jeanne - Clinic Manager</figcaption></figure>
        <figure><img src={StaffAlisha} alt="Alisha - Dental Assistant"/><figcaption>Alisha - Dental Assistant</figcaption></figure>
        <figure><img src={StaffAmy} alt="Amy - Dental Hygienist"/><figcaption>Amy - Dental Hygienist</figcaption></figure>
        <figure><img src={StaffSandra} alt="Sandra - Dental Hygienist"/><figcaption>Sandra - Dental Hygienist</figcaption></figure>
        </div>
    </div>

  )
}

export default Staff
