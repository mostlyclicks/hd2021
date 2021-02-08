import React from 'react'
// import HeroImage from "../images/DSC0126.jpg"


const FsContentRight = ({children, heroImage}) => {

    return (
      <>
        <div className="hidden relative md:flex items-stretch justify-end"
            style={{minHeight: "100vh"}}>
          <div className="absolute top-0 w-full h-full bg-left bg-cover"
              style={{backgroundImage: `url(${heroImage})`}}>
          </div>
         
          <div className="
              hidden p-light
              md:flex md:w-6/12 relative opacity-90 font-normal
              lg:w-6/12
              xl:w-4/12
              2xl:w-3/12
            " 
            style={{backgroundColor:"#1A294D"}}    
          >
              <div className="items-center self-center">
                <div className="w-full md:w-12/12 lg:w-10/12 ml-auto mr-auto text-left">
                  <div>
                    <p className="p-light">
                      {children}
                    </p>
                  </div>
                </div>

              </div>
          </div>
          {/* <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          > 

          </div>*/}
        </div>

          {/* mobile, sm */}  
          <div className="md:hidden">
            <div>
                <img src={heroImage} alt="hero image" />
            </div>
            <div className="p-light"
              style={{backgroundColor:"#1A294D"}}
            >
              {children}
            </div>
          </div>
        </>
    )
}

export default FsContentRight

{/* 
// // md:flex text-black text-opacity-90 border-red-700
// md:w-5/12 md:mr-0 
// lg:w-6/12 relative bg-black opacity-80 lg:py-16
// xl:w-3/12 */}