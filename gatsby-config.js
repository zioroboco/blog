module.exports = {
  siteMetadata: {
    title: "ziorobo.co"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: { pathToConfigModule: "src/styles/typography.js" }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "content", path: "content" }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript"
  ]
}
