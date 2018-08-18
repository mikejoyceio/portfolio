import React from 'react'
import Link from 'gatsby-link'

// https://www.gatsbyjs.org/packages/gatsby-plugin-page-transitions/
import PageTransition from 'gatsby-plugin-page-transitions';

const IndexPage = ({data}) => (
  <PageTransition>
    <div>
      <ul>
        {data.allMarkdownRemark.edges.map(project => (
          <li key={project.node.id}>
            <Link to={project.node.frontmatter.path}>{project.node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </PageTransition>
)

export const projectQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 9
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { index: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            index
          }
        }
      }
    }
  }
`

export default IndexPage
