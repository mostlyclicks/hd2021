import React from 'react'

const FullscreenImage = ({children}) => {

    return (
        <div className="absolute top-0 left-0 w-full z-0">
            <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-black z-50"></span>
            {children}
        </div>
    )
}

export default FullscreenImage