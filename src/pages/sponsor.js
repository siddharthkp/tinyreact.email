import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function Sponsor(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  return (
    <main>
      <h1>Sponsor tinyreact</h1>
      <p>Stats for September:</p>
      <ul>
        <li>4 issues</li>
        <li>2750 subscribers</li>
        <li>44% open rate</li>
        <li>= 4,840 impressions, 1210 unique</li>
      </ul>
      <br />
      <p>Cost: $300 for the month = 4 issues</p>
      <br />
      <p>
        I try to keep the sponsor copy simple like the rest of the newsletter,{" "}
        <a href="https://tinyreact.email/2020-10-20">here's an example</a>.
      </p>
      <p>
        If you have any questions, feel free to reach out to me via{" "}
        <a href="https://sid.st/email">email</a> or{" "}
        <a href="https://twitter.com/siddharthkp">twitter DM</a>
      </p>
    </main>
  )
}

export default Sponsor

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
