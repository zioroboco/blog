module.exports = {
  siteMetadata: {
    title: "ziorobo.co"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Montserrat Alternates:400"]
      }
    },
    {
      resolve: "gatsby-plugin-typography",
      options: { pathToConfigModule: "src/styles/typography.ts" }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "content", path: "content" }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: { maxWidth: 590 }
          }
        ]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript"
  ]
}
