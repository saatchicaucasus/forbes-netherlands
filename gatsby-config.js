const languages = require('./src/data/languages')
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: process.env.SITE_TITLE,
    description: process.env.SITE_DESCRIPTION,
    siteUrl: process.env.SITE_URL,
    image: process.env.SITE_IMAGE,
    organization: {
      name: process.env.SITE_TITLE,
      url: process.env.SITE_URL,
      logo: process.env.SITE_LOGO,
    },
    social: {
      twitter: process.env.SITE_TWITTER,
    },
    languages,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAG,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `t342gfnlys4a`,
        accessToken: `MlEAV84ElzmL0Uotjlek3oa3WQhv9Tmh8HONK5LyaXQ`,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'post',
        engine: 'flexsearch',
        engineOptions: {
          encode: 'icase',
          tokenize: 'forward',
          async: false,
        },
        query: `
          {
            allContentfulPosts(filter: {node_locale: {eq: "en-US"}}) {
              edges {
                node {
                  postTitle
                  slug
                  id
                  postDate
                }
              }
            }
          }
        `,
        ref: 'id',
        index: ['title'],
        store: ['id', 'slug', 'date', 'title'],
        normalizer: ({ data }) =>
          data.allContentfulPosts.edges.map((item) => ({
            id: item.node.id,
            slug: item.node.slug,
            title: item.node.postTitle,
            date: item.node.postDate,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Forbes Benelux`,
        short_name: `Forbes Benelux`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
