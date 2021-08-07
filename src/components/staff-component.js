import React from 'react'
import styled from 'styled-components'

const StaffComponent = ({name, image, description, bgColor}) => {

  return (
    <StyledFigure>
      <img src={image} alt={name} /><figcaption>{name}</figcaption>
      <div className="absolute top-0 left-0 p-5 bg-opacity-90 h-full text-sm sm:text-base text-white " style={{backgroundColor:bgColor}}>{description}</div>
    </StyledFigure>
  )

}

export default StaffComponent


const StyledFigure = styled.figure`
  position:relative;
  display:flex;
  div {
    align-self:center;
    
    width:100%;
    opacity:0;
    transition:opacity .4s ease;
    &:hover {
      opacity:1;
    }
  }

`