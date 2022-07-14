const path = require("path");
const fs = require("fs");
const crypto = require(`crypto`);
const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.sourceNodes = async ({ actions, createNodeId }) => {
  const { createNode } = actions;

  let rawdata = fs.readFileSync("ImageUrlData.json");
  let imageUrlData = JSON.parse(rawdata);

  const turnImageObjectIntoGatsbyNode = (imageObject, imageData) => {
    const nodeId = createNodeId(`image-{${imageObject.id}}`);

    const nodeContent = JSON.stringify(imageObject);

    const nodeContentDigest = crypto
      .createHash("md5")
      .update(nodeContent)
      .digest("hex");

    const nodeData = {
      ...imageObject,
      ...imageData,
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: "ImageUrls",
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    };

    return nodeData;
  };

  const createImageObjectFromUrl = (url) => {
    const lastIndexOfSlash = url.lastIndexOf("/");

    const id = url.slice(lastIndexOfSlash + 1, url.lastIndexOf("."));

    return {
      id,
      image: id,
      imageUrl: url,
    };
  };

  imageUrlData.forEach((imageUrlData) => {
    const imageObject = createImageObjectFromUrl(imageUrlData.imageUrl);

    const nodeData = turnImageObjectIntoGatsbyNode(imageObject, imageUrlData);
    createNode(nodeData);
  });
};

exports.onCreateNode = async ({
  node,
  actions,
  store,
  getCache,
  createNodeId,
}) => {
  if (node.internal.type === "ImageUrls") {
    const { createNode, createNodeField } = actions;
    const fileNode = await createRemoteFileNode({
      url: node.imageUrl,
      parentNodeId: node.id,
      store,
      getCache,
      createNode,
      createNodeId,
    });
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id });
    }
  }
};
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
type ImageUrls implements Node {
  image: File @link(from: "fields.localFile")
}
`);
};

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
