module.exports = {
  siteMetadata: {
    title: "Maya Murry Portfolio",
    siteUrl: "https://www.mayamurry.com",
  },
  plugins: [
    // 1. Add these new plugins first
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    
    // 2. Keep your existing fonts plugin
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:400,700`,
          `Amiri\:400`
        ],
        display: 'swap'
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
            require('@tailwindcss/postcss7-compat'),
            require('autoprefixer')
        ],
      },
    },
  ]
}