import * as React from "react"
import graphql from "graphql-tag"
import Link from "gatsby-link"

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      {posts.map(({ node }) => {
        const { path, title, date } = node.frontmatter
        return (
          <div key={path}>
            <h1>
              <Link style={{ textDecoration: "none" }} to={path}>
                {title}
              </Link>
            </h1>
            <p dangerouslySetInnerHTML={{ __html: node.html }} />
            <small>{date}</small>
          </div>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  }
`
