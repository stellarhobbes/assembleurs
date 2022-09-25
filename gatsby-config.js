require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `assembleurs-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "https://assembleurs.herokuapp.com",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "solution",
            api: {
              backgroundImage: {
                populate: "*"
              },
              slug: {
                populate: "*"
              }
            },
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
            },
          },
          {
            singularName: "ressource",
            api: {
              backgroundImage: {
                populate: "*"
              },
              slug: {
                populate: "*"
              }
            },
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
            },
          },
        ],
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 500
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`,
          `Big Shoulders Display\:600,700,800` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
