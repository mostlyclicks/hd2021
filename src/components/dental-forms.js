import React from 'react'
import { FaFilePdf } from 'react-icons/fa'

const DentalForms = () => {

  return (
      
    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <li className="text-base rounded-lg block border-2 p-4 flex flex-1 sm:flex-col items-center">
        <FaFilePdf className="text-7xl mb-4"/>
      <a href={'/New-Patient-Registration-full.pdf'} className="text-center">New Patient Form</a></li>

      <li className="text-base rounded-lg block border-2 p-4 flex flex-1  sm:flex-col items-center">
      <FaFilePdf className="text-7xl mb-4"/><a href="https://hd10.s3.amazonaws.com/Forms/Medical-History-update.pdf" className="text-center">Medical History Update</a></li>

      <li className="text-base rounded-lg block border-2 p-4 flex flex-1 sm:flex-col items-center">
      <FaFilePdf className="text-7xl mb-4"/><a href={'/HIPAA.pdf'} className="text-center">Health Information Consent and Use Form</a></li>

      <li className="text-base rounded-lg block border-2 p-4 flex flex-1 sm:flex-col items-center">
      <FaFilePdf className="text-7xl mb-4"/><a href={'/HD-Financial-Policy-full.pdf'} className="text-center">Financial Policy</a></li>
    </ul>
  )
}

export default DentalForms
