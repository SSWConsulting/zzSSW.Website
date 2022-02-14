require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// TODO: Remove this after testing
console.log('node.env', process.env.NODE_ENV);

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "SSW Website",
  },
  plugins: [
    {
      resolve: `gatsby-source-git`,
      options: {
        name: "content",
        remote: process.env.CONTENT_REPO,
        branch: process.env.CONTENT_BRANCH,
        patterns: ["**/*.mdx", "**/*.png", "**/*.jpeg"],
      },
    },
    "gatsby-plugin-mdx",
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
        id: "GTM-WP8CQLL",
        includeInDevelopment: true,
      },
    },
    {
      resolve: "gatsby-plugin-zendesk-chat",
      options: {
        zendeskKey: "4589cd27-2d80-457c-a420-621182f9c776",
        enableDuringDevelop: true, // Optional. Disables Zendesk chat widget when running Gatsby dev server. Defaults to true.
      },
    },
  ],
};
