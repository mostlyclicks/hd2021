require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Hulse Dental of Onalaska WI`,
    description: `Learn more about Hulse Dental, our services and our office located in Onalaska WI`,
    author: `mostlyClicks`,
  },
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `hd01`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => page => `/${page.uid}`,
        schemas: {
         page: require("./custom_types/page.json"),
         homePage: require("./custom_types/home-page.json"),
         staffMember: require("./custom_types/staff-member.json")
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        appElement: '#___gatsby',
        modalProps: {
          closeTimeoutMS: 500,
        },
      },
    },
    {
      resolve:`gatsby-plugin-react-leaflet`,
      // options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      // }
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans JP\:100,300,400,700`


        ],
        display: 'swap'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
