import React from 'react';
import Helmet from 'react-helmet';

export  default function Template({ data }) {
  const {markdownRemark: project} = data;

  return (
    <div>
      <h1>{project.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: project.html}} />
    </div>
  )
}

export const projectQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
