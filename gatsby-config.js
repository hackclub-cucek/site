/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Hack Club CUCEK",
    titleTemplate: "Hack Club CUCEK",
    description: "Official page of Hack Club CUCEK",
    siteUrl: "https://cucek.hackclub.com",
    author: "HACKCLUB-CUCEK",
    authorSite: "https://github.com/hackclub-cucek",
    image: "/yellow-metal-design-decoration.jpg",
    twitterUsername: "@hackclubcucek",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
