import React from 'react'

const FSTextBlock = ({children, bgColor, textColor}) => {
    
    return (
        <div className={'flex ' + bgColor}>
            <div className={
                'w-full mx-auto my-2 sm:w-10/12 md:my-12 md:w-8/12 lg:w-8/12 xl:w-6/12 '
                + textColor
            }>
                {children}
            </div>
        </div>
    )
}

export default FSTextBlock