module.exports = {
  siteMetadata: {
    title: "ziorobo.co"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Montserrat Alternates:600"]
      }
    },
    {
      resolve: "gatsby-plugin-typography",
      options: { pathToConfigModule: "src/styles/typography.ts" }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "content", path: "content/publish" }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {}
          },
          {
            resolve: "gatsby-remark-images",
            options: { maxWidth: 720 }
          }
        ]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript"
  ]
}
