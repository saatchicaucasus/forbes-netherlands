import React from 'react'
import * as PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AdPremium from '../components/AdPremium'
import AdNonPremium from '../components/AdNonPremium'
import CategoryRoll from '../components/CategoryRoll'
import TVRoll from '../components/TVRoll'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {
  render() {
    const usTopCategory = this.props.data.usTop.edges
    console.log('Top', usTopCategory)
    const usBottomCategory = this.props.data.usBottom.edges
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div className="bg-forbes-site-white">
          <AdPremium />
          {usTopCategory.map(({ node }, i) => (
            <CategoryRoll node={node} key={i} />
          ))}
          <TVRoll />
          <AdNonPremium />
          {usBottomCategory.map(({ node }, i) => (
            <CategoryRoll node={node} key={i} />
          ))}
          <AdPremium />
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageEnUsQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    usTop: allContentfulCategories(
      sort: { order: ASC, fields: categorySort }
      filter: { node_locale: { eq: "en-US" }, categorySort: { gte: 1, lte: 3 } }
    ) {
      edges {
        node {
          id
          node_locale
          category
          categoryColor
          categorySlug
          categorySort
          posts {
            id
            node_locale
            slug
            postTitle
            postDate
            postDescription
            postImage {
              fluid(maxWidth: 960) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            postAuthor {
              fullName
              position
            }
          }
        }
      }
    }
    usBottom: allContentfulCategories(
      sort: { order: ASC, fields: categorySort }
      filter: { node_locale: { eq: "en-US" }, categorySort: { gte: 4, lte: 5 } }
    ) {
      edges {
        node {
          id
          node_locale
          category
          categoryColor
          categorySlug
          categorySort
          posts {
            id
            node_locale
            slug
            postTitle
            postDate
            postDescription
            postImage {
              fluid(maxWidth: 960) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            postAuthor {
              fullName
              position
            }
          }
        }
      }
    }
  }
`
