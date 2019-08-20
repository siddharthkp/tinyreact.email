import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        date={post.frontmatter.date}
      >
        <SEO date={post.frontmatter.date} title={siteTitle} />

        <div
          className="links"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <footer>
          <Link to="/">
            Get emails like this in your inbox, every Tuesday.{" "}
          </Link>
          Short and sweet. No spam.
        </footer>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "MMMM DD")
      }
    }
  }
`
