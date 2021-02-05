import React from 'react'
// import HeroImage from "../images/DSC0126.jpg"


const FsContentRight = ({children, heroImage}) => {

    return (
        <div className="relative flex items-stretch justify-start"
            style={{
              minHeight: "100vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-left sm:bg-center bg-cover"
              style={{
                backgroundImage: `url(${heroImage})`
              }}>
            
          </div>
         
          <div className="flex text-black text-opacity-80
              xs:w-10/12 xs:mx-auto xs:my-10 
              sm:w-8/12 sm:my-4 sm:py-4
              md:w-6/12 md:mr-0 md:my-0 md:py-0.5
              lg:w-6/12 relative bg-black opacity-80 lg:py-16
              xl:w-3/12" 
              style={{backgroundColor:"#EEE5D9"}}
              
              >
              <div className="items-center">
                <div className="w-full md:w-12/12 lg:w-10/12 xs:p-8 lg:px-4 ml-auto mr-auto text-left ">
                  <div>
                    
                    <p className=" text-3xl text- leading-10 font-extralight">
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

export default FsContentRight