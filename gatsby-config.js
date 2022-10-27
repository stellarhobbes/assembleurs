require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Les Assembleurs`,
    description:
      "Les Assembleurs est une société coopérative d’intérêt collectif (SCIC) ayant pour mission d’accompagner, former et animer une dynamique collective pour un numérique inclusif et créatif en Hauts-de-France.",
    siteUrl: `https://assembleurs.co/`,
    image:
      "https://res.cloudinary.com/dgnptaxm4/image/upload/v1666271732/illustration-assembleurs_l9rl5h.png",
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
            singularName: "cooperative",
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
            singularName: "equipe",
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
            singularName: "chiffre",
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
            singularName: "societaire",
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
            singularName: "temoignage",
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
            singularName: "mission",
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
            singularName: "page-solution",
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
            singularName: "sur-le-terrain",
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
            singularName: "nos-commun",
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
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://assembleurs.co/",
        sitemap: "https://assembleurs.co/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
