import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import SchemaOrg from './SchemaOrg'
const SEO = ({ postData, frontmatter = {}, ogImage, isBlogPost }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            organization {
              name
              url
              logo
            }
            social {
              twitter
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {
      const postMeta =
        frontmatter || postData.childMarkdownRemark.frontmatter || {}
      const title = seo.title
        ? `${postMeta.title} - ${seo.title}`
        : postMeta.title
      const description = postMeta.description || seo.description
      const image = ogImage
        ? `${seo.siteUrl}${ogImage}`
        : `${seo.siteUrl}/${seo.image}`
      const url = postMeta.slug
        ? `${seo.siteUrl}/${postMeta.slug}/`
        : seo.siteUrl
      const datePublished = isBlogPost ? postMeta.datePublished : false
      return (
        <>
          <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {isBlogPost ? (
              <meta property="og:type" content="article" />
            ) : (
              <meta property="og:type" content="website" />
            )}
            <meta
              property="og:title"
              content={title}
              data-react-helmet="true"
            />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="fb:app_id" content={seo.social.fbAppID} />
            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={seo.social.twitter} />
            <meta name="twitter:creator" content={seo.social.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
          </Helmet>
          <SchemaOrg
            isBlogPost={isBlogPost}
            url={url}
            title={title}
            image={image}
            description={description}
            datePublished={datePublished}
            siteUrl={seo.siteUrl}
            organization={seo.organization}
            defaultTitle={seo.title}
          />
        </>
      )
    }}
  />
)
SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  frontmatter: PropTypes.object.isRequired,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
  ogImage: PropTypes.object,
}
SEO.defaultProps = {
  isBlogPost: false,
  postData: { childMarkdownRemark: {} },
}
export default SEO
