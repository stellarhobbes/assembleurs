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
};

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type allStrapiSolution implements Node {
      buttonText: String
      content: String
    },
    type allStrapiRessource implements Node {
      accroche: String
    }
  `
  createTypes(typeDefs)
}