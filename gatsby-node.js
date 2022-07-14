const path = require("path");
const fs = require("fs");
const crypto = require(`crypto`);
const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  let rawdata = fs.readFileSync("ImageUrlData.json");
  let imageUrlData = JSON.parse(rawdata);

  console.log("imageUrlData\n", imageUrlData);

  // imageUrlData.map((image) =>
  //   createNode({
  //     ...image,
  //     id: createNodeId(image.imageUrl),
  //     internal: {
  //       type: "ImageUrls",
  //       contentDigest: createContentDigest(image),
  //     },
  //   })
  // );
  // const myData = [
  //   {
  //     imageUrl:
  //       "https://raw.githubusercontent.com/SSWConsulting/SSW.Website.Content/main/assets/images/thumbs/thumb-angular-icon.png",
  //     exactMatch: ["angular", "angularjs"],
  //   },
  //   {
  //     imageUrl:
  //       "https://raw.githubusercontent.com/SSWConsulting/SSW.Website.Content/main/assets/images/thumbs/thumb-azure-icon.jpg",
  //     exactMatch: ["azure", "service-azure"],
  //   },
  // ];
  // const nodeContent = myData;
  // console.log("myData", myData);
  // console.log("nodeContent", nodeContent);

  // const nodeTest = nodeContent.map((imageObject, index) => {
  //   console.log(index, "-", imageObject);
  //   return {
  //     ...imageObject,
  //     id: createNodeId(imageObject.imageUrl),
  //     internal: {
  //       type: `TestImageURLNOde`,
  //       contentDigest: createContentDigest(imageObject),
  //     },
  //   };
  // });
  const turnImageObjectIntoGatsbyNode = (imageObject, imageData) => {
    console.log("imageObject", imageObject);
    console.log("imageData", imageData);
    // const content = {
    //   content: imageData.imageUrl,
    //   exactMatch: imageData.exactMatch,
    //   // ["image___NODE"]: createNodeId(imageData.imageUrl),
    // };
    //console.log("Content", content);

    const nodeId = createNodeId(`image-{${imageObject.id}}`);
    console.log("nodeId", nodeId);

    console.log("imageObject", imageObject);
    const nodeContent = JSON.stringify(imageObject);
    console.log("imageObject-Stringify", nodeContent);

    const nodeContentDigest = crypto
      .createHash("md5")
      .update(nodeContent)
      .digest("hex");
    console.log("nodeContentDigest", nodeContentDigest);

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
    console.log("nodeData", nodeData);
    return nodeData;
  };

  const createImageObjectFromUrl = (url) => {
    console.log("url\n", url);
    const lastIndexOfSlash = url.lastIndexOf("/");
    console.log("lastIndexOfSlash\n", lastIndexOfSlash);
    const id = url.slice(lastIndexOfSlash + 1, url.lastIndexOf("."));
    console.log("id\n", id);
    return {
      id,
      image: id,
      imageUrl: url,
    };
  };
  // console.log("nodeContent\n", nodeTest);

  imageUrlData.forEach((imageUrlData) => {
    console.log("imageUrlData-URL\n", imageUrlData.imageUrl);
    const imageObject = createImageObjectFromUrl(imageUrlData.imageUrl);
    console.log("imgObject\n", imageObject);
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
    // console.log("Actions\n", actions);
    // console.log("store\n", store);
    // console.log("store\n", getCache);
    // console.log("NODE\n", node);
    const { createNode, createNodeField } = actions;
    console.log("CREATED--NODE", node);
    const fileNode = await createRemoteFileNode({
      url: node.imageUrl,
      parentNodeId: node.id,
      store,
      getCache,
      createNode,
      createNodeId,
    });
    console.log("fileNode", fileNode);
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
