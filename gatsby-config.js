module.exports = {
  siteMetadata: {
    title: `Gatsby Panthera`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      },
    },
    {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-114612456-1',
    },
  },
  {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `pridi\:300,400,600`,
          `open sans\:300,400,700`,
        ]
      }
    }
],
}
