import React from 'react'

const ContentTextPict = ({children, image, alt, reversed, positionOne, lgContainer, customClasses}) => {

    return (
        <>
        <section className={`
            flex flex-col-reverse
            md:flex md:mx-auto
            ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'}
            ${lgContainer ? 'lg:container' : ''}
            ${customClasses}
        `}>
            <div className={'p-dark ' + (positionOne ? 'md:w-9/12' : 'md:w-6/12')}>
                {children}
            </div>
            <div className={'p-12 pb-0 md:p-12 ' + (positionOne ? 'md:w-3/12' : 'md:w-6/12')}>
                <img src={image} alt={alt} />
            </div>
        </section>
    </>
    )
}

export default ContentTextPict

//Notes:
    //https://github.com/tailwindlabs/tailwindcss/discussions/1507
    //<div className={"w-full flex-grow lg:flex lg:items-center lg:w-auto " + (expanded ? 'block' : 'hidden')}>