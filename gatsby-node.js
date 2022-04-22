const path = require("path");
const BASE_URL = "/ssw/";
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
  return query.then((result) => {
    // filter by source name "blog"
    const consultingNodes = result.data.allMdx.nodes.filter(
      (node) => node.fields.source === "content"
    );
    consultingNodes.forEach((node) => {
      createPage({
        path: `${BASE_URL}${node.slug}`,
        component: consultingTemplate,
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
