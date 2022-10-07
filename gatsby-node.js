const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allStrapiSolution {
        nodes {
          slug
        }
      }
      allStrapiBlog {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.allStrapiSolution.nodes.forEach((solution) => {
    createPage({
      path: `/solutions/${solution.slug}`,
      component: path.resolve(`src/templates/solution-template.js`),
      context: {
        slug: solution.slug,
      },
    });
  });
  result.data.allStrapiBlog.nodes.forEach((blog) => {
    createPage({
      path: `/sur-le-terrain/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    });
  });
};

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type allStrapiSolution implements Node @infer {
      buttonText: String
      content: String
      backgroundImage: File
    },
    type allStrapiBlog implements Node @infer {
      content: String
      image: File
    },
    type allStrapiRessource implements Node @infer {
      accroche: String
    }
  `;
  createTypes(typeDefs);
};
