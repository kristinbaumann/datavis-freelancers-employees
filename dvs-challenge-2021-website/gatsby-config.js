module.exports = {
  siteMetadata: {
    title: `DVS Challenge 2021`,
    siteUrl: `https://dvs-soti-challenge-2021.kristin-baumann.com/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: "#008000",
        // Height of the scroll indicator
        height: "3px",
      },
    },
  ],
};
