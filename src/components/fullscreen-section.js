import React from 'react'
import FsContentBottom from "./fs-content-btm"
import FsContentRight from "./fs-content-right"
import FsContentLeft from "./fs-content-left"
import ContainerCenterContent from "./cont-center-content"
// import FSCenterBottom from "../components/section-layouts/section-center-bottom"
// import SectionRight

const FullScreenSection = ({children, bgImage, layoutType}) => {

    if (layoutType === 'fs-centerBottom') {

        return(
            <FsContentBottom heroImage={bgImage}>
                {children}                
            </FsContentBottom>
        )
    } else if (layoutType == 'fs-right') {
        
        return (
            <FsContentRight heroImage={bgImage}>
                {children}
            </FsContentRight>
        )
    } else if (layoutType == 'fs-left' ) {

        return (
            <FsContentLeft heroImage={bgImage}>
                {children}
            </FsContentLeft>
        )
    } else if (layoutType == 'container-center-content' ) {

        return (
            <ContainerCenterContent heroImage={bgImage}>
                {children}
            </ContainerCenterContent>
        )
    }
    
}

export default FullScreenSection