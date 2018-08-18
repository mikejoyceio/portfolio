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
    'gatsby-transformer-remark',
    'gatsby-plugin-page-transitions'
  ],
}
