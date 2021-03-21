import React from "react"
import HeroLevel2 from '../components/hero-level-2'

import Navbar from '../components/navbar'
import HeroImage from "../images/reception_home_2.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    
    <SEO 
      title="404 Page Not Found | Hulse Dental, Onalaska WI"
      description=""
    />
        <HeroLevel2 title="Whoops! This page does not exist" image={HeroImage} minHeight="40vh"/>
        <Navbar transparent />
    
  </Layout>
)

export default NotFoundPage
