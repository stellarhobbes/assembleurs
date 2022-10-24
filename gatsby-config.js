require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Les Assembleurs`,
    siteUrl: `https://assembleurs.co/`,
  },
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL:
          process.env.STRAPI_API_URL || "https://assembleurs.herokuapp.com",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "solution",
            api: {
              backgroundImage: {
                populate: "*",
              },
              slug: {
                populate: "*",
              },
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
                populate: "*",
              },
              slug: {
                populate: "*",
              },
            },
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
            },
          },
          {
            singularName: "blog",
            api: {
              image: {
                populate: "*",
              },
              slug: {
                populate: "*",
              },
            },
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
            },
          },
        ],
        singleTypes: [
          {
            singularName: "homepage",
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "contact",
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icons/Icone_logo_Assembleurs.png`,
        name: `Les Assembleurs`,
        short_name: `Assembleurs`,
        start_url: `/`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 500,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`,
          `Big Shoulders Display\:600,700,800`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage }) => {
          let pages = [];
          allSitePage.edges.map((edge) => {
            pages.push({
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            });
          });

          return pages;
        },
      },
    },
  ],
};
