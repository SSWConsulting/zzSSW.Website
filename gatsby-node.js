const path = require("path");
const fs = require("fs");

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  let rawdata = fs.readFileSync("ImageUrlData.json");
  let imageUrlData = JSON.parse(rawdata);
  imageUrlData.map((image) =>
    createNode({
      ...image,
      id: createNodeId(image.imageUrl),
      internal: {
        type: "ImageUrls",
        contentDigest: createContentDigest(image),
      },
    })
  );
};

// const BASE_URL = "/ssw/";
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // query for all Mdx pages
  const query = graphql(`
    query {
      allImageUrls {
        nodes {
          imageUrl
          id
          exactMatch
        }
      }
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
      (node) => node.fields.source === "content"
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
