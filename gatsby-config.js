//TODO: Create a site config

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'SSW Website',
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-mdx',
        {
            resolve: `gatsby-source-git`,
            options: {
                name: 'content',
                remote: process.env.CONTENT_REPO,
                branch: process.env.CONTENT_BRANCH,
                patterns: ['**/*.mdx', '**/*.png', '**/*.jpeg'],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assets/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
    ],
};
