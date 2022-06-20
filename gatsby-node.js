const path = require("path");

// const BASE_URL = "/ssw/";
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // query for all Mdx pages
  const query = graphql(`
    query {
      allMdx {
        nodes {
          fields {
            source
          }
          slug
        }
      }
    }
  `);
  const consultingTemplate = require.resolve(
    "./src/templates/consulting/index.tsx"
  );
  const legacyTemplate = require.resolve("./src/templates/legacy/index.tsx");
  return query.then((result) => {
    // filter by source name "content"
    const consultingNodes = result.data.allMdx.nodes.filter(
      (node) => node.fields.source === "content" && node.slug !== "consulting/" //TODO: Need to filter it by pattern on gatsby-config. This is a temporary workaround
    );

    // filter by source name "legacy"
    const legacyNodes = result.data.allMdx.nodes.filter(
      (node) => node.fields.source === "legacy"
    );

    consultingNodes.forEach((node) => {
      createPage({
        path: `${node.slug}`,
        component: consultingTemplate,
        context: {
          slug: node.slug,
        },
      });
    });

    legacyNodes.forEach((node) => {
      createPage({
        path: `${node.slug}`,
        component: legacyTemplate,
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
