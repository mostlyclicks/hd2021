import React from 'react'

const FsContentLeft = ({children, heroImage}) => {

    return (
      <>
        <div className="hidden relative md:flex items-stretch justify-start"
            style={{minHeight: "100vh"}}>
          <div className="absolute top-0 w-full h-full bg-left sm:bg-center bg-cover"
              style={{backgroundImage: `url(${heroImage})`}}>
          </div>
         
          <div className="hidden p-light
              md:flex md:w-6/12 relative opacity-90 font-normal
              lg:w-6/12
              xl:w-4/12
              2xl:w-3/12
              
              " 
              style={{backgroundColor:"#6171A6"}}
              >
              <div className="items-center self-center">
                <div className="w-full md:w-12/12 lg:w-10/12 ml-auto mr-auto text-left ">
                  <div>
                    
                    <p className="p-light">
                      {children}
                    </p>
                  </div>
                </div>

              </div>
          </div>
        </div>
          
          {/* mobile, sm */}
          <div className="md:hidden">
            <div>
              <img src={heroImage} alt="Lobby" />
            </div>
            <div className="p-light" style={{backgroundColor:"#6171A6"}}>
              {children}
            </div>
          </div>
        </>
    )
}

export default FsContentLeft