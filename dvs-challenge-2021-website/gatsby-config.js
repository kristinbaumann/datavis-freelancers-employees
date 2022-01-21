module.exports = {
  siteMetadata: {
    title: `Freelancers and Employees in the Data Vis Industry`,
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
        color: "#999999",
        // Height of the scroll indicator
        height: "3px",
      },
    },
  ],
};
