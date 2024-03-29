require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// TODO: Change Staging url to Prod url after deploying to Prod
const siteUrl = process.env.NODE_ENV === "development"
    ? "http://localhost:9000"
    : "https://tfs365.com/";

const sourceRepos = {
  "content": ["consulting/**"],        
  "assets": ["assets/**"],
  "technologies": ["technologies/**"],
  "legacy": ["legacy/**"],
};

module.exports = {
  siteMetadata: {
    siteUrl: "https://tfs365.com",    
    title: `SSW Consulting - .NET, Azure, CRM, Angular, React, Dynamics`,
    description: `30+ years of Microsoft software and web development experience in Australia, France and China. We build with Angular, React, .NET, Azure, Dynamics 365 CRM.`,
    twitterUsername: `@ssw_tv`,
    image: `/SSW_Squares.png`,
  },
  plugins: [
    ...Object.keys(sourceRepos).map(name => {
      return {
        resolve: "gatsby-source-git",
        options: {
          name,
          remote: process.env.CONTENT_REPO,
          branch: process.env.CONTENT_BRANCH,
          patterns: sourceRepos[name],
          local: `tmp`
        },
      };
    }),
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
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          process.env.GOOGLE_ANALYTICS, // Tracking Id: UA-111111111-1
          process.env.GOOGLE_GTM_ID, // Measurement Id: G-AB123AB12A
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-zendesk-chat",
      options: {
        zendeskKey: process.env.ZENDESK_CHAT_KEY,
        enableDuringDevelop: true, // Optional. Disables Zendesk chat widget when running Gatsby dev server. Defaults to true.
      },
    },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     resolveSiteUrl: () => siteUrl,
    //   },
    // },
  ],
};
