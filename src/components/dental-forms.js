import React from 'react'
import { FaFilePdf } from 'react-icons/fa'

const DentalForms = () => {

  return (
    <ul className="flex flex-wrap gap-4 flex-col">
      <li className="text-base font-bold flex gap-2 items-center">
        <FaFilePdf className="text-4xl mb-4 pt-1" />
        <a
          href={"/PT-New-Patient-Registration-page-1.pdf"}
          className="text-center underline decoration-1"
          download="New-Patient-Form-Page-1"
        >
          New Patient Form 1
        </a>
      </li>
      <li className="text-base flex gap-2 font-bold items-center">
        <FaFilePdf className="text-4xl mb-4 pt-1" />
        <a
          href={"/PT-New-Patient-Registration-page-2.pdf"}
          className="text-center underline decoration-1"
          download="New-Patient-Form-Page-2"
        >
          New Patient Form 2
        </a>
      </li>

      <li className="text-base flex gap-2 font-bold items-center">
        <FaFilePdf className="text-4xl mb-4 pt-1" />
        <a
          href="/PT-Medical-History-update.pdf"
          className="text-center underline decoration-1"
          download="Medical-History-Update-Form"
        >
          Medical History Update
        </a>
      </li>

      <li className="text-base flex gap-2 font-bold items-center">
        <FaFilePdf className="text-4xl mb-4 pt-1" />
        <a
          href={"/PT-Release-form-to-us.pdf"}
          className="text-center underline decoration-1"
          download="Authorization-for-Release-of-Dental-Records-Form"
        >
          Authorization for Release of Dental Records Form
        </a>
      </li>

      <li className="text-base flex gap-2 font-bold items-center">
        <FaFilePdf className="text-4xl mb-4 pt-1" />
        <a
          href={"/HIPAA.pdf"}
          className="text-center underline decoration-1"
          download="Healt-Information-Consent-and-Use-Form-HIPAA"
        >
          Health Information Consent and Use Form (HIPPA)
        </a>
      </li>

      <li className="text-base flex gap-2 font-bold items-center">
        <FaFilePdf className="text-4xl mb-4 pt-1" />
        <a
          href={"/HD-Financial-Policy-full.pdf"}
          className="text-center underline decoration-1"
          download="Financial Policy"
        >
          Financial Policy
        </a>
      </li>
    </ul>
  )
}

export default DentalForms
