import React from 'react'

const FullScreenSection = ({children, bgImage, layoutType}) => {

    if (layoutType === 'centerBottom') {

        return(
            <>
                {children}
                <em>{layoutType}</em>
                <img src={bgImage} />
                
            </>
        )
    } else if (layoutType == 'right') {
        
        return (
            <>
                {children}
                <h1>{layoutType}</h1>
                <img src={bgImage} />
            </>
        )
    }
    
}

export default FullScreenSection