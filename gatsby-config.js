module.exports = {
  siteMetadata: {
    title: "ziorobo.co"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/styles/typography.js"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript"
  ]
}
