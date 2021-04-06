import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    function onSubmit() {
      window.open("https://buttondown.email/tinyreact", "popupwindow")
      if (window.fathom) window.fathom.trackGoal("OQAWQENM", 0)
    }

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
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/tinyreact"
            method="post"
            target="popupwindow"
            onSubmit={onSubmit}
            className="embeddable-buttondown-form"
          >
            <label className="left-buffer" htmlFor="bd-email">
              Get emails like this in your inbox, every Tuesday. Short and
              sweet. No spam.
            </label>
            <input
              type="email"
              name="email"
              id="bd-email"
              placeholder="Your email (you@example.com)"
            />
            <input type="hidden" value="1" name="embed" />
            <input type="submit" value="Subscribe" />
          </form>
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
