import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroLevel2 from '../components/hero-level-2'
import HeroImage from "../images/reception_home_2.jpg"

import Navbar from "../components/navbar"

const News = () => {

  return (
    <Layout>
      <SEO 
        title="News & Articles | Hulse Dental, Onalaska WI"
        description="Read news and articles about your dental healt."
      />
      <HeroLevel2 title="News & Articles" image={HeroImage} minHeight="20vh"/>
      <Navbar transparent />
      <div style={{minHeight:'80vh'}}>
       {/*<!-- BEGIN Vivial content widget -->*/}
          <div id="lvsc3a6e093d">
          <script src="//cf.nearsay.com/static/widget_sc_js/lvsc3a6e093d" type="text/javascript"></script>
          <div id="lvsc3a6e093d-outer">
          </div>
          </div>
        {/*<!--END Vivial content widget-->*/}


      </div>


    </Layout>
  )
}

export default News
