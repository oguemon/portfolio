require("dotenv").config();

module.exports = {
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        ],
        pluginConfig: {
          head: true,
        }
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      api: 'modern',
      sassOptions: {
        style: 'compressed',
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
