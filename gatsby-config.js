require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// TODO: Change Staging url to Prod url after deploying to Prod
const siteUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:9000"
    : "https://tfs365.com/";

module.exports = {
  siteMetadata: {
    siteUrl: "https://tfs365.com",
    title: "SSW Website",
  },
  plugins: [
    {
      resolve: "gatsby-source-git",
      options: {
        name: "content",
        remote: process.env.CONTENT_REPO,
        branch: process.env.CONTENT_BRANCH,
        patterns: ["consulting/**"],
      },
    },
    {
      resolve: "gatsby-source-git",
      options: {
        name: "assets",
        remote: process.env.CONTENT_REPO,
        branch: process.env.CONTENT_BRANCH,
        patterns: ["assets/**"],
      },
    },
    {
      resolve: "gatsby-source-git",
      options: {
        name: "technologies",
        remote: process.env.CONTENT_REPO,
        branch: process.env.CONTENT_BRANCH,
        patterns: ["technologies/**"],
      },
    },
    {
      resolve: "gatsby-source-git",
      options: {
        name: "legacy",
        remote: process.env.CONTENT_REPO,
        branch: process.env.CONTENT_BRANCH,
        patterns: ["legacy/**"],
      },
    },
    "gatsby-plugin-mdx-source-name",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              containerClass: "videoContainer", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              backgroundColor: "transparent",
            },
          },
          "gatsby-remark-fenced-divs",
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_GTM_ID,
        includeInDevelopment: true,
      },
    },
    {
      resolve: "gatsby-plugin-zendesk-chat",
      options: {
        zendeskKey: process.env.ZENDESK_CHAT_KEY,
        enableDuringDevelop: true, // Optional. Disables Zendesk chat widget when running Gatsby dev server. Defaults to true.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        resolveSiteUrl: () => siteUrl,
      },
    },
  ],
};
