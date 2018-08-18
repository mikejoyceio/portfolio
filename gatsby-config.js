/**
 * @file Gatsby configuration
 * @see {@link https://www.gatsbyjs.org/}
 */

/**
 * PostCSS Autoprefixer
 * @external ('autoprefixer')
 * @see {@link https://github.com/postcss/autoprefixer}
 */
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
  },
  plugins: [
  	`gatsby-plugin-react-helmet`,
    `gatsby-plugin-page-transitions`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  	{
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          autoprefixer()
        ],
        precision: 8, // SASS default: 5
      },
  	},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: `projects`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 200,
            },
          },
        ],
      },
    }
  ]
}
