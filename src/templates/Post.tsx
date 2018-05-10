import * as React from "react"
import graphql from "graphql-tag"

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="post-container">
      <div className="post">
        <h1>{frontmatter.title}</h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <p>Posted {frontmatter.date}</p>
    </div>
  )
}

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
      }
    }
  }
`
