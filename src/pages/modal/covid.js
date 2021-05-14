import React from 'react';
import ConditionalLayout from '../../components/conditional-layout';
// import Logo from '../../components/Navbar/Logo';
import styled from 'styled-components';

const CovidPage = () => (
  <ConditionalLayout style={{border:'1px solid red'}}>
    <ModalPopup>
      <h1>Hulse Dental Commitment to Patient Safety</h1>
      <p>
        To All Our Patients at Hulse Dental Your overall health and wellness has
        always been and will always be our highest priority. We respect the
        concern with COVID-19 and we want to reiterate our commitment to
        patient safety. We continue to follow Universal Precautions and go
        beyond OSHA requirements to provide patient protection.
      </p>
      
    </ModalPopup>
  </ConditionalLayout>
);

export default CovidPage;

const ModalPopup = styled.div`
  padding: 2rem;
  color:#000000;
  h1 {color:#000000;}
`;