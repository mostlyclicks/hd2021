import React from 'react'

const Reviews = () => {

  const resizeIframe = (obj) => {
        obj.height =
          obj.contentWindow.document.documentElement.scrollHeight + "px"
  }


  return (
    <div className="flex justify-center pt-8 pb-4 border-black border-b-1">
      <iframe
        src="https://reviews.solutionreach.com/vs/reviews/hulse_dental1"
        style={{ 
            border: "0",
            backgroundColor:"transparent",
            fontSize:"72px"
            
          }}
        width="75%"
        height="auto"
        frameborder="0"
        scrolling="yes"
        
      ></iframe>
    </div>
  )
}

export default Reviews