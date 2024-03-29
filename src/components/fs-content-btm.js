import React from 'react'
// import HeroImage from "../images/DSC0090.jpg"

const FsContentBottom = ({children, heroImage, imageAlt}) => {

    return (
        <div className="relative pt-16 flex content-bottom items-end justify-center bg-black"
            style={{
              minHeight: "100vh",
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover bg-black" role="img" arial-label={imageAlt}
              style={{
                backgroundColor:"#000000",
                backgroundImage: `url(${heroImage})`
              }}>
            
          </div>
         
          <div 
            className="flex w-full relative mx-auto bg-black opacity-70 py-16 items-end justify-center" 
          >
              <div className="items-center">
                <div className="w-full md:w-8/12 lg:w-7/12 xl:w-5/12 xs:p-8 lg:px-4 ml-auto mr-auto text-center">
                  <div>
                    
                    <p className=" text-3xl lg:text-4xl text-white leading-10 font-extralight">
                    {children}
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
           
          </div>
        </div>
    )
}

export default FsContentBottom