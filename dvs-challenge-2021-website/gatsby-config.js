module.exports = {
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
    {
      resolve: "gatsby-plugin-react-helmet",
    },
  ],
};
