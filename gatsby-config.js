//TODO: Create a site config

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "SSW Website",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-git`,
      options:{
        name: 'content',
        remote: `https://github.com/SSWConsulting/SSW.Website.Content.git`,
        //optionally supply a branch otherwise default
        branch: process.env.CONTENT_BRANCH,
        patterns: ['consulting/**/*']
      }
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-mdx",
  ],
};
