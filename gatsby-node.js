
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const projectTemplate = path.resolve('src/templates/project.js');

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            image {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1240 ) {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }`)
  .then(result => {

    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: projectTemplate
      })
    })

  })
}

